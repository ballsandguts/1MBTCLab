"use client";

import { useLanguage } from "@/lib/language-context";
import { SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#services", label: t.nav.recover },
    { href: "#process", label: t.nav.process },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#research", label: t.nav.research },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <footer className="mt-auto border-t-2 border-[#0C1210] bg-[#EFEDE2]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="rounded-lg border-2 border-[#0C1210] bg-[#0C1210] px-2 py-1 font-mono text-sm font-bold tracking-tight text-[#F472D0]"
              >
                1MBTC
              </span>
              <span className="text-[16px] font-bold tracking-tight text-foreground">
                Lab
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label={t.footer.navTitle}>
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#6D28D9] uppercase">
              {t.footer.navTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#6D28D9]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#6D28D9] uppercase">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.a11y.whatsapp}
                  className="text-sm text-muted-foreground transition-colors hover:text-[#6D28D9]"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.a11y.telegram}
                  className="text-sm text-muted-foreground transition-colors hover:text-[#6D28D9]"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#6D28D9] uppercase">
              {t.footer.policyTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {t.footer.policyLines.map((line) => (
                <li
                  key={line}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground/90">
            {t.footer.disclaimer}
          </p>
          <p className="mt-3 text-xs text-muted-foreground/90">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
