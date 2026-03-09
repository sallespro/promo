import { cn } from '@/lib/utils'

const variants = {
  default: 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25',
  outline: 'border border-border bg-transparent text-foreground hover:border-primary hover:text-primary',
  ghost:   'text-foreground hover:bg-card hover:text-primary',
  accent:  'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 shadow-lg shadow-primary/30',
}

const sizes = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-3 text-sm',
  lg:  'px-8 py-4 text-base',
}

export function Button({ className, variant = 'default', size = 'md', children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',
        'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
