"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

/**
 * Discreet, elegant, accessible language switcher.
 * - Active language: strong contrast + underline (not color alone).
 * - Inactive language: secondary text, hover/focus in fuchsia (#E93BB4).
 * - Never a large colorful button.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={cn(
        "flex items-center gap-1 font-mono text-xs tracking-widest",
        className
      )}
      role="group"
      aria-label={t.a11y.languageSwitcher}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label={t.a11y.switchToEn}
        aria-current={language === "en" ? "true" : undefined}
        className={cn(
          "rounded-sm px-1.5 py-1 transition-colors outline-none",
          "focus-visible:ring-2 focus-visible:ring-[#E93BB4] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          language === "en"
            ? "font-semibold text-foreground underline decoration-[#E93BB4] decoration-2 underline-offset-4"
            : "text-muted-foreground hover:text-[#E93BB4]"
        )}
      >
        EN
      </button>
      <span aria-hidden="true" className="text-muted-foreground/60 select-none">
        |
      </span>
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-label={t.a11y.switchToEs}
        aria-current={language === "es" ? "true" : undefined}
        className={cn(
          "rounded-sm px-1.5 py-1 transition-colors outline-none",
          "focus-visible:ring-2 focus-visible:ring-[#E93BB4] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          language === "es"
            ? "font-semibold text-foreground underline decoration-[#E93BB4] decoration-2 underline-offset-4"
            : "text-muted-foreground hover:text-[#E93BB4]"
        )}
      >
        ES
      </button>
    </div>
  );
}
