import ShinyButton from '@/components/ui/ShinyButton'

export default function CareersStrip() {
  return (
    <section className="bg-white py-16 border-t border-gray-100" aria-label="Careers call to action">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-gray-500 text-xs font-sora font-semibold tracking-widest uppercase mb-3">
              Join Our Team
            </p>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Join Our Growing Team
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We're looking for ambitious engineers and geospatial experts ready to work on globally significant projects.
            </p>
          </div>
          <div className="shrink-0">
            <ShinyButton href="/careers" label="See Open Roles" />
          </div>
        </div>
      </div>
    </section>
  )
}
