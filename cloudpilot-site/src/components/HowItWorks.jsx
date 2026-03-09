import { ClipboardList, FlaskConical, Rocket } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We audit your existing processes, data landscape, and competitive environment to design a tailored AI roadmap aligned with your business goals and budget.',
  },
  {
    icon: FlaskConical,
    number: '02',
    title: 'Build & Integrate',
    description:
      'Our engineers develop custom AI solutions — agents, RAG pipelines, automations — and integrate them seamlessly into your existing infrastructure with zero disruption.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Deploy & Scale',
    description:
      'We launch, monitor, and continuously optimize your AI systems. As your business grows, we scale the solution and train your team to maintain independence.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-4 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 space-y-4">
          <Badge>Our Process</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How We{' '}
            <span className="gradient-text">Deliver Results</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            A proven 3-phase methodology that takes you from AI curiosity to competitive dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary/20 via-accent to-primary/20" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center space-y-4 group">
              {/* Step circle */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Step number */}
              <div className="text-xs font-bold text-primary tracking-widest uppercase">{step.number}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
