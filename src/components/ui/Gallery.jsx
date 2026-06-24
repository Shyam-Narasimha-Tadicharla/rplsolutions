import ShinyButton from './ShinyButton'

export default function Gallery({ items = [], cols = 3 }) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <div className={`grid grid-cols-1 gap-6 ${gridCols[cols] || gridCols[3]}`}>
      {items.map((item, i) => (
        <article
          key={i}
          className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          {/* Fixed-height image box - contain so nothing is cropped or distorted */}
          <div className="relative bg-[#0D1B2A] h-52 flex items-center justify-center overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {item.tag && (
              <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-sora font-semibold px-2.5 py-1 rounded-full">
                {item.tag}
              </span>
            )}
          </div>

          <div className="p-5">
            <h3 className="font-sora font-semibold text-base text-primary mb-2 leading-snug">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-muted text-sm leading-relaxed mb-4">{item.description}</p>
            )}
            {item.ctaHref && item.ctaLabel && (
              <ShinyButton href={item.ctaHref} label={item.ctaLabel} className="text-xs px-4 py-2" />
            )}
            {item.department && (
              <div className="flex flex-wrap gap-2 mt-3 text-xs text-muted">
                <span className="bg-surface px-2 py-1 rounded">{item.department}</span>
                <span className="bg-surface px-2 py-1 rounded">{item.location}</span>
                <span className="bg-surface px-2 py-1 rounded">{item.type}</span>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
