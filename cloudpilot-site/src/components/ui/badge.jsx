import { cn } from '@/lib/utils'

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold',
        'bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest',
        className
      )}
    >
      {children}
    </span>
  )
}
