import { Quote, Star } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { testimonials } from '@/data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-4 md:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Client Stories"
          headline="Trusted by Teams That"
          highlight="Ship Results"
          sub="Real outcomes from real businesses — not just pilot projects."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 space-y-4 hover:border-primary/30 transition-all duration-300 hover:scale-[1.01]">
              <div className="flex gap-1">
                {Array(t.stars).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-1 w-6 h-6 text-primary/30" />
                <p className="text-foreground text-sm leading-relaxed pl-6 italic">"{t.quote}"</p>
              </div>
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
