import SectionHeading from '@/components/ui/SectionHeading'
import FeatureGrid from '@/components/ui/FeatureGrid'
import { about } from '@/data/content'

export default function CorePrinciples() {
  return (
    <section className="bg-purple-50 py-20" aria-labelledby="principles-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          label="Our Foundation"
          title="Mission, Vision & Values"
          subtitle="The principles that have guided RPL Solutions for over two decades."
          center
          dark
          labelColor="text-purple-600"
          id="principles-heading"
        />
        <FeatureGrid items={about.principles} cols={4} colored />
      </div>
    </section>
  )
}
