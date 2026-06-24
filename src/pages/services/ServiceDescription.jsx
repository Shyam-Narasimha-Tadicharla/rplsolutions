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
                <a
                  href={service.lmsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 mt-5 text-sm font-sora font-semibold ${t.label} hover:underline underline-offset-2`}
                >
                  Explore our LMS platform →
                </a>
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
