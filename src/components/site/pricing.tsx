"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

/**
 * Pricing split in two parts:
 *  1) Featured live-assistance wallet onboarding offer (violet card)
 *  2) "Mapping or Recovery" — the existing three-tier grid
 */
export function Pricing() {
  const { t } = useLanguage();

  return (
    <section
      id="pricing"
      className="scroll-mt-24 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#6D28D9] uppercase">
          {t.pricing.eyebrow}
        </p>

        {/* Part 1 — Featured live-assistance offer */}
        <div className="relative mx-auto mt-8 max-w-3xl rounded-2xl border-2 border-[#0C1210] bg-[#6D28D9] p-7 text-white shadow-hard md:p-9">
          <span className="absolute -top-3.5 left-6 rounded-full border-2 border-[#0C1210] bg-[#E93BB4] px-3 py-1 font-mono text-[10px] font-bold tracking-[0.14em] text-[#0C1210] uppercase">
            {t.pricing.walletOffer.badge}
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-balance md:text-3xl">
            {t.pricing.walletOffer.title}
          </h2>

          <p className="mt-4 flex items-baseline gap-2">
            <span className="font-mono text-5xl font-bold tracking-tight tabular-nums">
              {t.pricing.walletOffer.price}
            </span>
            {t.pricing.walletOffer.period ? (
              <span className="text-sm text-white/85">
                {t.pricing.walletOffer.period}
              </span>
            ) : null}
          </p>

          <ul className="mt-6 space-y-3">
            {t.pricing.walletOffer.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm leading-relaxed font-medium"
              >
                <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl border-2 border-[#0C1210] bg-white px-6 py-3.5 text-[15px] font-bold text-[#0C1210] shadow-hard-sm transition-all hover:-translate-y-0.5 hover:shadow-hard focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t.pricing.walletOffer.cta}
          </a>
        </div>

        {/* Part 2 — Mapping or Recovery tiers */}
        <div className="mt-16 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {t.pricing.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:gap-6 lg:grid-cols-3">
          {t.pricing.tiers.map((tier, i) => {
            const highlighted = i === 1;
            return (
              <article
                key={tier.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border-2 border-[#0C1210] p-6 md:p-7",
                  highlighted
                    ? "bg-[#E93BB4] shadow-hard"
                    : "bg-white shadow-hard-sm"
                )}
              >
                {tier.badge ? (
                  <span
                    className={cn(
                      "absolute -top-3.5 left-6 rounded-full border-2 border-[#0C1210] px-3 py-1 font-mono text-[10px] font-bold tracking-[0.14em] uppercase",
                      highlighted
                        ? "bg-[#0C1210] text-[#F6F4EC]"
                        : "bg-[#E93BB4] text-[#0C1210]"
                    )}
                  >
                    {tier.badge}
                  </span>
                ) : null}

                <h3
                  className={cn(
                    "text-[15px] font-semibold tracking-wide",
                    highlighted ? "text-[#0C1210]/75" : "text-muted-foreground"
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-3 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-bold tracking-tight text-foreground tabular-nums">
                    {tier.price}
                  </span>
                  {tier.period ? (
                    <span
                      className={cn(
                        "text-sm",
                        highlighted ? "text-[#0C1210]/70" : "text-muted-foreground"
                      )}
                    >
                      {tier.period}
                    </span>
                  ) : null}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-relaxed font-medium text-foreground"
                    >
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          highlighted ? "text-[#0C1210]" : "text-[#6D28D9]"
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-7 inline-flex items-center justify-center rounded-xl border-2 border-[#0C1210] px-5 py-3 text-sm font-bold transition-all hover:-translate-y-0.5",
                    highlighted
                      ? "bg-[#0C1210] text-[#F6F4EC] shadow-[3px_3px_0_0_rgba(12,18,16,0.35)]"
                      : "bg-[#E93BB4] text-[#0C1210] shadow-hard-sm hover:shadow-hard"
                  )}
                >
                  {tier.cta}
                </a>

                {tier.note ? (
                  <p
                    className={cn(
                      "mt-4 text-xs leading-relaxed",
                      highlighted ? "text-[#0C1210]/70" : "text-muted-foreground"
                    )}
                  >
                    {tier.note}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          {t.pricing.disclaimer}
        </p>
      </div>
    </section>
  );
}
