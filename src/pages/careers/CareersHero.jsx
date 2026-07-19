import ShinyButton from '@/components/ui/ShinyButton'
import imgCareers from '@/assets/images/career.png'

export default function CareersHero() {
  return (
    <section className="bg-emerald-50 py-20 md:py-28" aria-label="Careers Hero">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl transform rotate-2" />
            <img
              src={imgCareers}
              alt="RPL Solutions team at work"
              className="relative z-10 w-full rounded-2xl object-cover shadow-xl aspect-[4/3]"
              loading="lazy"
            />
          </div>
          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="text-emerald-700 text-xs font-sora font-semibold tracking-widest uppercase mb-4">
              Join Our Team
            </p>
            <h1 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
              Build Your Career in Software & Technology
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              We're looking for driven individuals who want to build real products, solve meaningful problems, and grow fast - in software development, education technology, financial services, and beyond.
            </p>
            <ShinyButton href="#opportunities" label="See Open Roles" />
          </div>
        </div>
      </div>
    </section>
  )
}
