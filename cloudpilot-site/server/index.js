import express from 'express'
import cors from 'cors'
import { createRequire } from 'module'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app  = express()
const PORT = process.env.PORT || 3001

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors())
app.use(express.json())

// ─── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now(), service: 'cloudpilot-site' })
})

// Contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' })
  }

  // Log lead (extend with nodemailer / CRM integration)
  console.log('\n📬 New contact form submission:')
  console.log(`   Name:    ${name}`)
  console.log(`   Email:   ${email}`)
  console.log(`   Message: ${message.slice(0, 120)}...`)
  console.log(`   Time:    ${new Date().toISOString()}\n`)

  res.json({ success: true, message: 'Thank you! We will reach out within 24 hours.' })
})

// ─── Static + SPA fallback (production) ──────────────────────────────────────
const distPath = path.join(__dirname, '..', 'dist')
app.use(express.static(distPath))
app.get('*', (_req, res) => {
  const indexPath = path.join(distPath, 'index.html')
  res.sendFile(indexPath, err => {
    if (err) res.status(404).send('Not found')
  })
})

// ─── Start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Cloudpilot API running on http://localhost:${PORT}`)
  console.log(`   Health: http://localhost:${PORT}/api/health`)
})
