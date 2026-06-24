import SectionHeading from '@/components/ui/SectionHeading'
import ShinyButton from '@/components/ui/ShinyButton'
import { serviceHighlights } from '@/data/content'

export default function ServicesSection() {
  const colors = [
    // Software x2 - purple
    { card: 'bg-purple-50 border-purple-100', icon: 'bg-purple-600 text-white',   title: 'text-purple-900'  },
    { card: 'bg-indigo-50 border-indigo-100', icon: 'bg-indigo-600 text-white',   title: 'text-indigo-900'  },
    // Finance x2 - emerald
    { card: 'bg-emerald-50 border-emerald-100', icon: 'bg-emerald-600 text-white', title: 'text-emerald-900' },
    { card: 'bg-teal-50 border-teal-100',     icon: 'bg-teal-600 text-white',     title: 'text-teal-900'    },
    // Education x1 - sky
    { card: 'bg-sky-50 border-sky-100',       icon: 'bg-sky-600 text-white',      title: 'text-sky-900'     },
    // Geospatial x1 - amber/orange
    { card: 'bg-amber-50 border-amber-100',   icon: 'bg-amber-500 text-white',    title: 'text-amber-900'   },
  ]

  return (
    <section className="bg-white py-20" aria-labelledby="services-heading">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          label="What We Do"
          title="Our Core Services"
          subtitle="From custom software and LMS platforms to financial advisory and geospatial services - we deliver end-to-end technology and professional solutions."
          center
          dark
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceHighlights.map((item, i) => {
            const Icon = item.icon
            const c = colors[i % colors.length]
            return (
              <a
                key={item.id}
                href={item.href}
                className={`group flex flex-col rounded-2xl p-6 border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${c.card}`}
              >
                <div className={`mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl ${c.icon}`}>
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className={`font-sora font-semibold text-base mb-2 ${c.title}`}>{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.description}</p>
              </a>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <ShinyButton href="/services/software-solutions" label="View All Services" />
        </div>
      </div>
    </section>
  )
}
