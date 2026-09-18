"use client";

import {
  ArrowRight,
  Check,
  Compass,
  KeyRound,
  Route,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  route: Route,
  key: KeyRound,
};

/**
 * Three main services — clear, simple, minimalist, CTA-first.
 * Accents alternate violet / fuchsia / violet down the grid.
 */
export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#6D28D9] uppercase">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {t.services.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:gap-6 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? KeyRound;
            const violet = i % 2 === 0;
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border-2 border-[#0C1210] bg-white p-6 shadow-hard-sm transition-all hover:-translate-y-1 hover:shadow-hard md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "grid size-11 place-items-center rounded-xl border-2 border-[#0C1210]",
                      violet ? "bg-[#6D28D9]" : "bg-[#E93BB4]"
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-5",
                        violet ? "text-white" : "text-[#0C1210]"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "font-mono text-2xl font-bold tabular-nums",
                      violet ? "text-[#6D28D9]" : "text-[#E93BB4]"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm font-medium text-foreground"
                    >
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          violet ? "text-[#6D28D9]" : "text-[#E93BB4]"
                        )}
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-7 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0C1210] px-5 py-3 text-sm font-bold shadow-hard-sm transition-all hover:-translate-y-0.5 hover:shadow-hard focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none",
                    violet
                      ? "bg-[#6D28D9] text-white"
                      : "bg-[#E93BB4] text-[#0C1210]"
                  )}
                >
                  {item.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
