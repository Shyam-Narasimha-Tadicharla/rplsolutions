import ShinyButton from './ShinyButton'
import imgHero from '@/assets/images/software.png'

export default function HeroHome({ headline, subheading, ctaLabel, ctaHref }) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3b1f6e 0%, #5b2d9e 50%, #2e1b5c 100%)' }}
      aria-label="Hero section"
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-400/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="max-w-xl">
            <p className="text-purple-300 text-xs font-sora font-semibold tracking-widest uppercase mb-6">
              Precision · Quality · Innovation
            </p>
            <h1 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              {headline}
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
              {subheading}
            </p>
            <div className="flex flex-wrap gap-4">
              <ShinyButton href={ctaHref} label={ctaLabel} />
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-white/80 font-sora text-sm font-medium border border-white/20 px-6 py-2.5 rounded-md hover:border-white/50 hover:text-white transition-all duration-300"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden md:block relative">
            <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl transform scale-105" />
            <img
              src={imgHero}
              alt="RPL Solutions software development"
              className="relative z-10 w-full rounded-2xl object-cover shadow-2xl aspect-[4/3] border border-white/10"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
