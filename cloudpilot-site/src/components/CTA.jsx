import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="card-premium rounded-2xl p-16 md:p-20 space-y-8">
          <div className="text-sm font-bold text-primary uppercase tracking-widest">Limited Availability</div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Ready to Transform Your Enterprise with <span className="gradient-gold-cyan">AI?</span>
          </h2>

          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            We work with 3–5 new clients per quarter to ensure every engagement receives our full attention and delivers exceptional results. Book your free strategy session today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="accent"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Book Free Strategy Session
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>

          <p className="text-muted text-sm pt-4">No commitment required · Response within 24 hours</p>
        </div>
      </div>
    </section>
  )
}
