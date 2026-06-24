import SectionHeading from '@/components/ui/SectionHeading'
import FaqAccordion from '@/components/ui/FaqAccordion'
import { faq } from '@/data/content'

export default function FaqSection() {
  return (
    <section className="bg-purple-50 py-20" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <SectionHeading
          label="Questions & Answers"
          title="Frequently Asked Questions"
          center
          dark
          labelColor="text-purple-600"
          id="faq-heading"
        />
        <FaqAccordion items={faq} />
      </div>
    </section>
  )
}
