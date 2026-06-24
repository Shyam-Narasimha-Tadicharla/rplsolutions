import { Link } from 'react-router-dom'
import ShinyButton from '@/components/ui/ShinyButton'
import SectionHeading from '@/components/ui/SectionHeading'
import FeatureGrid from '@/components/ui/FeatureGrid'
import FaqAccordion from '@/components/ui/FaqAccordion'
import heroImg from '@/assets/images/businesssupport.png'

export default function FinancialServicesPage({ service, services }) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 55%, #064e3b 100%)' }}
        aria-label="Financial Services hero"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-400/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-300 text-xs font-sora font-semibold tracking-widest uppercase mb-4">
                RPL Solutions - Financial Division
              </p>
              <h1 className="font-sora font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
                {service.name}
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">{service.tagline}</p>
              <ShinyButton href="/contact" label="Get in Touch" />
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="Financial Services"
                className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3] border border-white/10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20" aria-labelledby="fin-desc-heading">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <p className="text-emerald-700 text-xs font-sora font-semibold tracking-widest uppercase mb-3">Overview</p>
          <h2 id="fin-desc-heading" className="font-sora font-bold text-2xl md:text-3xl text-gray-900 mb-6">
            About This Service
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* Sub-services grid */}
      <section className="bg-white py-20" aria-labelledby="fin-sub-heading">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading
            label="What We Offer"
            title="Financial Service Areas"
            subtitle="Click any area below to learn more."
            center
            dark
            labelColor="text-emerald-600"
            id="fin-sub-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {service.subServices.map((sub, i) => (
              <Link
                key={sub.id}
                to={`/services/${sub.id}`}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 bg-white hover:bg-emerald-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-xs font-sora font-bold text-emerald-600 uppercase tracking-widest mb-2 block">
                  0{i + 1}
                </span>
                <h3 className="font-sora font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-800 transition-colors">
                  {sub.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{sub.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="bg-white py-20" aria-labelledby="fin-caps-heading">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading
            label="Capabilities"
            title="Our Financial Expertise"
            subtitle="A full spectrum of financial, tax, and compliance services under one roof."
            center
            dark
            labelColor="text-emerald-600"
            id="fin-caps-heading"
          />
          <FeatureGrid items={service.capabilities} cols={3} colored />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 border-t border-gray-100" aria-labelledby="fin-faq-heading">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <SectionHeading
            label="FAQ"
            title="Financial Services - Common Questions"
            center
            dark
            labelColor="text-emerald-600"
            id="fin-faq-heading"
          />
          <FaqAccordion items={service.faq} />
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-12 border-t border-gray-100" aria-label="Other services">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-xs font-sora font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Other Services
          </p>
          <div className="flex flex-wrap gap-3">
            {services
              .filter((s) => s.id !== 'financial-services' && !s.isCategoryLanding)
              .slice(0, 10)
              .map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="text-sm font-sora font-medium border border-gray-200 rounded-lg px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
