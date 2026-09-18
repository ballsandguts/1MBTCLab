"use client";

import {
  ArrowRight,
  Clock,
  FileSearch,
  Lock,
  MessageCircle,
  Send,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { SITE_CONFIG } from "@/lib/site-config";

const chipIcons: LucideIcon[] = [FileSearch, ShieldCheck, Lock, Clock];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Backdrop */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid-faint" />
      <div
        aria-hidden="true"
        className="glow-fuchsia absolute -top-32 left-1/2 h-[420px] w-[780px] -translate-x-1/2"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 md:px-6 md:pt-20 md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#0C1210] bg-white px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.16em] text-[#6D28D9] uppercase shadow-hard-sm">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-[#6D28D9]"
              />
              {t.hero.eyebrow}
            </p>

            <h1 className="text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-[3.4rem]">
              <span className="text-foreground">{t.hero.titleA}</span>{" "}
              <span className="mt-2 inline-block rounded-xl border-2 border-[#0C1210] bg-fv-gradient px-3 py-1 text-white box-decoration-clone">
                {t.hero.titleB}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.whatsapp}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0C1210] bg-[#E93BB4] px-6 py-3.5 text-[15px] font-bold text-[#0C1210] shadow-hard transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0C1210] focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {t.hero.primaryCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0C1210] bg-white px-6 py-3.5 text-[15px] font-bold text-foreground shadow-hard-sm transition-all hover:-translate-y-0.5 hover:shadow-hard focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            {/* Trust chips */}
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {t.hero.chips.map((chip, i) => {
                const Icon = chipIcons[i % chipIcons.length];
                return (
                  <li
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#0C1210]/20 bg-white px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    <Icon className="size-3.5 text-[#6D28D9]" aria-hidden="true" />
                    {chip.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Conversion card — fast path to contact */}
          <aside className="rounded-2xl border-2 border-[#0C1210] bg-white p-6 shadow-hard md:p-7 lg:justify-self-end">
            <p className="inline-block rounded-full border-2 border-[#0C1210] bg-[#6D28D9] px-3 py-1 font-mono text-[11px] font-bold tracking-[0.14em] text-white uppercase">
              {t.hero.conversionCard.badge}
            </p>
            <h2 className="mt-4 text-2xl leading-snug font-bold text-balance md:text-[1.7rem]">
              {t.hero.conversionCard.title}
            </h2>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.whatsapp}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0C1210] bg-[#E93BB4] px-5 py-3.5 text-[15px] font-bold text-[#0C1210] shadow-hard-sm transition-all hover:-translate-y-0.5 hover:shadow-hard focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <MessageCircle className="size-4.5" aria-hidden="true" />
                {t.hero.conversionCard.whatsapp}
              </a>
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.a11y.telegram}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0C1210] bg-white px-5 py-3.5 text-[15px] font-bold text-foreground shadow-hard-sm transition-all hover:-translate-y-0.5 hover:shadow-hard focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Send className="size-4.5 text-[#6D28D9]" aria-hidden="true" />
                {t.hero.conversionCard.telegram}
              </a>
            </div>

            <p className="mt-5 text-center font-mono text-[11px] tracking-wide text-muted-foreground">
              {t.hero.conversionCard.note}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
