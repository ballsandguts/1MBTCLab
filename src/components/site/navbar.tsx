"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { SITE_CONFIG } from "@/lib/site-config";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label={SITE_CONFIG.name}>
      <span
        aria-hidden="true"
        className="rounded-lg border-2 border-[#0C1210] bg-[#0C1210] px-2 py-1 font-mono text-sm font-bold tracking-tight text-[#F472D0] shadow-hard-sm"
      >
        1MBTC
      </span>
      <span className="text-[16px] font-bold tracking-tight text-foreground">
        Lab
      </span>
    </a>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.recover },
    { href: "#process", label: t.nav.process },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav
        aria-label={t.a11y.mainNav}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6"
      >

        <div className="flex items-center gap-3">
          <Wordmark />
          <span aria-hidden="true" className="h-5 w-px bg-border" />
          <a
            href="https://wwwaiservices.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WWW AI Services"
            className="flex items-center gap-1.5 transition-transform hover:-translate-y-px"
          >
            <img
              src="/wwwai-logo.svg"
              alt=""
              width={28}
              height={28}
              className="size-7"
            />
            <span className="text-sm font-bold tracking-tight text-foreground">
              WWW AI
            </span>
          </a>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#6D28D9] focus-visible:text-[#6D28D9]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden md:flex" />
          <a
            href="#contact"
            className="hidden rounded-xl border-2 border-[#0C1210] bg-[#E93BB4] px-4 py-2 text-sm font-bold text-[#0C1210] shadow-hard-sm transition-all hover:-translate-y-px hover:shadow-hard focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
          >
            {t.nav.contact}
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="inline-flex size-10 items-center justify-center rounded-lg border-2 border-[#0C1210] bg-white text-foreground shadow-hard-sm transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          "border-t-2 border-[#0C1210] bg-background/95 backdrop-blur-md md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl border-2 border-[#0C1210] bg-[#E93BB4] px-3 py-3 text-center text-[15px] font-bold text-[#0C1210] shadow-hard-sm"
          >
            {t.nav.contact}
          </a>
          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <span className="text-xs text-muted-foreground">
              {t.a11y.languageSwitcher}
            </span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
