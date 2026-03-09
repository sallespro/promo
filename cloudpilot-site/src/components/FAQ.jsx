import { Accordion } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

const faqs = [
  {
    question: 'What types of businesses does Cloudpilot work with?',
    answer:
      'We work with SMEs and enterprises across all industries — fintech, healthcare, legal, retail, manufacturing, and education. Our process is industry-agnostic, but we apply deep domain knowledge to every engagement. If you handle data and have processes, AI can help.',
  },
  {
    question: 'How long does a typical AI implementation project take?',
    answer:
      'A focused AI agent or RAG system can be live in 4–8 weeks. Full AI transformation programs with training and organizational change management typically run 3–6 months. We always start with a rapid discovery sprint (1–2 weeks) to scope the engagement precisely.',
  },
  {
    question: 'Do we need to have our data ready before engaging Cloudpilot?',
    answer:
      'No. We frequently help clients assess, clean, and structure their data as part of the engagement. Having some existing data (documents, databases, logs) is helpful, but we can design solutions that start small and scale as data accumulates.',
  },
  {
    question: 'How does Cloudpilot approach data security and privacy?',
    answer:
      'Security is non-negotiable. We follow LGPD (Brazilian data protection law) and GDPR standards by default. All AI solutions are built with data minimization, access controls, and audit trails. We can deploy entirely on-premise or in private cloud environments when required.',
  },
  {
    question: 'What makes Cloudpilot different from other AI consultancies?',
    answer:
      'Three things: technical depth, responsible AI commitment, and knowledge transfer. We don\'t create dependency — we build your team\'s AI capabilities alongside the solution. Our track record of successful enterprise deployments and 98% client satisfaction speaks to this approach.',
  },
  {
    question: 'Do you offer ongoing support after project delivery?',
    answer:
      'Yes. Every project includes a 3-month post-launch support period. We also offer retainer packages for continuous optimization, model fine-tuning, and feature expansion as your business evolves and new AI capabilities emerge.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16 space-y-4">
          <Badge>FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Questions?{' '}
            <span className="gradient-text">We've Got Answers</span>
          </h2>
        </div>

        <Accordion items={faqs} />
      </div>
    </section>
  )
}
