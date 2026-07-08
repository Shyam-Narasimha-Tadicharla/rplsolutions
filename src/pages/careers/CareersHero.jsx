import ShinyButton from '@/components/ui/ShinyButton'
import imgCareers from '@/assets/images/projectfinancing.png'

export default function CareersHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden" aria-label="Careers Hero">
      <img src={imgCareers} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-2xl">
          <p className="text-white/60 text-xs font-sora font-semibold tracking-widest uppercase mb-4">
            Join Our Team
          </p>
          <h1 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Build Your Career in Software & Technology
          </h1>
          <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8">
            We're looking for driven individuals who want to build real products, solve meaningful problems, and grow fast - in software development, education technology, financial services, and beyond.
          </p>
          <ShinyButton href="#opportunities" label="See Open Roles" />
        </div>
      </div>
    </section>
  )
}
