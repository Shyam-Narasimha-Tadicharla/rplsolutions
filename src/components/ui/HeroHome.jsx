import ShinyButton from './ShinyButton'
import imgHero from '@/assets/images/cloud.jpeg'

export default function HeroHome({ headline, subheading, ctaLabel, ctaHref }) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <img
        src={imgHero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-2xl">
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
      </div>
    </section>
  )
}
