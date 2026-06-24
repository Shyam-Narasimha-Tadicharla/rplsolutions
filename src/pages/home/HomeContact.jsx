import ContactForm from '@/components/ui/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'

export default function HomeContact() {
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 40%, #bfdbfe 100%)' }}
      aria-labelledby="home-contact-heading"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <SectionHeading
          label="Contact Us"
          title="Let's Work Together"
          subtitle="Have a project in mind? Reach out and our team will get back to you within 1–2 business days."
          center
          dark
          labelColor="text-yellow-700"
        />
        <ContactForm />
      </div>
    </section>
  )
}
