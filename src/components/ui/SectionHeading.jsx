import { cn } from '@/lib/utils'

export default function SectionHeading({ label, title, subtitle, center = false, light = false, dark = false, labelColor }) {
  return (
    <div className={cn('mb-10', center && 'text-center')}>
      {label && (
        <p className={cn(
          'text-xs font-sora font-semibold tracking-widest uppercase mb-3',
          labelColor ? labelColor : light ? 'text-accent/80' : 'text-accent'
        )}>
          {label}
        </p>
      )}
      <h2 className={cn(
        'font-sora font-bold text-3xl md:text-4xl leading-tight',
        light ? 'text-white' : dark ? 'text-gray-900' : 'text-primary'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-4 text-base md:text-lg max-w-2xl leading-relaxed',
          center && 'mx-auto',
          light ? 'text-white/70' : dark ? 'text-gray-700' : 'text-muted'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
