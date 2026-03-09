import SectionHeader from '@/components/SectionHeader'
import { steps } from '@/data/content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Our Process"
          headline="How We"
          highlight="Deliver Results"
          sub="A proven 3-phase methodology that takes you from AI curiosity to competitive dominance."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-px bg-border" />
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center space-y-4">
              <div className="relative z-10 w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
