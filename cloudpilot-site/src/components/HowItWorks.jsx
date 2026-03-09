import SectionHeader from '@/components/SectionHeader'
import { steps } from '@/data/content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeader badge="Process" headline="How It Works" sub="A straightforward, no-nonsense approach to AI implementation." />
        <div className="space-y-12 mt-16">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center font-bold text-foreground">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
