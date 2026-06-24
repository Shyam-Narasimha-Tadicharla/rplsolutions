import SectionHeading from '@/components/ui/SectionHeading'
import { team } from '@/data/content'

const AVATAR_COLORS = [
  'bg-purple-500',
  'bg-indigo-500',
  'bg-violet-500',
  'bg-purple-600',
  'bg-indigo-600',
]

export default function TeamSection() {
  return (
    <section className="bg-purple-50 py-20" aria-labelledby="team-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          label="Our People"
          title="The Team Behind the Work"
          subtitle="A multidisciplinary team of over 100 professionals spanning geospatial, BIM, engineering, and QA disciplines."
          center
          dark
          labelColor="text-purple-600"
          id="team-heading"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} flex items-center justify-center mb-4 font-sora font-bold text-white text-lg shadow-md`}>
                {member.initials}
              </div>
              <h3 className="font-sora font-semibold text-gray-900 text-sm mb-2">{member.role}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
