import SectionHeading from '@/components/ui/SectionHeading'
import ShinyButton from '@/components/ui/ShinyButton'
import { jobs } from '@/data/content'
import { MapPin, Briefcase, Building2 } from 'lucide-react'

export default function OpportunitiesSection() {
  return (
    <section id="opportunities" className="bg-emerald-100/50 py-20" aria-labelledby="jobs-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          label="Open Roles"
          title="Current Opportunities"
          subtitle="Don't see a perfect fit? Email us at info@rpl-solutions.com - we always welcome strong candidates."
          center
          dark
          labelColor="text-emerald-700"
          id="jobs-heading"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl border border-emerald-100 p-6 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-sora font-bold text-gray-900 text-lg mb-3">{job.title}</h3>
              <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-5">
                <span className="flex items-center gap-1.5">
                  <Building2 size={13} />
                  {job.department}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={13} />
                  {job.type}
                </span>
              </div>
              <ShinyButton
                href={`mailto:${job.applyEmail}?subject=Application for ${encodeURIComponent(job.title)}`}
                label="Apply Now"
                className="text-xs px-4 py-2"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
