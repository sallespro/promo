import { footerLinks, socials, brand } from '@/data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <brand.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-foreground">{brand.name}</span>
            </div>
            <p className="text-muted text-sm max-w-xs">{brand.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map(l => (
              <a key={l.href} href={l.href} className="text-muted text-sm hover:text-primary transition-colors">{l.label}</a>
            ))}
          </nav>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-200">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>© {new Date().getFullYear()} Cloudpilot. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
