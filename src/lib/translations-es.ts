import type { TranslationDict } from "./translations-en";

/**
 * Spanish version (1MBTC Lab) — balanced 3-service edition.
 * Professional neutral Spanish with subtle Rioplatense voseo in CTAs.
 * Factual parity with English enforced by the type system.
 * Technical identifiers remain untranslated.
 */
export const es: TranslationDict = {
  meta: {
    htmlLang: "es",
    title:
      "1MBTC Lab — Onboarding cripto, mapeo de transacciones y recuperación de billeteras",
    description:
      "Laboratorio independiente de Bitcoin. Onboarding cripto, mapeo de transacciones y recuperación de billeteras. Triage gratuito, respuesta en 24–48 h.",
    ogTitle:
      "1MBTC Lab — Onboarding cripto, mapeo de transacciones y recuperación de billeteras",
    ogDescription:
      "Desde tu primera billetera hasta la recuperación completa. Triage gratuito · 24–48 h.",
    ogLocale: "es_AR",
  },

  a11y: {
    skipToContent: "Saltar al contenido principal",
    mainNav: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    languageSwitcher: "Selector de idioma",
    switchToEn: "Cambiar el idioma a inglés",
    switchToEs: "Cambiar el idioma a español",
    whatsapp: "Escribir a 1MBTC Lab por WhatsApp",
    telegram: "Contactar a 1MBTC Lab por Telegram",
    mobileBar: "Contacto rápido",
  },

  nav: {
    recover: "Servicios",
    process: "Proceso",
    pricing: "Precios",
    research: "Investigación",
    faq: "Preguntas frecuentes",
    contact: "Contacto",
  },

  hero: {
    eyebrow: "Laboratorio independiente de Bitcoin",
    titleA: "Desde tu primera billetera",
    titleB: "hasta la recuperación completa.",
    subtitle:
      "Onboarding, mapeo de transacciones y recuperación de billeteras — un laboratorio independiente, respuestas claras, investigación antes que promesas.",
    primaryCta: "Pedí tu evaluación gratis",
    secondaryCta: "Mirá los servicios",
    chips: [
      { label: "Evaluación gratuita" },
      { label: "Confidencial" },
      { label: "Precios claros" },
      { label: "Respuesta en 24–48 h" },
    ],
    conversionCard: {
      badge: "Triage gratuito · 24–48 h",
      title: "Contanos tu caso — la primera mirada es gratis.",
      whatsapp: "Escribinos por WhatsApp",
      telegram: "Contactanos por Telegram",
      note: "Sin compromiso · inglés o español",
    },
  },

  ticker: [
    "billeteras",
    "exchanges",
    "on-chain",
    "tx tracing",
    "frases semilla",
    "ECDSA",
    "PRNG",
    "GPU search",
  ],

  stats: {
    items: [
      { value: "3", label: "servicios principales, un laboratorio" },
      { value: "24–48 h", label: "ventana de respuesta" },
      { value: "2", label: "idiomas — inglés y español" },
      { value: "0", label: "expedientes compartidos con terceros" },
    ],
  },

  services: {
    eyebrow: "Servicios principales",
    title: "Tres servicios. Un laboratorio.",
    description: "Claro, simple, confidencial.",
    items: [
      {
        icon: "compass",
        title: "Introducción a las cripto",
        body: "Tu primera billetera, bien configurada — en un exchange que conocés.",
        bullets: [
          "Configuración segura en un exchange reconocido",
          "Enviar y recibir, paso a paso",
          "Depósitos y retiros, sin riesgos",
        ],
        cta: "Empezá con acompañamiento",
      },
      {
        icon: "route",
        title: "Mapeo de transacciones",
        body: "Trazamos tus fondos on-chain y te entregamos un mapa claro.",
        bullets: [
          "Ruta completa de tus fondos",
          "Saltos, consolidaciones y destinos",
          "Un mapa con el que podés actuar",
        ],
        cta: "Mapear mis transacciones",
      },
      {
        icon: "key",
        title: "Recuperación de billeteras",
        body: "Claves débiles o parciales: viabilidad primero, investigación antes que promesas.",
        bullets: [
          "Claves débiles o parciales recuperadas",
          "Triage gratuito · 24–48 h",
          "Comisión por éxito — pagás por resultados",
        ],
        cta: "Empezar el triage gratis",
      },
    ],
  },

  ctaBand: {
    title: "¿No sabés qué servicio va con tu caso?",
    button: "Consultá gratis",
    sub: "Triage gratuito · 24–48 h · sin compromiso",
  },

  whyUs: {
    eyebrow: "Por qué 1MBTC Lab",
    title: "Un laboratorio, no un call center",
    items: [
      {
        title: "Investigación primero",
        body: "Investigación criptográfica publicada y tooling propio.",
      },
      {
        title: "Respuestas claras primero",
        body: "Te decimos qué es posible —y qué no— antes de empezar.",
      },
      {
        title: "Verificación obligatoria",
        body: "Propiedad y detalles del caso verificados. Sin excepciones.",
      },
      {
        title: "Confidencialidad por diseño",
        body: "El material del caso nunca sale del laboratorio. Nada se comparte, nunca.",
      },
    ],
  },

  process: {
    eyebrow: "Proceso",
    title: "Cuatro pasos, sin sorpresas",
    items: [
      {
        title: "Contacto",
        body: "WhatsApp o Telegram. Contanos tu caso.",
      },
      {
        title: "Triage gratuito",
        body: "Clasificamos tu caso y definimos el camino a seguir.",
      },
      {
        title: "Propuesta",
        body: "Alcance, costo y plazo — por escrito, antes de comprometerte.",
      },
      {
        title: "Ejecución",
        body: "Hacemos el trabajo y entregamos los resultados, con prueba.",
      },
    ],
    cta: "Empezá por el paso uno — escribinos",
  },

  pricing: {
    eyebrow: "Precios",
    subtitle: "Nuevo en Cripto",
    walletOffer: {
      badge: "Asistencia en vivo",
      title: "Creá tu primera billetera cripto SEGURA",
      price: "USD 49",
      period: "pago único",
      features: [
        "Sesión 1-a-1 en vivo con nuestro equipo",
        "Nada de guías o videos prearmados — ayuda real, paso a paso",
        "Tu billetera creada y lista dentro de la sesión",
      ],
      cta: "Reservá tu sesión en vivo",
    },
    title: "Mapeo o recuperación",
    description: "Siempre sabés el costo antes de que comience cualquier trabajo.",
    tiers: [
      {
        name: "Triage",
        price: "Gratis",
        period: "",
        badge: "",
        cta: "Empezar gratis",
        features: [
          "Primer contacto por WhatsApp o Telegram",
          "Tu caso clasificado y explicado",
          "Respuesta honesta: qué es posible y qué no",
        ],
        note: "Sin pago, sin compromiso.",
      },
      {
        name: "Trabajo técnico",
        price: "USD 120",
        period: "pago único",
        badge: "Más solicitado",
        cta: "Pedir el análisis",
        features: [
          "Sesión de onboarding, mapa de transacciones o informe de viabilidad",
          "Entregable escrito que conservás",
          "El arancel se acredita a la recuperación si el caso avanza",
        ],
        note: "",
      },
      {
        name: "Recuperación",
        price: "15%",
        period: "comisión por éxito",
        badge: "",
        cta: "Pedir evaluación",
        features: [
          "Búsqueda en clusters de GPU con tooling propio",
          "Encargo mínimo de USD 500",
          "Solo pagás si hay éxito",
        ],
        note: "Solo cuando la viabilidad es positiva.",
      },
    ],
    disclaimer:
      "Los términos exactos se confirman por escrito antes de cualquier encargo.",
  },

  research: {
    eyebrow: "Investigación",
    title: "Publicamos lo que aprendemos",
    description: "Notas desde los tres frentes del laboratorio.",
    items: [
      {
        tag: "Onboarding",
        title: "Cómo elegir un exchange centralizado seguro",
      },
      {
        tag: "On-chain",
        title: "Trazando rutas de transacciones",
      },
      {
        tag: "PRNG",
        title: "Math.random() y la era de las billeteras de navegador",
      },
      {
        tag: "Seguridad",
        title: "Depósitos y retiros sin sorpresas",
      },
    ],
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Preguntas, respondidas con claridad",
    items: [
      {
        q: "¿Se puede recuperar cualquier billetera perdida?",
        a: "No — y lo decimos de entrada. La recuperación funciona cuando la clave se generó con aleatoriedad predecible. El triage gratuito te dice de qué lado cae tu caso.",
      },
      {
        q: "¿Necesitan mi clave privada o mi frase semilla?",
        a: "No. Empezamos solo con información pública: dirección, software y fecha aproximada.",
      },
      {
        q: "Soy nuevo en cripto — ¿me ayudan a empezar?",
        a: "Sí. Introducción a las cripto configura tu billetera en un exchange popular y te guía con pagos, depósitos y retiros.",
      },
      {
        q: "¿Pueden rastrear a dónde fueron mis fondos?",
        a: "Sí. El mapeo de transacciones reconstruye la ruta on-chain de tus fondos y la convierte en un mapa con el que podés actuar.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "El triage es gratis. El trabajo técnico, USD 120 pago único. La recuperación, 15% de comisión por éxito — pagás por resultados.",
      },
      {
        q: "¿El proceso es confidencial?",
        a: "Sí. El material del caso queda en el laboratorio y nunca se comparte. En cada etapa pedimos lo mínimo.",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    title: "Empezá con una evaluación gratuita",
    description:
      "Contanos tu caso por WhatsApp o Telegram — respondemos dentro de las 24–48 horas.",
    whatsappLabel: "Escribinos por WhatsApp",
    whatsappSub: "Respuesta dentro de 24–48 h",
    telegramLabel: "Contactanos por Telegram",
    telegramSub: "Respuesta dentro de 24–48 h",
    note: "Verificación antes de cualquier trabajo técnico. Sin formularios, sin bots.",
  },

  footer: {
    tagline:
      poweredBy: "Powered by",
      "Laboratorio independiente de Bitcoin. Onboarding, mapeo, recuperación — investigación, no promesas.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    policyTitle: "Política",
    policyLines: [
      "Verificación antes del trabajo",
      "Evaluación inicial gratuita",
      "Confidencialidad por defecto",
    ],
    disclaimer:
      "1MBTC Lab provee únicamente servicios técnicos. Nada en este sitio es asesoramiento financiero y ningún resultado está garantizado. La recuperación solo se intenta después de establecer la viabilidad técnica y verificar la propiedad.",
    rights: "© 2026 1MBTC Lab. Todos los derechos reservados.",
  },

  mobileBar: {
    whatsapp: "WhatsApp",
    telegram: "Telegram",
  },
};
