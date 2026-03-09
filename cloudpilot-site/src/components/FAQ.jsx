import { Accordion } from '@/components/ui/accordion'
import SectionHeader from '@/components/SectionHeader'
import { faqs } from '@/data/content'

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <SectionHeader badge="FAQ" headline="Common Questions" sub="Everything you need to know about our services." />
        <Accordion items={faqs} />
      </div>
    </section>
  )
}
