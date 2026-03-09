import MatrixBackground from '@/components/MatrixBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
