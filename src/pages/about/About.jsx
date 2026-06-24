import AboutHero from './AboutHero'
import StatStrip from '@/components/ui/StatStrip'
import OverviewSection from './OverviewSection'
import CorePrinciples from './CorePrinciples'
import TeamSection from './TeamSection'
import FaqSection from './FaqSection'
import { stats } from '@/data/content'

export default function About() {
  return (
    <>
      <AboutHero />
      <StatStrip items={stats} />
      <OverviewSection />
      <CorePrinciples />
      <TeamSection />
      <FaqSection />
    </>
  )
}
