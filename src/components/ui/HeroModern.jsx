import ShinyButton from './ShinyButton'
import { cn } from '@/lib/utils'

export default function HeroModern({
  headline,
  body,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  eyebrow = 'About Us',
  bgColor = 'bg-surface',
  textDark = true,
  textBlack = false,
}) {
  const eyebrowClass  = textBlack ? 'text-gray-500'  : textDark ? 'text-accent'       : 'text-white/70'
  const headlineClass = textBlack ? 'text-gray-900'  : textDark ? 'text-primary'      : 'text-white'
  const bodyClass     = textBlack ? 'text-gray-700'  : textDark ? 'text-muted'        : 'text-white/80'
  const decorClass    = textBlack ? 'bg-gradient-to-br from-gray-100 to-gray-200'
                                  : textDark ? 'bg-gradient-to-br from-primary/10 to-accent/10'
                                  : 'bg-white/10'

  return (
    <section className={cn(bgColor, 'py-20 md:py-28')} aria-label="Hero">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 relative">
            <div className={cn('absolute inset-0 rounded-2xl transform rotate-2', decorClass)} />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="relative z-10 w-full rounded-2xl object-cover shadow-xl aspect-[4/3]"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className={cn('text-xs font-sora font-semibold tracking-widest uppercase mb-4', eyebrowClass)}>
              {eyebrow}
            </p>
            <h1 className={cn('font-sora font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6', headlineClass)}>
              {headline}
            </h1>
            <p className={cn('text-base md:text-lg leading-relaxed mb-8', bodyClass)}>
              {body}
            </p>
            {ctaLabel && ctaHref && <ShinyButton href={ctaHref} label={ctaLabel} />}
          </div>
        </div>
      </div>
    </section>
  )
}
