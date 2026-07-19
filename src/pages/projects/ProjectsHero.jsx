import imgProjects from '@/assets/images/projects.jpeg'

export default function ProjectsHero() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #312e81 0%, #4338ca 60%, #1e1b6e 100%)' }}
      aria-label="Projects hero"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-400/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-indigo-300 text-xs font-sora font-semibold tracking-widest uppercase mb-4">
              Our Portfolio
            </p>
            <h1 className="font-sora font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
              Our Projects
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Delivering software products, LMS platforms, and financial services for clients across India and beyond.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-indigo-400/10 blur-xl transform scale-105" />
            <img
              src={imgProjects}
              alt="RPL Solutions Projects"
              className="relative z-10 max-h-72 mx-auto object-contain rounded-2xl shadow-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
