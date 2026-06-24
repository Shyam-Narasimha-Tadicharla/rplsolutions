export default function ContactHero() {
  return (
    <section
      className="py-20 text-center"
      style={{ background: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 50%, #bfdbfe 100%)' }}
      aria-label="Contact hero"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-2xl">
        <p className="text-yellow-700 text-xs font-sora font-semibold tracking-widest uppercase mb-4">
          Reach Out
        </p>
        <h1 className="font-sora font-bold text-4xl md:text-5xl text-gray-900 mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Have a project in mind? Want to learn more about our services? We'd love to hear from you.
          Our team responds within 1–2 business days.
        </p>
      </div>
    </section>
  )
}
