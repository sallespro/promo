import { cn } from '@/lib/utils'

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-card p-8',
        'transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children }) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

export function CardTitle({ className, children }) {
  return <h3 className={cn('text-xl font-bold text-foreground', className)}>{children}</h3>
}

export function CardContent({ className, children }) {
  return <div className={cn('text-muted text-sm leading-relaxed', className)}>{children}</div>
}
