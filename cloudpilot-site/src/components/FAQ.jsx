import { Accordion } from '@/components/ui/accordion'
import SectionHeader from '@/components/SectionHeader'
import { faqs } from '@/data/content'

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <SectionHeader badge="FAQ" headline="Questions?" highlight="We've Got Answers" />
        <Accordion items={faqs} />
      </div>
    </section>
  )
}
