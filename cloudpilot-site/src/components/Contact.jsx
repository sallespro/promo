import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

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
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 bg-card/20">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-12 space-y-4">
          <Badge>Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's Build{' '}
            <span className="gradient-text">Your AI Future</span>
          </h2>
          <p className="text-muted">
            Tell us about your business and we'll reach out within 24 hours with a tailored proposal.
          </p>
        </div>

        {status === 'success' ? (
          <div className="glass-card rounded-2xl p-12 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">Message Received!</h3>
            <p className="text-muted">Our team will reach out within 24 hours. Exciting things ahead.</p>
            <Button variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm text-muted font-medium">Full Name</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-muted font-medium">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-muted font-medium">Tell us about your project</label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="We're a fintech with 10K customers and want to automate our support with AI..."
                rows={5}
                required
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
            )}

            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full"
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
