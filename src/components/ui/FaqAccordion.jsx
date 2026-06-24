import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FaqAccordion({ items = [] }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="bg-white">
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-400"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-sora font-semibold text-gray-900 text-sm md:text-base pr-4">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                'flex-shrink-0 text-gray-500 transition-transform duration-300',
                open === i && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              open === i ? 'max-h-96' : 'max-h-0'
            )}
          >
            <p className="px-6 pb-5 text-gray-700 text-sm leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
