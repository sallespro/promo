import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now(), service: 'cloudpilot-site' })
})

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ success: false, error: 'All fields are required.' })
  console.log(`\n📬 Contact: ${name} <${email}> @ ${new Date().toISOString()}\n   ${message.slice(0, 120)}`)
  res.json({ success: true, message: 'Thank you! We will reach out within 24 hours.' })
})

const distPath = path.join(__dirname, '..', 'dist')
app.use(express.static(distPath))
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), err => { if (err) res.status(404).send('Not found') })
})

app.listen(PORT, () => {
  console.log(`\n🚀 Cloudpilot API → http://localhost:${PORT}`)
  console.log(`   Health: http://localhost:${PORT}/api/health`)
})
