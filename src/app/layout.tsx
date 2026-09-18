import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * English is the default document language and the default SEO metadata.
 * When the user switches to Spanish, the LanguageProvider updates
 * <html lang>, <title>, meta description and Open Graph tags dynamically.
 */
export const metadata: Metadata = {
  title:
    "1MBTC Lab — Crypto Onboarding, Transaction Mapping & Wallet Recovery",
  description:
    "Independent Bitcoin lab. Crypto onboarding, transaction mapping and wallet recovery. Free triage, response within 24–48 h.",
  openGraph: {
    title:
      "1MBTC Lab — Crypto Onboarding, Transaction Mapping & Wallet Recovery",
    description:
      "From your first wallet to full recovery. Free triage · 24–48 h.",
    siteName: "1MBTC Lab",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title:
      "1MBTC Lab — Crypto Onboarding, Transaction Mapping & Wallet Recovery",
    description:
      "Independent Bitcoin lab. From your first wallet to full recovery — research, not promises.",
  },
  icons: {
    icon: "/favicon-1mbtc.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
