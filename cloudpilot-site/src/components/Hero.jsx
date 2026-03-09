import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build AI Systems That Ship
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl text-muted leading-relaxed">
            Cloudpilot helps enterprises architect, deploy, and scale AI systems that drive measurable business value. From proof-of-concept to production, we handle the complexity so you can focus on innovation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button
            variant="accent"
            size="lg"
            onClick={() => scrollTo('#contact')}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Get Started <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('#services')}
            className="border-foreground text-foreground hover:bg-card"
          >
            Learn More
          </Button>
        </div>

        <div className="pt-16 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted mb-6 uppercase tracking-widest font-semibold">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted">
            <span>50+ Projects</span>
            <span>98% Success Rate</span>
            <span>$10B+ in Generated Value</span>
            <span>5+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
