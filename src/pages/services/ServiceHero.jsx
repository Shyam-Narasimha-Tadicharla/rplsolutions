import ShinyButton from '@/components/ui/ShinyButton'

import imgSoftware from '@/assets/images/software.png'
import imgCloud from '@/assets/images/cloud.png'
import imgCloudSol from '@/assets/images/cloudsol.png'
import imgITConsul from '@/assets/images/itconsul.png'
import imgQATesting from '@/assets/images/qatesting.png'
import imgDigitalMarketing from '@/assets/images/digitalmarketing.png'
import imgAudit from '@/assets/images/audit.png'
import imgGST from '@/assets/images/gst.png'
import imgTax from '@/assets/images/tax.png'
import imgStartup from '@/assets/images/startup.png'
import imgBusinessSupport from '@/assets/images/businesssupport.png'
import imgProjectFinancing from '@/assets/images/projectfinancing.png'
import imgRERA from '@/assets/images/rera.png'
import imgValuation from '@/assets/images/valuation.png'
import imgEducation from '@/assets/images/educationalservice.png'

const PLACEHOLDER = 'https://placehold.co/800x500/1B3A5C/FFFFFF?text=RPL+Solutions'

const SERVICE_IMAGES = {
  // Software
  'software-development':    imgSoftware,
  'digital-cloud-solutions': imgCloudSol,
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
  'legal-secretarial':     imgAudit,
  'rera-services':           imgRERA,
  'valuations':              imgValuation,
  'educational-solutions':   imgEducation,
  'online-classes':          imgEducation,
}

export default function ServiceHero({ service }) {
  const imgSrc = SERVICE_IMAGES[service.id] || PLACEHOLDER

  return (
    <section
      className="relative min-h-[60vh] flex items-center overflow-hidden"
      aria-label={`${service.name} hero`}
    >
      {/* Background image */}
      <img
        src={imgSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-2xl">
          <p className="text-white/60 text-xs font-sora font-semibold tracking-widest uppercase mb-4">
            RPL Solutions Services
          </p>
          <h1 className="font-sora font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            {service.name}
          </h1>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">{service.tagline}</p>
          <ShinyButton href="/contact" label="Request a Quote" />
        </div>
      </div>
    </section>
  )
}
