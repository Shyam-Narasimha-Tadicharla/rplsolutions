import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={cn(
        'fixed bottom-8 right-8 z-50',
        'w-11 h-11 rounded-full',
        'bg-white border-2 border-gray-900 text-gray-900',
        'flex items-center justify-center',
        'shadow-lg hover:shadow-xl hover:-translate-y-1',
        'transition-all duration-300',
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  )
}
