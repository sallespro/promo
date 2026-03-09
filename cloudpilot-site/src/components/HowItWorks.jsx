import SectionHeader from '@/components/SectionHeader'
import { steps } from '@/data/content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Our Process"
          headline="From Discovery to"
          highlight="Deployment"
          sub="A battle-tested methodology refined through hundreds of successful engagements."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 relative">
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent text-background font-bold text-xl shadow-lg shadow-primary/30">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
