import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { heroStats } from '@/data/content'

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-secondary/5 opacity-30" />
      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Badge className="bg-primary/20 text-primary border-primary/30">
            <Sparkles className="w-3 h-3 mr-1" />
            Advanced AI Consulting for Enterprise
          </Badge>
        </div>

        <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Navigate the <span className="gradient-gold-cyan">AI Frontier</span>
          <br /> with Confidence
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          We combine deep technical knowledge with cutting-edge AI tools to drive measurable business transformation. From strategy to deployment, we deliver results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="accent" size="lg" onClick={() => scrollTo('#contact')} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Start Your AI Journey <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollTo('#services')} className="border-primary/30 hover:bg-primary/10">
            Explore Services
          </Button>
        </div>

        <div className="pt-12 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-muted text-sm mb-6 uppercase tracking-widest font-semibold">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {heroStats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold gradient-gold-cyan">{stat.value}</div>
                <div className="text-xs text-muted mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
