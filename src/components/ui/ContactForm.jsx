import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Linkedin, Twitter, Instagram, CheckCircle2, Loader2 } from 'lucide-react'
import ShinyButton from './ShinyButton'
import { contact } from '@/data/content'
import logo from '@/assets/images/newlogo.png'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function ContactForm() {
  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending]     = useState(false)
  const [error, setError]         = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (error) setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setSending(true)
    setError('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
          to_email:     'info@rpl-solutions.com',
        },
        EMAILJS_PUBLIC_KEY,
      )
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setError('Something went wrong. Please email us directly at info@rpl-solutions.com')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
      {/* Left dark panel */}
      <div className="bg-dark p-10 flex flex-col justify-between">
        <div>
          <img src={logo} alt="RPL Solutions" className="h-10 w-auto" />
          <p className="text-white/60 text-sm mt-1 leading-relaxed">
            RPL Solutions, 8th Floor,<br />
            Manjeera Majestic Commercial,<br />
            Opp. JNTU, Hyderabad.
          </p>
          <div className="mt-8 space-y-4">
            <div>
              <p className="text-white/40 text-xs font-sora uppercase tracking-widest mb-1">Business</p>
              <p className="text-white/80 text-sm">{contact.businessPhone}</p>
              <a href={`mailto:${contact.businessEmail}`} className="text-accent text-sm hover:text-white transition-colors">
                {contact.businessEmail}
              </a>
            </div>
            <div>
              <p className="text-white/40 text-xs font-sora uppercase tracking-widest mb-1">Careers</p>
              <p className="text-white/80 text-sm">{contact.careersPhone}</p>
              <a href={`mailto:${contact.careersEmail}`} className="text-accent text-sm hover:text-white transition-colors">
                {contact.careersEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <a href={contact.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"
            className="text-white/50 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={contact.social.twitter} aria-label="Twitter / X" target="_blank" rel="noreferrer"
            className="text-white/50 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href={contact.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"
            className="text-white/50 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Right form panel */}
      <div className="bg-white p-10">
        {submitted ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
            <CheckCircle2 size={48} className="text-accent" />
            <h3 className="font-sora font-bold text-xl text-primary">Message Sent!</h3>
            <p className="text-muted text-sm max-w-xs">
              Thank you for reaching out. We'll get back to you within 1–2 business days.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-accent text-sm font-medium hover:underline mt-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="font-sora font-bold text-2xl text-primary mb-2">Get In Touch</h2>
            <p className="text-muted text-sm mb-8">
              Fill in the form and our team will respond within 1–2 business days.
            </p>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-sora font-semibold text-primary uppercase tracking-wide mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-sora font-semibold text-primary uppercase tracking-wide mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-sora font-semibold text-primary uppercase tracking-wide mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project…"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition resize-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-sora font-semibold px-7 py-3 rounded-lg transition-colors duration-200 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
