import { Quote, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const testimonials = [
  {
    quote:
      'Cloudpilot transformed how we handle customer support. Their custom AI agent now resolves 70% of tickets autonomously — our team focuses on what matters.',
    name: 'Mariana Costa',
    role: 'CTO',
    company: 'Fintech Solutions BR',
    stars: 5,
  },
  {
    quote:
      'The RAG system they built for our legal team cut document review time by 80%. The ROI was visible in the first month. Exceptional technical depth.',
    name: 'Rafael Mendes',
    role: 'Head of Operations',
    company: 'Advocacia Digital',
    stars: 5,
  },
  {
    quote:
      'They didn\'t just build AI tools — they taught our whole team how to use them strategically. That knowledge multiplier is priceless for our long-term growth.',
    name: 'Beatriz Alves',
    role: 'CEO',
    company: 'EdTech Innovate',
    stars: 5,
  },
  {
    quote:
      'Responsible AI development isn\'t a buzzword for Cloudpilot — it\'s how they operate. We passed our compliance audit without a single finding. Remarkable.',
    name: 'Carlos Drummond',
    role: 'CISO',
    company: 'HealthAI Platform',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-4 md:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 space-y-4">
          <Badge>Client Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Trusted by Teams That{' '}
            <span className="gradient-text">Ship Results</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Real outcomes from real businesses — not just pilot projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 space-y-4 hover:border-primary/30 transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-1 w-6 h-6 text-primary/30" />
                <p className="text-foreground text-sm leading-relaxed pl-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-foreground font-semibold text-sm">{t.name}</div>
                  <div className="text-muted text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
