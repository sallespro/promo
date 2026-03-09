import { Badge } from '@/components/ui/badge'
import { aboutBullets, aboutStats } from '@/data/content'

export default function About() {
  return (
    <section id="about" className="py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30">Who We Are</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              The AI Partner That <span className="gradient-gold-cyan">Gets Results</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Cloudpilot is a premier AI consulting firm dedicated to helping enterprises architect, deploy, and scale AI systems that deliver measurable business value. We believe AI should create lasting competitive advantage — not just impressive demos.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Our team combines deep technical expertise with proven enterprise delivery experience across Fortune 500 companies, fast-growing startups, and complex regulatory environments.
            </p>
            <ul className="space-y-4 pt-4">
              {aboutBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <b.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted leading-relaxed">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="card-premium rounded-2xl p-10 space-y-8">
              <div>
                <div className="text-7xl font-black gradient-gold-cyan mb-4">10x</div>
                <p className="text-xl font-semibold text-foreground">Average ROI achieved by our clients</p>
              </div>
              <div className="section-divider" />
              <div className="grid grid-cols-2 gap-6">
                {aboutStats.map(s => (
                  <div key={s.l} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{s.v}</div>
                    <div className="text-sm text-muted">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
