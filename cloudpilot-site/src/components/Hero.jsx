import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { heroStats } from '@/data/content'

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Badge><span className="w-2 h-2 rounded-full bg-primary" />Premier AI Consulting</Badge>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight animate-fade-in-up text-foreground" style={{ animationDelay: '0.2s' }}>
          Navigate the AI Frontier with Confidence
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          We combine deep technical knowledge with cutting-edge AI tools to drive real business transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="accent" size="lg" onClick={() => scrollTo('#contact')}>
            Start Your AI Journey <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollTo('#services')}>
            <Play className="w-4 h-4" /> Explore Services
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-12 pt-8 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {heroStats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors" onClick={() => scrollTo('#services')} aria-label="Scroll down">
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}
