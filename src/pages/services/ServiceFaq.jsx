import SectionHeading from '@/components/ui/SectionHeading'
import FaqAccordion from '@/components/ui/FaqAccordion'

const LABEL_COLOR = {
  financial:  'text-emerald-600',
  software:   'text-purple-600',
  education:  'text-sky-600',
}

export default function ServiceFaq({ service }) {
  const labelColor = LABEL_COLOR[service.category] || 'text-gray-500'
  return (
    <section className="bg-white py-20 border-t border-gray-100" aria-labelledby="service-faq-heading">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <SectionHeading
          label="FAQ"
          title={`${service.name} - Common Questions`}
          center
          dark
          labelColor={labelColor}
          id="service-faq-heading"
        />
        <FaqAccordion items={service.faq} />
      </div>
    </section>
  )
}
