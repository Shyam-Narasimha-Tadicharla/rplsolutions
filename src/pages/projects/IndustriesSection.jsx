import SectionHeading from '@/components/ui/SectionHeading'
import { industries } from '@/data/content'

const ICON_COLORS = [
  { bg: 'bg-blue-100',   icon: 'text-blue-700',   hover: 'group-hover:bg-blue-600 group-hover:text-white' },
  { bg: 'bg-teal-100',   icon: 'text-teal-700',   hover: 'group-hover:bg-teal-600 group-hover:text-white' },
  { bg: 'bg-indigo-100', icon: 'text-indigo-700', hover: 'group-hover:bg-indigo-600 group-hover:text-white' },
  { bg: 'bg-amber-100',  icon: 'text-amber-700',  hover: 'group-hover:bg-amber-500 group-hover:text-white' },
  { bg: 'bg-rose-100',   icon: 'text-rose-700',   hover: 'group-hover:bg-rose-600 group-hover:text-white' },
  { bg: 'bg-purple-100', icon: 'text-purple-700', hover: 'group-hover:bg-purple-600 group-hover:text-white' },
  { bg: 'bg-cyan-100',   icon: 'text-cyan-700',   hover: 'group-hover:bg-cyan-600 group-hover:text-white' },
]

export default function IndustriesSection() {
  return (
    <section className="bg-gray-50 py-20" aria-labelledby="industries-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          label="Sectors We Serve"
          title="Industries We Work In"
          subtitle="Our expertise spans a wide range of industries, each served with tailored technology and professional solutions."
          center
          dark
          labelColor="text-gray-500"
          id="industries-heading"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            const c = ICON_COLORS[i % ICON_COLORS.length]
            return (
              <div
                key={i}
                className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300 ${c.bg} ${c.icon} ${c.hover}`}>
                  <Icon size={22} />
                </div>
                <p className="font-sora font-semibold text-xs text-gray-800 leading-snug">{industry.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
