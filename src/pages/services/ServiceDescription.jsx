import { CheckCircle2 } from 'lucide-react'
import FeatureGrid from '@/components/ui/FeatureGrid'
import SectionHeading from '@/components/ui/SectionHeading'

const THEME = {
  financial: {
    bg: 'bg-emerald-50',
    label: 'text-emerald-600',
    check: 'text-emerald-500',
    capsBg: 'bg-white',
    capsLabel: 'text-emerald-600',
  },
  software: {
    bg: 'bg-purple-50',
    label: 'text-purple-600',
    check: 'text-purple-500',
    capsBg: 'bg-white',
    capsLabel: 'text-purple-600',
  },
  education: {
    bg: 'bg-sky-50',
    label: 'text-sky-600',
    check: 'text-sky-500',
    capsBg: 'bg-white',
    capsLabel: 'text-sky-600',
  },
  default: {
    bg: 'bg-orange-50',
    label: 'text-orange-600',
    check: 'text-orange-500',
    capsBg: 'bg-white',
    capsLabel: 'text-orange-500',
  },
}

export default function ServiceDescription({ service }) {
  const t = THEME[service.category] || THEME.default

  return (
    <>
      <section className="bg-white py-20" aria-labelledby="service-desc-heading">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className={`${t.label} text-xs font-sora font-semibold tracking-widest uppercase mb-3`}>
                Overview
              </p>
              <h2
                id="service-desc-heading"
                className="font-sora font-bold text-2xl md:text-3xl text-gray-900 mb-6"
              >
                About This Service
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">{service.description}</p>
              {service.lmsAppUrl && (
                <p className={`mt-5 text-xs font-sora font-semibold ${t.label} uppercase tracking-widest`}>
                  Try our platform demos below ↓
                </p>
              )}
            </div>

            {service.bullets && service.bullets.length > 0 && (
              <div>
                <p className={`${t.label} text-xs font-sora font-semibold tracking-widest uppercase mb-3`}>
                  {service.category === 'financial' || service.category === 'education' ? 'What We Offer' : 'Deliverables'}
                </p>
                <h3 className="font-sora font-bold text-lg text-gray-900 mb-5">
                  {service.category === 'financial' || service.category === 'education' ? 'What We Cover' : 'What You Get'}
                </h3>
                <ul className="space-y-3">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className={`${t.check} mt-0.5 shrink-0`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {service.lmsAppUrl && (
        <section className="bg-sky-50 py-16 border-t border-sky-100" aria-labelledby="demos-heading">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <p className="text-sky-600 text-xs font-sora font-semibold tracking-widest uppercase mb-2">
              Live Platform
            </p>
            <h2 id="demos-heading" className="font-sora font-bold text-2xl md:text-3xl text-gray-900 mb-4">
              Try the Platform Yourself
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Explore the RPL Solutions exam and assessment platform — live and ready to use.
            </p>

            {/* Demo cards */}
            {service.demos && service.demos.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {service.demos.map((demo, i) => (
                  <a
                    key={i}
                    href={demo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-white rounded-2xl border border-sky-100 p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-200"
                  >
                    <h3 className="font-sora font-bold text-gray-900 text-sm group-hover:text-sky-700 transition-colors">
                      {demo.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1">{demo.description}</p>
                    <span className="text-sky-600 text-xs font-sora font-semibold">
                      Start Demo →
                    </span>
                  </a>
                ))}
              </div>
            )}

            <a
              href={service.lmsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-sora font-semibold px-7 py-3 rounded-lg transition-colors duration-200 shadow-md"
            >
              Visit RPL Exam Site →
            </a>
          </div>
        </section>
      )}

      {service.capabilities && service.capabilities.length > 0 && (
        <section className={`${t.capsBg} py-20`} aria-labelledby="service-caps-heading">
          <div className="container mx-auto px-6 md:px-12">
            <SectionHeading
              label="Capabilities"
              title="Our Expertise"
              center
              dark
              labelColor={t.capsLabel}
              id="service-caps-heading"
            />
            <FeatureGrid items={service.capabilities} cols={3} colored />
          </div>
        </section>
      )}
    </>
  )
}
