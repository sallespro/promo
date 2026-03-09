import { Badge } from '@/components/ui/badge'

export default function SectionHeader({ badge, headline, highlight, sub }) {
  return (
    <div className="text-center mb-16 space-y-4">
      <Badge className="bg-primary/20 text-primary border-primary/30">{badge}</Badge>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
        {headline}{' '}
        {highlight && <span className="gradient-gold-cyan">{highlight}</span>}
      </h2>
      {sub && <p className="text-lg text-muted max-w-2xl mx-auto">{sub}</p>}
    </div>
  )
}
