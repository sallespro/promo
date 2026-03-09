import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8">

        {/* Eyebrow badge */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Badge>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Premier AI Consulting
          </Badge>
        </div>

        {/* H1 */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Navigate the{' '}
          <span className="gradient-text">AI Frontier</span>
          <br />
          with Confidence
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.35s' }}
        >
          We combine deep technical knowledge with cutting-edge AI tools
          to drive <em className="text-foreground not-italic font-semibold">real business transformation</em>.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <Button
            variant="accent"
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your AI Journey
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-4 h-4" />
            Explore Services
          </Button>
        </div>

        {/* Stats bar */}
        <div
          className="flex flex-wrap justify-center gap-8 pt-8 border-t border-border/50 animate-fade-in-up"
          style={{ animationDelay: '0.65s' }}
        >
          {[
            { value: '50+', label: 'AI Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '10x', label: 'Avg. ROI Achieved' },
            { value: '5+', label: 'Years in AI' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors animate-bounce"
        onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}
