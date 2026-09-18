import type { TranslationDict } from "./translations-en";
import { en } from "./translations-en";
import { es } from "./translations-es";

export type Language = "en" | "es";

/**
 * Single source of truth for ALL user-facing text in both languages.
 * The Spanish object is typed as `typeof en` (TranslationDict), so the
 * compiler rejects any structural mismatch between languages.
 */
export const translations: Record<Language, TranslationDict> = { en, es };

export type { TranslationDict };
