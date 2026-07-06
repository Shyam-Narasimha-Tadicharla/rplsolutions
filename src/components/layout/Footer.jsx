import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Instagram } from 'lucide-react'
import { contact } from '@/data/content'
import logo from '@/assets/images/rpl-logo-design.webp'

const FOOTER_SERVICES = [
  { name: 'Software Solutions',     href: '/services/software-solutions'     },
  { name: 'Financial Services',     href: '/services/financial-services'     },
  { name: 'Educational Solutions',  href: '/services/educational-solutions'  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white bg-slate-900" aria-label="Site footer">
      <div className="container mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Col 1 - Logo, address, social */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="RPL Solutions" className="h-9 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              RPL Solutions, 8th Floor,<br />
              Manjeera Majestic Commercial,<br />
              Opp. JNTU, Hyderabad.<br />
              Software · Education · Finance
            </p>
            <div className="flex gap-4">
              <a href={contact.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"
                className="text-white/50 hover:text-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={contact.social.twitter} aria-label="Twitter / X" target="_blank" rel="noreferrer"
                className="text-white/50 hover:text-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href={contact.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"
                className="text-white/50 hover:text-accent transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h3 className="font-sora font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <h3 className="font-sora font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Careers</p>
                <p className="text-white/70 text-sm">{contact.careersPhone}</p>
                <a href={`mailto:${contact.careersEmail}`}
                  className="text-accent text-sm hover:text-white transition-colors">
                  {contact.careersEmail}
                </a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Business</p>
                <p className="text-white/70 text-sm">{contact.businessPhone}</p>
                <a href={`mailto:${contact.businessEmail}`}
                  className="text-accent text-sm hover:text-white transition-colors">
                  {contact.businessEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {currentYear} RPL Solutions. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
