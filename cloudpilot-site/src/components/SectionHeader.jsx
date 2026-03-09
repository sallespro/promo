export default function SectionHeader({ badge, headline, highlight, sub }) {
  return (
    <div className="space-y-3 mb-12">
      {badge && <p className="text-sm uppercase tracking-widest font-semibold text-muted">{badge}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {headline}{' '}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {sub && <p className="text-lg text-muted max-w-2xl">{sub}</p>}
    </div>
  )
}
