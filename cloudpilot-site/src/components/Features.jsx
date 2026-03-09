import SectionHeader from '@/components/SectionHeader'
import { features } from '@/data/content'

export default function Features() {
  return (
    <section id="services" className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Services"
          headline="What We Do"
          sub="End-to-end AI consulting for enterprises who need results, not just demos."
        />
        <div className="space-y-16 mt-16">
          {features.map((f, i) => (
            <div key={i} className={`flex gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted text-lg leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
