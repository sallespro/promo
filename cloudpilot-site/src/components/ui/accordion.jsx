import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items, className }) {
  const [open, setOpen] = useState(null)

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-300"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left text-foreground font-semibold hover:text-primary transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={cn('w-5 h-5 text-muted flex-shrink-0 transition-transform duration-300', open === i && 'rotate-180 text-primary')}
            />
          </button>
          <div className={cn('overflow-hidden transition-all duration-300', open === i ? 'max-h-96' : 'max-h-0')}>
            <p className="px-6 pb-5 text-muted text-sm leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
