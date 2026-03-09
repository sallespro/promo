# Infoproduct Site Criteria
> Based on design pattern analysis of azogu.com — a portfolio of 40+ high-converting infoproduct landing pages.
> This document is the single source of truth for the `create` CLI tool.

---

## 1. Site Archetype & Purpose

Infoproduct sites are **conversion-focused** digital products for:
- Course creators, coaches, consultants
- SaaS products, AI tools, digital services
- Lead generation, sales pages, institutional pages

**Core promise**: Transform visitors into customers (conversão de visitantes em clientes).

---

## 2. Required Page Sections (ordered by scroll)

### 2.1 NAVBAR
- Sticky, hide-on-scroll-down, show-on-scroll-up
- Logo (left) + nav links (center/right) + primary CTA button
- Transparent on hero, solid background on scroll
- Mobile: hamburger menu with full-screen overlay

### 2.2 HERO
- Full-viewport height (`min-h-screen`)
- Centered content: badge/label → H1 headline → subheadline → CTA buttons (primary + secondary)
- Optional: animated background (matrix rain, gradient mesh, particles)
- Device/product mockup or abstract visual (right side on desktop, below on mobile)
- H1: large (5xl–7xl), bold, tight tracking — uses gradient text or high-contrast
- Subheadline: 1–2 lines, muted color, max-w-2xl
- Primary CTA: solid button with brand color + icon
- Secondary CTA: ghost/outline button

### 2.3 SOCIAL PROOF BAR (optional but recommended)
- Horizontal row of logos or stats
- "Trusted by X companies" or key numbers
- Subtle separator between hero and features

### 2.4 FEATURES / SERVICES
- 3-column grid on desktop, 1-column on mobile
- Each card: icon + title + description (2-3 lines)
- Cards use dark background with subtle border
- Section header: eyebrow label (uppercase, accent color) + H2 + supporting text

### 2.5 HOW IT WORKS / PROCESS
- 3–5 numbered steps or phases
- Icon + step number + title + description
- Optional connecting arrow/line between steps
- Alternating layout or simple numbered list

### 2.6 ABOUT / CREDIBILITY
- Profile photo or team grid (optional)
- Bold statement of expertise/mission
- Bullet list of credentials, awards, years of experience
- Accent color highlight on key words

### 2.7 TESTIMONIALS / SOCIAL PROOF
- Card carousel or 3-column grid
- Quote text + avatar/photo + name + role/company
- Star ratings (optional)
- Dark card with subtle border

### 2.8 PRICING (if applicable)
- 2–3 tier cards, middle tier highlighted as "most popular"
- Feature comparison list per tier
- CTA button per tier

### 2.9 FAQ
- Accordion component
- 5–8 questions
- Clean, no clutter

### 2.10 FINAL CTA
- Full-width section with gradient/dark background
- Large H2 + supportive text + single primary CTA button
- Urgency element optional (limited spots, deadline)

### 2.11 FOOTER
- Logo + tagline
- Navigation links in columns
- Social media icons
- Copyright + legal links

---

## 3. Design Language

### 3.1 Color System
```
Dark theme (default):
  background:      #0f172a  (slate-900)
  card:            #1e293b  (slate-800)
  border:          #334155  (slate-700)
  foreground:      #f8fafc  (slate-50)
  muted:           #64748b  (slate-500)

Accent (choose ONE per site based on brand):
  AI/Tech:         blue-500 → indigo-500  (#3b82f6 → #6366f1)
  Health/Wellness: green-400 → teal-500   (#4ade80 → #14b8a6)
  Finance:         amber-400 → orange-500 (#fbbf24 → #f97316)
  Creative:        pink-500 → purple-500  (#ec4899 → #a855f7)
  Default:         teal (#0BE9B8) used by azogu
```

### 3.2 Typography
- **Primary font**: Space Grotesk or Sora (geometric sans-serif, Google Fonts)
- **Fallback**: Inter, system-ui
- **Weights**: 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- **Scale**:
  - Hero H1:       text-5xl md:text-7xl
  - Section H2:    text-3xl md:text-5xl
  - Card title:    text-xl font-semibold
  - Body:          text-base text-muted-foreground
  - Eyebrow:       text-sm uppercase tracking-widest font-bold accent-color
- **Gradient text** on H1: `bg-gradient-to-r from-[accent] to-[accent-2] bg-clip-text text-transparent`

### 3.3 Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-24 md:py-32 px-4 md:px-8`
- Card gap: `gap-8`
- Card padding: `p-8`
- Border radius: `rounded-2xl` for cards, `rounded-xl` for buttons, `rounded-full` for badges

### 3.4 Visual Effects
- Backdrop blur on navbar: `backdrop-blur-md bg-background/80`
- Card hover: `hover:scale-105 hover:border-[accent] transition-all duration-300`
- Gradient borders on featured cards
- Subtle grid or dot pattern on hero background
- `shadow-2xl` on floating elements
- Animate in on scroll: `animate-in fade-in slide-in-from-bottom duration-700`

---

## 4. Component Stack

### Frontend
- **Framework**: React 18 + Vite
- **UI Library**: shadcn/ui (Tailwind CSS based)
- **Icons**: lucide-react
- **Fonts**: Google Fonts via link tag
- **Animations**: Tailwind animate + CSS keyframes
- **Routing**: react-router-dom (single page, hash anchors)

### Backend
- **Framework**: Express.js
- **Purpose**: Contact form, API proxy (optional), static serve
- **Port**: 3001 (dev), served from Vite in prod
- **Endpoints**:
  - `POST /api/contact` — sends email or logs lead
  - `GET /api/health` — health check

### Project Structure
```
{site-name}/
├── package.json
├── vite.config.js
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── components.json          # shadcn config
├── server/
│   ├── index.js             # Express server
│   └── routes/
│       └── contact.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css            # Tailwind base + custom fonts + keyframes
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── badge.jsx
│   │   │   ├── accordion.jsx
│   │   │   └── input.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx      # optional
│   │   ├── FAQ.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   └── MatrixBackground.jsx  # optional animated bg
│   ├── lib/
│   │   └── utils.js         # cn() helper
│   └── hooks/
│       └── useScrollSpy.js
└── public/
    └── favicon.svg
```

---

## 5. Content Schema

Every prompt must map to this schema. The `create` CLI extracts these fields:

```json
{
  "site": {
    "name": "string",           // brand/company name
    "tagline": "string",        // short hero headline (< 10 words)
    "description": "string",    // hero subheadline (1-2 sentences)
    "url": "string",            // optional source URL
    "lang": "en|pt-BR",
    "accent": "blue|green|amber|pink|teal"
  },
  "hero": {
    "badge": "string",          // eyebrow label e.g. "AI Consulting"
    "headline": "string",       // main H1
    "subheadline": "string",
    "primaryCTA": { "label": "string", "href": "string" },
    "secondaryCTA": { "label": "string", "href": "string" }
  },
  "features": [
    {
      "icon": "string",         // lucide icon name
      "title": "string",
      "description": "string"
    }
  ],
  "howItWorks": [
    { "step": 1, "title": "string", "description": "string" }
  ],
  "about": {
    "headline": "string",
    "body": "string",
    "bullets": ["string"]
  },
  "testimonials": [
    {
      "quote": "string",
      "name": "string",
      "role": "string",
      "company": "string"
    }
  ],
  "pricing": [
    {
      "tier": "string",
      "price": "string",
      "period": "string",
      "features": ["string"],
      "cta": "string",
      "featured": false
    }
  ],
  "faq": [
    { "question": "string", "answer": "string" }
  ],
  "cta": {
    "headline": "string",
    "subheadline": "string",
    "buttonLabel": "string",
    "href": "string"
  },
  "footer": {
    "links": [{ "label": "string", "href": "string" }],
    "social": [{ "platform": "string", "href": "string" }],
    "copyright": "string"
  }
}
```

---

## 6. CLI Behavior (`create` command)

### Input
```
create [options] "<prompt>"

Options:
  --url <url>       source URL to scrape for content
  --out <dir>       output directory name (default: site name)
  --lang <lang>     language: en or pt-BR (default: auto-detect from prompt)
  --accent <color>  accent color scheme (default: auto-detect from brand)
  --model <model>   Claude model (default: claude-sonnet-4-6)
```

### Process
1. Read `criteria.md` from same directory as the CLI binary
2. Optionally fetch content from `--url` (puppeteer or plain fetch)
3. Build a system prompt from criteria.md + content schema
4. Call Claude API with: system=criteria, user=prompt+url_content
5. Claude returns complete file tree as JSON array of `{path, content}` objects
6. Write all files to output directory
7. Run `npm install` in output directory
8. Print success message with `cd <dir> && npm run dev`

### Claude Prompt Template
```
System: You are an expert fullstack developer.
Read the CRITERIA carefully and generate a COMPLETE working site.
[criteria.md contents]

User: Build an infoproduct site with this content:
URL: {url}
Fetched content: {url_content}
Additional context: {prompt}

Return ONLY a JSON array of file objects:
[{"path": "relative/file/path", "content": "full file content"}]
No explanations. Complete, working code only.
Include ALL files needed to run: package.json, vite.config.js, tailwind.config.js,
postcss.config.js, index.html, server/index.js, all src/ components, etc.
```

---

## 7. Quality Checklist

Every generated site must:
- [ ] Work with `npm install && npm run dev` with zero errors
- [ ] Be fully responsive (mobile-first)
- [ ] Have smooth scroll navigation
- [ ] Include working contact form (client-side + Express endpoint)
- [ ] Use Tailwind dark mode (class strategy)
- [ ] Load custom Google Font in index.html
- [ ] Have animated hero background (matrix rain or gradient mesh)
- [ ] Include Open Graph meta tags in index.html
- [ ] Have Lucide icons throughout
- [ ] Use shadcn Card, Button, Badge, Accordion components
- [ ] Have gradient text on hero H1
- [ ] Feature hover animations on cards
- [ ] Include sticky navbar with scroll behavior
- [ ] All sections linked from navbar
- [ ] Footer with copyright year (dynamic)

---

## 8. Express Server Requirements

```js
// server/index.js — must implement:
app.use(cors())
app.use(express.json())
app.use(express.static('../dist'))  // serve Vite build

// POST /api/contact
// accepts: { name, email, message }
// returns: { success: true, message: 'sent' }
// logs to console (can extend with nodemailer)

// GET /api/health
// returns: { status: 'ok', timestamp: Date.now() }

// SPA fallback
app.get('*', (req, res) => res.sendFile('index.html'))
```

---

## 9. Package.json Scripts

```json
{
  "scripts": {
    "dev": "concurrently \"vite\" \"node server/index.js\"",
    "build": "vite build",
    "preview": "vite preview",
    "start": "node server/index.js"
  }
}
```

---

## 10. Shadcn Component Inline Pattern

Since `npx shadcn init` requires interaction, components are inlined manually.
Follow this pattern for all shadcn components:

```jsx
// src/components/ui/button.jsx
import { cn } from "@/lib/utils"

const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
}

export function Button({ className, variant = "default", children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold",
        "transition-all duration-200 focus-visible:outline-none disabled:opacity-50",
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
```

---

## 11. Animation Keyframes (index.css)

```css
@keyframes matrix-fall {
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}

.animate-fade-in-up { animation: fade-in-up 0.7s ease both; }
.animate-float      { animation: float 4s ease-in-out infinite; }
```
