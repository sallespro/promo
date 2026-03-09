import { Badge } from '@/components/ui/badge'

export default function SectionHeader({ badge, headline, highlight, sub }) {
  return (
    <div className="text-center mb-16 space-y-4">
      <Badge>{badge}</Badge>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground">
        {headline}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {sub && <p className="text-muted text-lg max-w-2xl mx-auto">{sub}</p>}
    </div>
  )
}
