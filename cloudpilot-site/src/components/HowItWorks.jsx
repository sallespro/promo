import SectionHeader from '@/components/SectionHeader'
import { steps } from '@/data/content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-4 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Our Process"
          headline="How We"
          highlight="Deliver Results"
          sub="A proven 3-phase methodology that takes you from AI curiosity to competitive dominance."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary/20 via-accent to-primary/20" />
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center space-y-4 group">
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-bold text-primary tracking-widest uppercase">{step.number}</div>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
