"use client";

import { useLanguage } from "@/lib/language-context";

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-border bg-white/50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#6D28D9] uppercase">
            {t.whyUs.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {t.whyUs.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:gap-5">
          {t.whyUs.items.map((item, i) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border-2 border-[#0C1210] bg-white p-6 shadow-hard-sm"
            >
              <span
                aria-hidden="true"
                className="font-mono text-base font-bold text-[#6D28D9] tabular-nums"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
