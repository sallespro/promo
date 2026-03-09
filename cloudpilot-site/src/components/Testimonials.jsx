import SectionHeader from '@/components/SectionHeader'
import { testimonials } from '@/data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionHeader badge="Community" headline="What Clients Say" sub="Real feedback from real companies." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 border border-border rounded-lg">
              <div className="mb-4">
                <p className="text-foreground italic leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted">{t.role} · {t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
