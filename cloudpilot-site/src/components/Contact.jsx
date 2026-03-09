import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'

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
    <section id="contact" className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Talk</h2>
          <p className="text-lg text-muted">
            Tell us about your AI challenges. We'll respond within 24 hours with a tailored approach.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center space-y-4 p-8 border border-border rounded-lg">
            <CheckCircle className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold">Message received!</h3>
            <p className="text-muted">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              required
            />
            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}
            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              {status === 'loading' ? 'Sending...' : (
                <>Send Message <Send className="w-4 h-4 ml-2" /></>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
