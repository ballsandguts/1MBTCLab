"use client";

import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { SITE_CONFIG } from "@/lib/site-config";

/**
 * Fixed bottom contact bar — mobile only.
 * Platform names (WhatsApp · Telegram) are identical in both languages;
 * only accessibility labels are translated.
 */
export function MobileContactBar() {
  const { t } = useLanguage();

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-[#0C1210] bg-background/95 backdrop-blur-md pb-safe md:hidden"
      role="navigation"
      aria-label={t.a11y.mobileBar}
    >
      <div className="grid grid-cols-2 divide-x-2 divide-[#0C1210]">
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.a11y.whatsapp}
          className="flex min-h-[56px] items-center justify-center gap-2 bg-[#E93BB4] text-sm font-bold text-[#0C1210] transition-colors active:bg-[#D42AA4]"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          {t.mobileBar.whatsapp}
        </a>
        <a
          href={SITE_CONFIG.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.a11y.telegram}
          className="flex min-h-[56px] items-center justify-center gap-2 bg-[#6D28D9] text-sm font-bold text-white transition-colors active:bg-[#5B21B6]"
        >
          <Send className="size-4 text-[#F6F4EC]" aria-hidden="true" />
          {t.mobileBar.telegram}
        </a>
      </div>
    </div>
  );
}
