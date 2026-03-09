import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { navLinks, brand } from '@/data/content'

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 80)
      setScrolled(y > 20)
      setLastY(y)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [lastY])

  const Logo = () => (
    <a href="#home" className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-primary transition-colors">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <brand.icon className="w-4 h-4 text-background" />
      </div>
      <span>{brand.name}</span>
    </a>
  )

  return (
    <>
      <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-lg' : 'bg-transparent', hidden ? '-translate-y-full' : 'translate-y-0')}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Logo />
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="px-4 py-2 text-sm text-muted hover:text-primary rounded-lg hover:bg-primary/10 transition-all duration-200">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex">
            <Button variant="accent" size="sm" onClick={() => scrollTo('#contact')} className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
          <button className="md:hidden p-2 text-muted hover:text-primary rounded-lg hover:bg-primary/10 transition-all" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      <div className={cn('fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="text-2xl font-semibold text-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <Button variant="accent" size="lg" onClick={() => { setOpen(false); scrollTo('#contact') }} className="bg-primary hover:bg-primary/90">Get Started</Button>
      </div>
    </>
  )
}
