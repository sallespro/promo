import { Star } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { testimonials } from '@/data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-4 md:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="Client Stories"
          headline="Real Results from"
          highlight="Real Companies"
          sub="See how enterprises transformed their operations with our AI solutions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((t, i) => (
            <div key={i} className="card-premium rounded-xl p-8 space-y-6">
              <div className="flex gap-1">
                {Array(t.stars).fill(0).map((_, j) => <Star key={j} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground text-lg leading-relaxed italic">"{t.quote}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold text-lg flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-foreground font-semibold">{t.name}</div>
                  <div className="text-muted text-sm">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
