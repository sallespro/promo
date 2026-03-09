import Anthropic from '@anthropic-ai/sdk'

const SYSTEM = (criteria) => `You are an expert fullstack developer specializing in high-converting infoproduct landing pages.

CRITERIA (follow these rules exactly):
${criteria}

IMPORTANT OUTPUT FORMAT:
Return ONLY a valid JSON array. No markdown. No explanation. No code fences.
Each element: {"path": "relative/path/to/file", "content": "full file content as string"}
The JSON must be parseable with JSON.parse().
Include EVERY file needed to run the app: package.json, vite.config.js, tailwind.config.js,
postcss.config.js, index.html, server/index.js, all src/ files, public/favicon.svg.
Make all content complete and working — no placeholders, no TODOs.`

const USER = (opts, urlContent) => `Build a complete infoproduct landing page site:

SOURCE URL: ${opts.url || 'none'}
FETCHED CONTENT: ${urlContent || 'No URL content — use the prompt info below exclusively.'}
PROMPT: ${opts.prompt}

REQUIREMENTS:
- Language: ${opts.lang || 'auto-detect from content (prefer Portuguese if content is Brazilian)'}
- Accent: ${opts.accent || 'auto-detect from brand (blue/indigo for AI/tech)'}
- Output dir: ${opts.out || 'auto-generate from site name'}
- Dark theme, animated matrix background on hero, Space Grotesk font
- All sections: Navbar, Hero, Features, HowItWorks, About, Testimonials, FAQ, CTA, Footer
- Express backend with /api/contact and /api/health
- 6 feature cards, 4 testimonials, 5 FAQ entries, 3-step process

Return ONLY the JSON array now:`

export async function fetchContent(url) {
  if (!url) return ''
  console.log(`\n📡 Fetching content from: ${url}`)
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 AppleWebKit/537.36' } })
    return (await res.text())
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 6000)
  } catch (e) {
    console.warn(`⚠️  Could not fetch URL: ${e.message}`)
    return ''
  }
}

export async function generateSite(opts, criteria, urlContent) {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('\n❌ ANTHROPIC_API_KEY not set. Export it: export ANTHROPIC_API_KEY=sk-ant-...')
    process.exit(1)
  }
  const client = new Anthropic()
  console.log(`\n🤖 Calling Claude API... (${opts.model})`)
  let fullText = ''
  const stream = await client.messages.stream({
    model: opts.model,
    max_tokens: 16000,
    system: SYSTEM(criteria),
    messages: [{ role: 'user', content: USER(opts, urlContent) }]
  })
  process.stdout.write('   Generating')
  for await (const chunk of stream) {
    if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
      fullText += chunk.delta.text
      process.stdout.write('.')
    }
  }
  console.log(' done!\n')
  return fullText
}

export function parseFiles(raw) {
  let text = raw.trim()
  if (text.startsWith('```')) text = text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim()
  try {
    return JSON.parse(text)
  } catch (e) {
    const match = text.match(/\[[\s\S]*\]/)
    if (match) { try { return JSON.parse(match[0]) } catch {} }
    throw new Error(`Failed to parse response as JSON: ${e.message}\n\nFirst 500 chars:\n${text.slice(0, 500)}`)
  }
}

export function writeFiles(files, outDir, { mkdirSync, writeFileSync, existsSync, join, dirname }) {
  console.log(`📁 Writing ${files.length} files to: ${outDir}/`)
  for (const file of files) {
    const fullPath = join(outDir, file.path)
    const dir = dirname(fullPath)
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
    writeFileSync(fullPath, file.content, 'utf8')
    console.log(`   ✓ ${file.path}`)
  }
}
