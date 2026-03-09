import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { navLinks, brand } from '@/data/content'

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-200', scrolled ? 'border-b border-border/50 bg-background/95 backdrop-blur-sm' : '')}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors">
            <brand.icon className="w-5 h-5" />
            <span>{brand.name}</span>
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted hover:text-foreground transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <Button size="sm" onClick={() => scrollTo('#contact')} className="bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </div>
          <button className="md:hidden p-2 text-muted" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      <div className={cn('fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="text-xl text-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <Button onClick={() => { setOpen(false); scrollTo('#contact') }} className="bg-primary hover:bg-primary/90 text-white mt-4">
          Get Started
        </Button>
      </div>
    </>
  )
}
