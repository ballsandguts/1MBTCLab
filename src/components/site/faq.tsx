"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/language-context";

export function Faq() {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-20 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div>
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[#6D28D9] uppercase">
            {t.faq.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {t.faq.title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-8">
          {t.faq.items.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-[15px] font-semibold hover:text-[#6D28D9] hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
