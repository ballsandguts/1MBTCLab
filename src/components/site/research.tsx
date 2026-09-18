"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Research() {
  const { t } = useLanguage();

  return (
    <section
      id="research"
      className="scroll-mt-24 border-y border-border bg-white/50 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#6D28D9] uppercase">
            {t.research.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {t.research.title}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {t.research.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:gap-5">
          {t.research.items.map((item) => (
            <article
              key={item.title}
              className="group flex items-center justify-between gap-4 rounded-2xl border-2 border-[#0C1210] bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-hard md:p-6"
            >
              <div className="flex items-center gap-4">
                <span className="shrink-0 rounded-full border-2 border-[#0C1210] bg-[#E93BB4] px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.14em] text-[#0C1210] uppercase">
                  {item.tag}
                </span>
                <h3 className="text-[15px] leading-snug font-bold text-foreground md:text-base">
                  {item.title}
                </h3>
              </div>
              <ArrowUpRight
                className="size-5 shrink-0 text-[#0C1210]/40 transition-colors group-hover:text-[#6D28D9]"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
