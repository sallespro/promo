import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import SectionHeader from '@/components/SectionHeader'
import { features } from '@/data/content'

export default function Features() {
  return (
    <section id="services" className="py-32 px-4 md:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="Our Services"
          headline="Transform Your"
          highlight="Business with AI"
          sub="End-to-end solutions that go beyond chatbots. We architect systems that drive real competitive advantage."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {features.map((f, i) => (
            <div key={i} className={`flex gap-6 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-primary/20">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
