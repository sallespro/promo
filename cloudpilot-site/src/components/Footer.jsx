import { footerLinks, socials, brand } from '@/data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <brand.icon className="w-5 h-5" />
              <span>{brand.name}</span>
            </div>
            <p className="text-muted text-sm max-w-xs">{brand.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map(l => (
              <a key={l.href} href={l.href} className="text-muted text-sm hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </nav>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="w-9 h-9 rounded border border-border flex items-center justify-center text-muted hover:text-foreground transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>© {new Date().getFullYear()} Cloudpilot. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
