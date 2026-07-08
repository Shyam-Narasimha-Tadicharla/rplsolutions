import imgProjects from '@/assets/images/cloudsol.png'

export default function ProjectsHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center overflow-hidden"
      aria-label="Projects hero"
    >
      <img src={imgProjects} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-2xl">
          <p className="text-white/60 text-xs font-sora font-semibold tracking-widest uppercase mb-4">
            Our Portfolio
          </p>
          <h1 className="font-sora font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Our Projects
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            Delivering software products, LMS platforms, and financial services for clients across India and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}
