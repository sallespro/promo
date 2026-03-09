import { Bot, Shield, Users, GraduationCap, Map, Zap } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const features = [
  {
    icon: Bot,
    title: 'Custom AI Agents & RAG',
    description:
      'We design and deploy intelligent AI agents and Retrieval-Augmented Generation systems tailored precisely to your workflows, data, and business objectives.',
  },
  {
    icon: Shield,
    title: 'Responsible AI Development',
    description:
      'Every solution we build is fair, transparent, and secure. We prioritize ethical AI practices to protect your brand, customers, and regulatory compliance.',
  },
  {
    icon: Users,
    title: 'Industry-Veteran Team',
    description:
      'Our consultants bring a proven track record of successful enterprise AI deployments across healthcare, finance, retail, and manufacturing sectors.',
  },
  {
    icon: GraduationCap,
    title: 'AI Training & Enablement',
    description:
      'We empower your team with the skills and knowledge to leverage AI effectively — from executive workshops to hands-on technical bootcamps.',
  },
  {
    icon: Map,
    title: 'End-to-End AI Roadmap',
    description:
      'From strategy and roadmap to implementation and optimization — we guide your complete AI adoption journey so you never face it alone.',
  },
  {
    icon: Zap,
    title: 'Rapid Integration & Deployment',
    description:
      'Our battle-tested frameworks accelerate time-to-value. We integrate AI into your existing stack without disrupting your operations.',
  },
]

export default function Features() {
  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <Badge>Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Everything You Need to{' '}
            <span className="gradient-text">Win with AI</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From strategy to execution, Cloudpilot delivers the expertise, tools, and
            support to transform AI from a buzzword into your competitive advantage.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card
              key={i}
              className="group hover:scale-[1.02] hover:-translate-y-1 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>{f.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
