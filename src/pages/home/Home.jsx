import HeroSection from './HeroSection'
import StatStrip from '@/components/ui/StatStrip'
import ServicesSection from './ServicesSection'
import ProjectsPreview from './ProjectsPreview'
import CareersStrip from './CareersStrip'
import HomeContact from './HomeContact'
import { stats } from '@/data/content'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatStrip items={stats} variant="white" />
      <ServicesSection />
      <ProjectsPreview />
      <CareersStrip />
      <HomeContact />
    </>
  )
}
