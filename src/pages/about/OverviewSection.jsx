import SectionHeading from '@/components/ui/SectionHeading'
import { about } from '@/data/content'
import { CheckCircle2 } from 'lucide-react'

export default function OverviewSection() {
  return (
    <section className="bg-purple-50 py-20" aria-labelledby="overview-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          label="Company Overview"
          title="What We Offer"
          subtitle="A multi-disciplinary team delivering software, education, financial, and geospatial services at scale."
          center
          dark
          labelColor="text-purple-600"
          id="overview-heading"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.overview.map((col, i) => (
            <div key={i} className="bg-purple-100/70 rounded-2xl p-8 border border-purple-200">
              <h3 className="font-sora font-bold text-purple-900 text-base mb-5">{col.heading}</h3>
              <ul className="space-y-3">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-purple-800 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
