import { cn } from '@/lib/utils'

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full px-4 py-3 rounded-xl bg-background border border-border',
        'text-foreground text-sm placeholder:text-muted',
        'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50',
        'transition-all duration-200',
        className
      )}
      {...props}
    />
  )
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'w-full px-4 py-3 rounded-xl bg-background border border-border',
        'text-foreground text-sm placeholder:text-muted resize-none',
        'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50',
        'transition-all duration-200',
        className
      )}
      {...props}
    />
  )
}
