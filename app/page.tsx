import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { AppsSection } from '@/components/sections/apps-section'
import { QuantumSection } from '@/components/sections/quantum-section'
import { WhySection } from '@/components/sections/why-section'
import { TechSection } from '@/components/sections/tech-section'
import { VisionSection } from '@/components/sections/vision-section'
import { ContactSection } from '@/components/sections/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AppsSection />
        <QuantumSection />
        <WhySection />
        <TechSection />
        <VisionSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
