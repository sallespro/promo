import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import SectionHeader from '@/components/SectionHeader'
import { features } from '@/data/content'

export default function Features() {
  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Our Services"
          headline="Everything You Need to"
          highlight="Win with AI"
          sub="From strategy to execution, Cloudpilot delivers the expertise, tools, and support to transform AI from a buzzword into your competitive advantage."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
