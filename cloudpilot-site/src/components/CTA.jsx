import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-2xl p-12 md:p-16 space-y-8">
          <div className="text-sm font-bold text-primary uppercase tracking-widest">Limited Availability — Q2 2025</div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Ready to Transform Your Business with AI?
          </h2>

          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We only take on 3–5 new clients per quarter to ensure every engagement receives our full attention. Book your free strategy session today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Free Strategy Session
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>

          <p className="text-muted text-sm">No commitment required · Response within 24 hours</p>
        </div>
      </div>
    </section>
  )
}
