import { cn } from '@/lib/utils'

export default function ShinyButton({ href, label, onClick, className, children }) {
  const text = label || children

  const classes = cn(
    'relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-2.5',
    'bg-white text-gray-900 font-sora font-semibold text-sm tracking-wide',
    'border-2 border-gray-900',
    'transition-all duration-300',
    'before:absolute before:inset-0 before:-translate-x-full before:skew-x-[-20deg]',
    'before:bg-gradient-to-r before:from-transparent before:via-black/5 before:to-transparent',
    'hover:before:translate-x-full before:transition-transform before:duration-700',
    'hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900',
    className
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {text}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} type="button">
      {text}
    </button>
  )
}
