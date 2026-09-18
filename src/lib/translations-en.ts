/**
 * English source of truth (1MBTC Lab) — balanced 3-service edition.
 * No single service dominates: hero spans onboarding → recovery,
 * stats/ticker/pricing/process/FAQ cover all three equally.
 * Trimmed copy, CTA-first structure. International technical English.
 */
export const en = {
  meta: {
    htmlLang: "en",
    title: "1MBTC Lab — Crypto Onboarding, Transaction Mapping & Wallet Recovery",
    description:
      "Independent Bitcoin lab. Crypto onboarding, transaction mapping and wallet recovery. Free triage, response within 24–48 h.",
    ogTitle:
      "1MBTC Lab — Crypto Onboarding, Transaction Mapping & Wallet Recovery",
    ogDescription:
      "From your first wallet to full recovery. Free triage · 24–48 h.",
    ogLocale: "en_US",
  },

  a11y: {
    skipToContent: "Skip to main content",
    mainNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageSwitcher: "Language selector",
    switchToEn: "Switch language to English",
    switchToEs: "Switch language to Spanish",
    whatsapp: "Chat with 1MBTC Lab on WhatsApp",
    telegram: "Contact 1MBTC Lab on Telegram",
    mobileBar: "Quick contact",
  },

  nav: {
    recover: "Services",
    process: "Process",
    pricing: "Pricing",
    research: "Research",
    faq: "FAQ",
    contact: "Contact",
  },

  hero: {
    eyebrow: "Independent Bitcoin Lab",
    titleA: "From your first wallet",
    titleB: "to full recovery.",
    subtitle:
      "Onboarding, transaction mapping and wallet recovery — one independent lab, clear answers, research over promises.",
    primaryCta: "Get a free evaluation",
    secondaryCta: "See our services",
    chips: [
      { label: "Free evaluation" },
      { label: "Confidential" },
      { label: "Clear pricing" },
      { label: "24–48 h response" },
    ],
    conversionCard: {
      badge: "Free triage · 24–48 h",
      title: "Tell us your case — first look is free.",
      whatsapp: "Talk to us on WhatsApp",
      telegram: "Contact us on Telegram",
      note: "No commitment · English or Spanish",
    },
  },

  ticker: [
    "wallets",
    "exchanges",
    "on-chain",
    "tx tracing",
    "seed phrases",
    "ECDSA",
    "PRNG",
    "GPU search",
  ],

  stats: {
    items: [
      { value: "3", label: "core services, one lab" },
      { value: "24–48 h", label: "response window" },
      { value: "2", label: "languages — EN & ES" },
      { value: "0", label: "case files shared with third parties" },
    ],
  },

  services: {
    eyebrow: "Main Services",
    title: "Three services. One lab.",
    description: "Clear, simple, confidential.",
    items: [
      {
        icon: "compass",
        title: "Introduction to Crypto",
        body: "Your first wallet, set up right — on an exchange you know.",
        bullets: [
          "Safe wallet setup on a major exchange",
          "Sending and receiving, step by step",
          "Deposits and withdrawals, done safely",
        ],
        cta: "Start with guidance",
      },
      {
        icon: "route",
        title: "Transaction Mapping",
        body: "We trace your funds on-chain and hand you a clear map.",
        bullets: [
          "Full route of your funds",
          "Hops, consolidations, destinations",
          "A map you can act on",
        ],
        cta: "Map my transactions",
      },
      {
        icon: "key",
        title: "Wallet Recovery",
        body: "Weak or partial keys: viability first, research over promises.",
        bullets: [
          "Weak or partial keys recovered",
          "Free triage · 24–48 h",
          "Success fee — pay on results",
        ],
        cta: "Start the free triage",
      },
    ],
  },

  ctaBand: {
    title: "Not sure which service fits your case?",
    button: "Ask us — it's free",
    sub: "Free triage · 24–48 h · no commitment",
  },

  whyUs: {
    eyebrow: "Why 1MBTC Lab",
    title: "A lab, not a call center",
    items: [
      {
        title: "Research first",
        body: "Published cryptography research and our own tooling.",
      },
      {
        title: "Clear answers first",
        body: "We tell you what's possible — and what isn't — before any work begins.",
      },
      {
        title: "Verification required",
        body: "Ownership and case details verified. No exceptions.",
      },
      {
        title: "Confidential by design",
        body: "Case material never leaves the lab. Nothing shared, ever.",
      },
    ],
  },

  process: {
    eyebrow: "Process",
    title: "Four steps, no surprises",
    items: [
      {
        title: "Contact",
        body: "WhatsApp or Telegram. Tell us your case.",
      },
      {
        title: "Free triage",
        body: "We classify your case and map the path forward.",
      },
      {
        title: "Proposal",
        body: "Scope, cost and timeframe — in writing, before you commit.",
      },
      {
        title: "Execution",
        body: "We do the work and hand over results, with proof.",
      },
    ],
    cta: "Start with step one — write to us",
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Pay for analysis and results — not for hope",
    description: "You always know the cost before any work begins.",
    tiers: [
      {
        name: "Triage",
        price: "Free",
        period: "",
        badge: "",
        cta: "Start free",
        features: [
          "First contact via WhatsApp or Telegram",
          "Your case classified and explained",
          "Honest answer: what's possible, what's not",
        ],
        note: "No payment, no commitment.",
      },
      {
        name: "Technical Work",
        price: "USD 120",
        period: "one-time",
        badge: "Most requested",
        cta: "Request the analysis",
        features: [
          "Onboarding session, transaction map or viability report",
          "Written deliverable you keep",
          "Fee credited toward recovery if the case proceeds",
        ],
        note: "",
      },
      {
        name: "Recovery",
        price: "15%",
        period: "success fee",
        badge: "",
        cta: "Request evaluation",
        features: [
          "GPU-cluster search with custom tooling",
          "Minimum engagement of USD 500",
          "You only pay on success",
        ],
        note: "Only when viability is positive.",
      },
    ],
    disclaimer: "Exact terms are confirmed in writing before any engagement.",
  },

  research: {
    eyebrow: "Research",
    title: "We publish what we learn",
    description: "Notes from all three fronts of the lab.",
    items: [
      {
        tag: "Onboarding",
        title: "Choosing a centralized exchange safely",
      },
      {
        tag: "On-chain",
        title: "Tracing transaction routes",
      },
      {
        tag: "PRNG",
        title: "Math.random() and the browser wallet era",
      },
      {
        tag: "Security",
        title: "Deposits and withdrawals without surprises",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered plainly",
    items: [
      {
        q: "Can every lost wallet be recovered?",
        a: "No — and we say so upfront. Recovery works when the key was generated with predictable randomness. The free triage tells you which side your case is on.",
      },
      {
        q: "Do you need my private key or seed phrase?",
        a: "No. We start with public information only: address, software and approximate date.",
      },
      {
        q: "I'm new to crypto — can you help me start?",
        a: "Yes. Introduction to Crypto sets up your wallet on a popular exchange and walks you through payments, deposits and withdrawals.",
      },
      {
        q: "Can you trace where my funds went?",
        a: "Yes. Transaction Mapping reconstructs the on-chain route of your funds and turns it into a map you can act on.",
      },
      {
        q: "How much does it cost?",
        a: "Triage is free. Technical work is USD 120 one-time. Recovery is a 15% success fee — you pay on results.",
      },
      {
        q: "Is the process confidential?",
        a: "Yes. Case material stays inside the lab and is never shared. We ask for the minimum at every stage.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Start with a free evaluation",
    description:
      "Tell us your case on WhatsApp or Telegram — we respond within 24–48 hours.",
    whatsappLabel: "Talk to us on WhatsApp",
    whatsappSub: "Response within 24–48 h",
    telegramLabel: "Contact us on Telegram",
    telegramSub: "Response within 24–48 h",
    note: "Verification before any technical work. No forms, no bots.",
  },

  footer: {
    tagline:
      "Independent Bitcoin lab. Onboarding, mapping, recovery — research, not promises.",
    navTitle: "Navigate",
    contactTitle: "Contact",
    policyTitle: "Policy",
    policyLines: [
      "Verification before work",
      "Free first evaluation",
      "Confidential by default",
    ],
    disclaimer:
      "1MBTC Lab provides technical services only. Nothing on this site is financial advice, and no outcome is guaranteed. Recovery is attempted only after technical viability is established and ownership is verified.",
    rights: "© 2026 1MBTC Lab. All rights reserved.",
  },

  mobileBar: {
    whatsapp: "WhatsApp",
    telegram: "Telegram",
  },
};

export type TranslationDict = typeof en;
