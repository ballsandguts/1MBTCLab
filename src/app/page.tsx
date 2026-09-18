import { LanguageProvider } from "@/lib/language-context";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Ticker } from "@/components/site/ticker";
import { Stats } from "@/components/site/stats";
import { Services } from "@/components/site/services";
import { CtaBand } from "@/components/site/cta-band";
import { Process } from "@/components/site/process";
import { WhyUs } from "@/components/site/why-us";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { MobileContactBar } from "@/components/site/mobile-contact-bar";
import { SkipLink } from "@/components/site/skip-link";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SkipLink />
        <Navbar />
        <main id="main-content" className="flex-1">
          <Hero />

          {/* Video de YouTube — reemplazá VIDEO_ID por el ID real del video */}
          <section className="mx-auto w-full max-w-4xl px-4 pb-14 md:px-6 md:pb-20">
            <div className="aspect-video overflow-hidden rounded-2xl border-2 border-[#0C1210] bg-[#0C1210] shadow-hard">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="1MBTC Lab video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>

          <Ticker />
          <Stats />
          <Services />
          <CtaBand />
          <Process />
          <Pricing />
          <WhyUs />
          <Faq />
          <Contact />
        </main>
        <Footer />
        {/* Spacer so the fixed mobile contact bar never covers the footer */}
        <div aria-hidden="true" className="h-14 md:hidden" />
        <MobileContactBar />
      </div>
    </LanguageProvider>
  );
}
