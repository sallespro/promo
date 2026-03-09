import { Bot, Shield, Users, GraduationCap, Map, Zap, ClipboardList, FlaskConical, Rocket, CheckCircle2, Award, Globe2, HeartHandshake, Cpu, Github, Linkedin, Twitter } from 'lucide-react'

export const features = [
  { icon: Bot, title: 'Custom AI Agents & RAG', description: 'We design and deploy intelligent AI agents and Retrieval-Augmented Generation systems tailored precisely to your workflows, data, and business objectives.' },
  { icon: Shield, title: 'Responsible AI Development', description: 'Every solution we build is fair, transparent, and secure. We prioritize ethical AI practices to protect your brand, customers, and regulatory compliance.' },
  { icon: Users, title: 'Industry-Veteran Team', description: 'Our consultants bring a proven track record of successful enterprise AI deployments across healthcare, finance, retail, and manufacturing sectors.' },
  { icon: GraduationCap, title: 'AI Training & Enablement', description: 'We empower your team with the skills and knowledge to leverage AI effectively — from executive workshops to hands-on technical bootcamps.' },
  { icon: Map, title: 'End-to-End AI Roadmap', description: 'From strategy and roadmap to implementation and optimization — we guide your complete AI adoption journey so you never face it alone.' },
  { icon: Zap, title: 'Rapid Integration & Deployment', description: 'Our battle-tested frameworks accelerate time-to-value. We integrate AI into your existing stack without disrupting your operations.' },
]

export const steps = [
  { icon: ClipboardList, number: '01', title: 'Discovery & Strategy', description: 'We audit your existing processes, data landscape, and competitive environment to design a tailored AI roadmap aligned with your business goals and budget.' },
  { icon: FlaskConical, number: '02', title: 'Build & Integrate', description: 'Our engineers develop custom AI solutions — agents, RAG pipelines, automations — and integrate them seamlessly into your existing infrastructure with zero disruption.' },
  { icon: Rocket, number: '03', title: 'Deploy & Scale', description: 'We launch, monitor, and continuously optimize your AI systems. As your business grows, we scale the solution and train your team to maintain independence.' },
]

export const aboutBullets = [
  { icon: Award, text: 'Industry veterans with 5+ years of enterprise AI deployments' },
  { icon: Globe2, text: 'Serving clients across Brazil, Latin America, and globally' },
  { icon: CheckCircle2, text: 'Custom solutions — no one-size-fits-all, every project is unique' },
  { icon: HeartHandshake, text: 'Long-term partnerships, not one-off projects' },
]

export const aboutStats = [
  { v: '50+', l: 'Projects' }, { v: '98%', l: 'Satisfaction' }, { v: '30+', l: 'Clients' }, { v: '5+', l: 'Years' },
]

export const heroStats = [
  { value: '50+', label: 'AI Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10x', label: 'Avg. ROI Achieved' },
  { value: '5+', label: 'Years in AI' },
]

export const testimonials = [
  { quote: 'Cloudpilot transformed how we handle customer support. Their custom AI agent now resolves 70% of tickets autonomously — our team focuses on what matters.', name: 'Mariana Costa', role: 'CTO', company: 'Fintech Solutions BR', stars: 5 },
  { quote: 'The RAG system they built for our legal team cut document review time by 80%. The ROI was visible in the first month. Exceptional technical depth.', name: 'Rafael Mendes', role: 'Head of Operations', company: 'Advocacia Digital', stars: 5 },
  { quote: "They didn't just build AI tools — they taught our whole team how to use them strategically. That knowledge multiplier is priceless for our long-term growth.", name: 'Beatriz Alves', role: 'CEO', company: 'EdTech Innovate', stars: 5 },
  { quote: "Responsible AI development isn't a buzzword for Cloudpilot — it's how they operate. We passed our compliance audit without a single finding. Remarkable.", name: 'Carlos Drummond', role: 'CISO', company: 'HealthAI Platform', stars: 5 },
]

export const faqs = [
  { question: 'What types of businesses does Cloudpilot work with?', answer: 'We work with SMEs and enterprises across all industries — fintech, healthcare, legal, retail, manufacturing, and education. Our process is industry-agnostic, but we apply deep domain knowledge to every engagement. If you handle data and have processes, AI can help.' },
  { question: 'How long does a typical AI implementation project take?', answer: 'A focused AI agent or RAG system can be live in 4–8 weeks. Full AI transformation programs typically run 3–6 months. We always start with a rapid discovery sprint (1–2 weeks) to scope the engagement precisely.' },
  { question: 'Do we need to have our data ready before engaging Cloudpilot?', answer: 'No. We frequently help clients assess, clean, and structure their data as part of the engagement. Having some existing data is helpful, but we can design solutions that start small and scale as data accumulates.' },
  { question: 'How does Cloudpilot approach data security and privacy?', answer: 'We follow LGPD and GDPR standards by default. All AI solutions are built with data minimization, access controls, and audit trails. We can deploy entirely on-premise or in private cloud environments when required.' },
  { question: 'What makes Cloudpilot different from other AI consultancies?', answer: "Three things: technical depth, responsible AI commitment, and knowledge transfer. We don't create dependency — we build your team's AI capabilities alongside the solution." },
  { question: 'Do you offer ongoing support after project delivery?', answer: 'Yes. Every project includes a 3-month post-launch support period. We also offer retainer packages for continuous optimization, model fine-tuning, and feature expansion.' },
]

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export const footerLinks = [
  ...navLinks,
  { label: 'Contact', href: '#contact' },
]

export const socials = [
  { Icon: Github, href: '#', label: 'GitHub' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
]

export const brand = {
  name: 'cloudpilot',
  icon: Cpu,
  tagline: 'Premier AI consulting. From roadmap to real results.',
}
