"use client";

import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="scroll-mt-24 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#6D28D9] uppercase">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {t.process.title}
          </h2>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {t.process.items.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border-2 border-[#0C1210] bg-white p-6 shadow-hard-sm"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "inline-block rounded-md border-2 border-[#0C1210] px-2 py-0.5 font-mono text-sm font-bold tabular-nums",
                  i % 2 === 0
                    ? "bg-[#E93BB4] text-[#0C1210]"
                    : "bg-[#6D28D9] text-white"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[17px] font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-9">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg text-sm font-bold text-[#6D28D9] transition-colors hover:text-[#5B21B6] focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
          >
            {t.process.cta}
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
