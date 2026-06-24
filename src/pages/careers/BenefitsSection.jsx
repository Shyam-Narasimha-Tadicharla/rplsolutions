import SectionHeading from '@/components/ui/SectionHeading'
import FeatureGrid from '@/components/ui/FeatureGrid'
import { benefits } from '@/data/content'

export default function BenefitsSection() {
  return (
    <section className="bg-emerald-50 py-20" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          label="Why Join Us"
          title="Benefits of Working at RPL Solutions"
          subtitle="We invest in our people. Here's what you can expect when you join the team."
          center
          dark
          labelColor="text-emerald-700"
          id="benefits-heading"
        />
        <FeatureGrid items={benefits} cols={3} colored />
      </div>
    </section>
  )
}
