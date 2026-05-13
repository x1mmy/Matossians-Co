import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InstagramReels } from './components/InstagramReels'
import { Nav } from './components/Nav'
import { ServiceAreas } from './components/ServiceAreas'
import { ServicesStrip } from './components/ServicesStrip'
import { WhyUs } from './components/WhyUs'

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-paper font-figtree text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <ServicesStrip />
        <WhyUs />
        <InstagramReels />
        <ServiceAreas />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
