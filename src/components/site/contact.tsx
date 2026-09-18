"use client";

import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { SITE_CONFIG } from "@/lib/site-config";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="rounded-3xl border-2 border-[#0C1210] bg-[#E93BB4] p-8 text-center shadow-hard md:p-12">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#0C1210]/70 uppercase">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0C1210] text-balance md:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed font-medium text-[#0C1210]/80">
            {t.contact.description}
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.a11y.whatsapp}
              className="rounded-2xl border-2 border-[#0C1210] bg-[#0C1210] p-5 text-left shadow-[4px_4px_0_0_rgba(246,244,236,0.9)] transition-all hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#0C1210] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E93BB4] outline-none"
            >
              <MessageCircle
                className="size-6 text-[#F472D0]"
                aria-hidden="true"
              />
              <p className="mt-3 font-bold text-[#F6F4EC]">
                {t.contact.whatsappLabel}
              </p>
              <p className="mt-1 font-mono text-xs text-[#F6F4EC]/60">
                {t.contact.whatsappSub}
              </p>
            </a>

            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.a11y.telegram}
              className="rounded-2xl border-2 border-[#0C1210] bg-white p-5 text-left shadow-[4px_4px_0_0_rgba(246,244,236,0.9)] transition-all hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#0C1210] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E93BB4] outline-none"
            >
              <Send
                className="size-6 text-[#6D28D9]"
                aria-hidden="true"
              />
              <p className="mt-3 font-bold text-foreground">
                {t.contact.telegramLabel}
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {t.contact.telegramSub}
              </p>
            </a>
          </div>

          <p className="mt-8 text-xs leading-relaxed font-medium text-[#0C1210]/70">
            {t.contact.note}
          </p>
        </div>
      </div>
    </section>
  );
}
