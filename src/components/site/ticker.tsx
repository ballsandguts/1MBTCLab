"use client";

import { useLanguage } from "@/lib/language-context";

/**
 * Decorative technical ticker (marquee). aria-hidden: purely illustrative,
 * the same terms appear as real content in the services section.
 */
export function Ticker() {
  const { t } = useLanguage();
  const items = t.ticker;

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y-2 border-[#0C1210] bg-[#0C1210] py-2.5"
    >
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((term, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 pr-10 font-mono text-xs font-medium tracking-[0.18em] text-[#F6F4EC]/75 uppercase"
          >
            {term}
            <span className="text-[#F472D0]">{"//"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
