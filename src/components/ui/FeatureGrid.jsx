import { cn } from '@/lib/utils'

// Rotating card color palette - bg + icon bg + icon text combinations
const CARD_COLORS = [
  { card: 'bg-blue-50   border-blue-100',  icon: 'bg-blue-600   text-white', title: 'text-blue-900'   },
  { card: 'bg-teal-50   border-teal-100',  icon: 'bg-teal-600   text-white', title: 'text-teal-900'   },
  { card: 'bg-indigo-50 border-indigo-100',icon: 'bg-indigo-600 text-white', title: 'text-indigo-900' },
  { card: 'bg-amber-50  border-amber-100', icon: 'bg-amber-500  text-white', title: 'text-amber-900'  },
  { card: 'bg-rose-50   border-rose-100',  icon: 'bg-rose-600   text-white', title: 'text-rose-900'   },
  { card: 'bg-emerald-50 border-emerald-100', icon: 'bg-emerald-600 text-white', title: 'text-emerald-900' },
  { card: 'bg-purple-50 border-purple-100',icon: 'bg-purple-600 text-white', title: 'text-purple-900' },
  { card: 'bg-cyan-50   border-cyan-100',  icon: 'bg-cyan-600   text-white', title: 'text-cyan-900'   },
]

export default function FeatureGrid({ items = [], cols = 4, colored = true }) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={cn('grid grid-cols-1 gap-6', gridCols[cols] || gridCols[4])}>
      {items.map((item, i) => {
        const Icon = item.icon
        const palette = colored ? CARD_COLORS[i % CARD_COLORS.length] : null

        return (
          <div
            key={i}
            className={cn(
              'group relative rounded-2xl p-6 border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300',
              colored
                ? `${palette.card}`
                : 'bg-white border-gray-100'
            )}
          >
            <div className={cn(
              'mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl transition-colors duration-300',
              colored
                ? palette.icon
                : 'bg-primary/8 text-primary group-hover:bg-accent group-hover:text-white'
            )}>
              {Icon && <Icon size={22} />}
            </div>
            <h3 className={cn(
              'font-sora font-semibold text-base mb-2',
              colored ? palette.title : 'text-primary'
            )}>
              {item.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}
