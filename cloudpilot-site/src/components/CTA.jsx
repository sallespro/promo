import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">Ready to get started?</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Let's discuss your AI challenges and create a roadmap for success. We offer a free 30-minute strategy session.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Schedule a Call <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
