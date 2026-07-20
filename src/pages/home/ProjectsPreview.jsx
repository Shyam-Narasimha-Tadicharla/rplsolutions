import SectionHeading from '@/components/ui/SectionHeading'
import Gallery from '@/components/ui/Gallery'
import ShinyButton from '@/components/ui/ShinyButton'
import { projects } from '@/data/content'

import imgERP from '@/assets/images/ERP.jpeg'
import imgFinance from '@/assets/images/businesssupport.png'
import imgEducation from '@/assets/images/educationalservice.png'

const HOME_PROJECT_IMAGES = {
  'enterprise-erp-platform':  imgERP,
  'gst-compliance-drive':     imgFinance,
  'university-lms-rollout':   imgEducation,
}

// Show 1 software, 1 finance, 1 education
const FEATURED_IDS = ['enterprise-erp-platform', 'gst-compliance-drive', 'university-lms-rollout']

export default function ProjectsPreview() {
  const preview = projects
    .filter((p) => FEATURED_IDS.includes(p.id))
    .sort((a, b) => FEATURED_IDS.indexOf(a.id) - FEATURED_IDS.indexOf(b.id))
    .map((p) => ({
      ...p,
      tag: p.sector,
      image: HOME_PROJECT_IMAGES[p.id] || p.image,
    }))

  return (
    <section className="bg-gray-50 py-20" aria-labelledby="projects-preview-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          label="Our Work"
          title="Featured Projects"
          subtitle="A selection of projects delivered across software development, financial services, and education technology."
          center
          dark
          labelColor="text-gray-500"
        />
        <Gallery items={preview} cols={3} />
        <div className="mt-10 text-center">
          <ShinyButton href="/projects" label="View All Projects" />
        </div>
      </div>
    </section>
  )
}
