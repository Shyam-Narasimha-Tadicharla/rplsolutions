import ContactForm from '@/components/ui/ContactForm'

export default function ContactCard() {
  return (
    <section
      className="py-16"
      style={{ background: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 40%, #bfdbfe 100%)' }}
      aria-label="Contact form"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <ContactForm />
      </div>
    </section>
  )
}
