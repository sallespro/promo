import { CheckCircle2, Award, Globe2, HeartHandshake } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const bullets = [
  { icon: Award,         text: 'Industry veterans with 5+ years of enterprise AI deployments' },
  { icon: Globe2,        text: 'Serving clients across Brazil, Latin America, and globally' },
  { icon: CheckCircle2,  text: 'Custom solutions — no one-size-fits-all, every project is unique' },
  { icon: HeartHandshake, text: 'Long-term partnerships, not one-off projects' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div className="space-y-6">
            <Badge>Who We Are</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              The AI Partner That{' '}
              <span className="gradient-text">Gets It Done</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Cloudpilot is a premier AI consulting firm dedicated to helping businesses navigate
              the complex landscape of artificial intelligence. We believe AI should create
              <strong className="text-foreground"> measurable, lasting value</strong> — not just
              impressive demos.
            </p>
            <p className="text-muted leading-relaxed">
              Não acreditamos em soluções únicas. Cada projeto é criado para atender às suas
              necessidades exclusivas — combinando profundo conhecimento técnico com as melhores
              ferramentas de IA disponíveis.
            </p>

            <ul className="space-y-4 pt-2">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <b.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted text-sm leading-relaxed">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <div className="relative glass-card rounded-3xl p-8 space-y-6 animate-float">
              <div className="text-6xl font-black gradient-text">10x</div>
              <div className="text-foreground font-semibold text-lg">Average ROI achieved by our clients in year 1</div>
              <div className="section-divider" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: '50+', l: 'Projects' },
                  { v: '98%', l: 'Satisfaction' },
                  { v: '30+', l: 'Clients' },
                  { v: '5+',  l: 'Years' },
                ].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="text-2xl font-bold text-primary">{s.v}</div>
                    <div className="text-xs text-muted">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
