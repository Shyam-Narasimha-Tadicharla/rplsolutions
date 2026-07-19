export default function StatStrip({ items, variant = 'red' }) {
  const repeated = [...items, ...items]

  const styles = {
    white: {
      wrapper: 'bg-white border-y border-gray-100 overflow-hidden py-5',
      value:   'text-primary font-bold text-lg',
      label:   'text-gray-700 text-sm font-medium',
      dot:     'text-gray-300',
    },
    red: {
      wrapper: 'overflow-hidden py-4 bg-slate-900',
      value:   'text-white font-bold text-lg',
      label:   'text-white/60 text-sm font-medium',
      dot:     'text-white/20',
    },
  }

  const s = styles[variant] || styles.red

  return (
    <div
      className={s.wrapper}
      aria-label="Key statistics"
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 font-sora px-8 shrink-0">
            <span className={s.value}>{item.value}</span>
            <span className={s.label}>{item.label}</span>
            <span className={`ml-4 select-none ${s.dot}`}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
