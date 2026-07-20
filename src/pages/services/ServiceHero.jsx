import ShinyButton from '@/components/ui/ShinyButton'

import imgSoftware from '@/assets/images/softdev.png'
import imgCloud from '@/assets/images/cloud.png'
import imgITConsul from '@/assets/images/itconsul.png'
import imgQATesting from '@/assets/images/qatesting.png'
import imgDigitalMarketing from '@/assets/images/digitalmarketing.png'
import imgAudit from '@/assets/images/audit.png'
import imgGST from '@/assets/images/gst.png'
import imgTax from '@/assets/images/tax.png'
import imgStartup from '@/assets/images/startup.png'
import imgBusinessSupport from '@/assets/images/businesssupport.png'
import imgProjectFinancing from '@/assets/images/projectfinancing.png'
import imgValuation from '@/assets/images/valuation.png'
import imgPFESI from '@/assets/images/pfesi.png'
import imgTDS from '@/assets/images/tds.png'
import imgEducation from '@/assets/images/educationalservice.png'

const PLACEHOLDER = 'https://placehold.co/800x500/1B3A5C/FFFFFF?text=RPL+Solutions'

const SERVICE_IMAGES = {
  // Software
  'software-development':    imgSoftware,
  'digital-cloud-solutions': imgCloud,
  'it-consulting':           imgITConsul,
  'qa-testing':              imgQATesting,
  'cloud-services':          imgCloud,
  'digital-marketing':       imgDigitalMarketing,
  // Financial
  'audit-assurance':       imgAudit,
  'gst-services':          imgGST,
  'income-tax':            imgTax,
  'startup-registrations': imgStartup,
  'business-support':      imgBusinessSupport,
  'project-finance':       imgProjectFinancing,
  'pf-esi':               imgPFESI,
  'pt-tds-returns':        imgTDS,
  'valuations':            imgValuation,
  'educational-solutions': imgEducation,
  'online-classes':        imgEducation,
}

const EYEBROW_COLOR = {
  financial:  'text-emerald-600',
  software:   'text-purple-600',
  education:  'text-sky-600',
}

const HERO_BG = {
  financial: 'bg-emerald-50',
  software:  'bg-purple-50',
  education: 'bg-sky-50',
}

export default function ServiceHero({ service }) {
  const imgSrc = SERVICE_IMAGES[service.id] || PLACEHOLDER
  const eyebrowColor = EYEBROW_COLOR[service.category] || 'text-gray-500'
  const heroBg = HERO_BG[service.category] || 'bg-orange-50'

  return (
    <section
      className={`relative ${heroBg} py-24 overflow-hidden border-b border-gray-100`}
      aria-label={`${service.name} hero`}
    >
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className={`${eyebrowColor} text-xs font-sora font-semibold tracking-widest uppercase mb-4`}>
              RPL Solutions Services
            </p>
            <h1 className="font-sora font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
              {service.name}
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.tagline}</p>
            <ShinyButton href="/contact" label="Request a Quote" />
          </div>
          <div className="relative">
            <img
              src={imgSrc}
              alt={service.name}
              className="w-full rounded-2xl shadow-xl object-contain aspect-[4/3] bg-gray-50"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
