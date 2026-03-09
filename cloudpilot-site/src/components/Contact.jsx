import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/20 text-primary border-primary/30">Get In Touch</Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Let's Build Your <span className="gradient-gold-cyan">AI Future</span>
          </h2>
          <p className="text-lg text-muted">
            Tell us about your challenges and we'll provide a tailored strategy within 24 hours.
          </p>
        </div>

        {status === 'success' ? (
          <div className="card-premium rounded-xl p-12 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">Message Received!</h3>
            <p className="text-muted">Our team will reach out within 24 hours with a tailored proposal.</p>
            <Button variant="outline" onClick={() => setStatus('idle')} className="border-primary/30 hover:bg-primary/10">Send Another</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-premium rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted font-medium">Full Name</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  required
                  className="bg-background/40 border-border/50 text-foreground placeholder:text-muted/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted font-medium">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  required
                  className="bg-background/40 border-border/50 text-foreground placeholder:text-muted/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted font-medium">Tell us about your project</label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="We're a fintech with 10K customers and want to automate our support with AI..."
                rows={5}
                required
                className="bg-background/40 border-border/50 text-foreground placeholder:text-muted/50"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
            )}

            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : (
                <>Send Message <Send className="w-4 h-4" /></>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
