import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { CVSection } from "@/components/landing/cv-section"
import { Portfolio } from "@/components/landing/portfolio"
import { Certificates } from "@/components/landing/certificates"
import { Trophies } from "@/components/landing/trophies"
import { Services } from "@/components/landing/services"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { FloatingCTA } from "@/components/landing/floating-cta"

import siteData from "@/data/site-data.json"

export default function Home() {
  const data = siteData as any

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      {data.navbar?.show && (
        <Navbar data={data.navbar} brand={data.brand} />
      )}

      <div>
        {data.hero?.headline && (
          <section id="home" className="scroll-mt-28">
            <Hero data={data.hero} />
          </section>
        )}

        {data.about?.name && (
          <section id="about" className="scroll-mt-28">
            <About data={data.about} />
          </section>
        )}

        {data.cv?.headline && (
          <section id="cv" className="scroll-mt-28">
            <CVSection data={data.cv} />
          </section>
        )}

        {data.portfolio?.items?.length > 0 && (
          <section id="portfolio" className="scroll-mt-28">
            <Portfolio data={data.portfolio} />
          </section>
        )}

        {data.certificates?.items?.length > 0 && (
          <section id="certificates" className="scroll-mt-28">
            <Certificates data={data.certificates} />
          </section>
        )}

        {data.trophies?.items?.length > 0 && (
          <section id="trophies" className="scroll-mt-28">
            <Trophies data={data.trophies} />
          </section>
        )}

        {data.services?.headline && (
          <section id="services" className="scroll-mt-28">
            <Services data={data.services} />
          </section>
        )}

        {data.cta?.headline && (
          <section id="cta" className="scroll-mt-28">
            <CTASection data={data.cta} />
          </section>
        )}

        <Footer data={data.footer} brand={data.brand} />
      </div>

      <FloatingCTA ctaText={data.navbar?.cta_text || "Contact Me"} />
    </main>
  )
}