"use client";

import { useLanguage } from "@/lib/language-context";

export function Stats() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.stats.items.map((s) => s.label).join(", ")}
      className="bg-[#6D28D9]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 md:px-6 md:py-12 lg:grid-cols-4">
        {t.stats.items.map((stat) => (
          <div key={stat.label}>
            <p className="font-mono text-3xl font-bold tracking-tight text-[#F6F4EC] tabular-nums md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-snug font-semibold text-[#F6F4EC]/85">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
