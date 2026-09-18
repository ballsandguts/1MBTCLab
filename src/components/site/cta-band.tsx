"use client";

import { Zap } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { SITE_CONFIG } from "@/lib/site-config";

/**
 * Dark conversion band — one screen of pure CTA between sections.
 */
export function CtaBand() {
  const { t } = useLanguage();

  return (
    <section className="border-y-2 border-[#0C1210] bg-[#0C1210] py-14 md:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#F6F4EC] text-balance md:text-4xl">
          {t.ctaBand.title}
        </h2>
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.a11y.whatsapp}
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#F6F4EC] bg-[#F6F4EC] px-7 py-4 text-base font-bold text-[#0C1210] shadow-hard-violet transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#6D28D9] focus-visible:ring-2 focus-visible:ring-[#E93BB4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1210]"
        >
          <Zap className="size-5 text-[#6D28D9]" aria-hidden="true" />
          {t.ctaBand.button}
        </a>
        <p className="mt-4 font-mono text-xs tracking-[0.14em] text-[#F6F4EC]/60 uppercase">
          {t.ctaBand.sub}
        </p>
      </div>
    </section>
  );
}
