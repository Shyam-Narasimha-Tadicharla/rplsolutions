import SectionHeading from '@/components/ui/SectionHeading'
import Gallery from '@/components/ui/Gallery'
import { projects } from '@/data/content'

import imgSoftware from '@/assets/images/software.png'
import imgCloud from '@/assets/images/cloudsol.png'
import imgFinance from '@/assets/images/businesssupport.png'
import imgAudit from '@/assets/images/audit.png'
import imgEducation from '@/assets/images/educationalservice.png'

const PROJECT_IMAGES = {
  'enterprise-erp-platform':   imgSoftware,
  'ecommerce-cloud-migration':  imgCloud,
  'gst-compliance-drive':      imgFinance,
  'startup-incorporation':     imgAudit,
  'university-lms-rollout':    imgEducation,
}

export default function ProjectsGrid() {
  const items = projects.map((p) => ({
    ...p,
    tag: p.sector,
    image: PROJECT_IMAGES[p.id] || p.image,
  }))

  return (
    <section className="bg-white py-20" aria-labelledby="projects-grid-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          label="Case Studies"
          title="Selected Projects"
          subtitle="A cross-section of our work spanning software development, financial services, and education technology."
          center
          dark
          labelColor="text-gray-500"
          id="projects-grid-heading"
        />
        <Gallery items={items} cols={3} />
      </div>
    </section>
  )
}
