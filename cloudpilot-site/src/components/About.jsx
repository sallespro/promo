import { aboutBullets } from '@/data/content'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-widest font-semibold text-muted mb-4">About</p>
            <h2 className="text-4xl font-bold mb-4">Why Cloudpilot</h2>
            <p className="text-lg text-muted max-w-2xl leading-relaxed">
              We're practitioners, not theorists. Our team ships production AI systems for Fortune 500 companies, startups, and regulated industries. We know what works, what doesn't, and how to navigate the complexity of real-world AI deployment.
            </p>
          </div>

          <ul className="space-y-3 mt-8">
            {aboutBullets.map((b, i) => (
              <li key={i} className="flex gap-3 items-start">
                <b.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
