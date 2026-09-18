"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { translations, type Language, type TranslationDict } from "./translations";

const STORAGE_KEY = "1mbtc-lab-language";

/**
 * English is ALWAYS the initial/snapshot default (also for hydration).
 * The selected language is stored in localStorage and re-applied on return
 * visits. Document language + SEO metadata stay in sync via effect.
 */

function readStoredLanguage(): Language {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "es" ? "es" : "en";
  } catch {
    return "en";
  }
}

const languageStore = {
  listeners: new Set<() => void>(),
  get(): Language {
    return readStoredLanguage();
  },
  getServer(): Language {
    return "en";
  },
  set(lang: Language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore persistence failures (privacy mode, etc.).
    }
    for (const listener of languageStore.listeners) listener();
  },
  subscribe(onChange: () => void) {
    languageStore.listeners.add(onChange);
    window.addEventListener("storage", onChange);
    return () => {
      languageStore.listeners.delete(onChange);
      window.removeEventListener("storage", onChange);
    };
  },
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const match = attr.match(/^(\w+)=(.+)$/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function applyDocumentMetadata(lang: Language) {
  const meta = translations[lang].meta;

  document.documentElement.lang = lang;
  document.title = meta.title;

  setMeta('meta[name="description"]', "name=description", meta.description);
  setMeta('meta[property="og:title"]', "property=og:title", meta.ogTitle);
  setMeta(
    'meta[property="og:description"]',
    "property=og:description",
    meta.ogDescription
  );
  setMeta('meta[property="og:locale"]', "property=og:locale", meta.ogLocale);
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    languageStore.subscribe,
    languageStore.get,
    languageStore.getServer
  );

  const setLanguage = useCallback((lang: Language) => {
    languageStore.set(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    languageStore.set(readStoredLanguage() === "es" ? "en" : "es");
  }, []);

  // Keep <html lang>, <title>, meta description and Open Graph in sync.
  // No setState here — pure external-system synchronization.
  //
  // Title guard: React/Next owns the server-rendered <title> and may
  // re-assert it AFTER our effect runs during the hydration window
  // (observed on reload with a stored non-default language). A guarded
  // MutationObserver re-applies our title whenever it drifts, then goes
  // quiet (no loop: our own writes match `expected`).
  useEffect(() => {
    applyDocumentMetadata(language);

    const expected = translations[language].meta.title;
    const observer = new MutationObserver(() => {
      if (document.title !== expected) {
        document.title = expected;
      }
    });
    observer.observe(document.head, {
      subtree: true,
      childList: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
