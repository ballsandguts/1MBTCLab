"use client";

import { useLanguage } from "@/lib/language-context";

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-[#E93BB4] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#2B0A22]"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
