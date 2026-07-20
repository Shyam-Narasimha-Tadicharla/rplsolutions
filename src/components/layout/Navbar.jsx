import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import ShinyButton from '@/components/ui/ShinyButton'
import logo from '@/assets/images/newlogo.png'

const educationalLinks = [
  { label: 'LMS Platform',    href: '/services/educational-solutions' },
  { label: 'Online Classes',  href: '/services/online-classes' },
]

const softwareLinks = [
  { label: 'Software Development',    href: '/services/software-development' },
  { label: 'Digital & Cloud Solutions', href: '/services/digital-cloud-solutions' },
  { label: 'IT Consulting',           href: '/services/it-consulting' },
  { label: 'QA / Testing Services',  href: '/services/qa-testing' },
  { label: 'Cloud Services',         href: '/services/cloud-services' },
  { label: 'Digital Marketing',      href: '/services/digital-marketing' },
]

const financialLinks = [
  { label: 'Audit & Assurance',       href: '/services/audit-assurance' },
  { label: 'GST Services',            href: '/services/gst-services' },
  { label: 'Income Tax & Advisory',   href: '/services/income-tax' },
  { label: 'Startup & Registrations', href: '/services/startup-registrations' },
  { label: 'Business Support',        href: '/services/business-support' },
  { label: 'Project Finance',         href: '/services/project-finance' },
  { label: 'PF & ESI',               href: '/services/pf-esi' },
  { label: 'PT & TDS Returns',        href: '/services/pt-tds-returns' },
  { label: 'Valuations',              href: '/services/valuations' },
]

// ── Desktop Services mega-dropdown (three-column grouped) ────────────────────
function ServicesMegaMenu({ onClose }) {
  return (
    <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl border border-gray-100 shadow-2xl z-50 overflow-hidden w-[620px]">
      {/* Software + Financial side by side */}
      <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100">
        {/* Software Solutions group */}
        <div className="p-4">
          <Link
            to="/services/software-solutions"
            onClick={onClose}
            className="text-xs font-sora font-bold text-purple-700 uppercase tracking-widest px-2 mb-2 block hover:text-purple-900 transition-colors"
          >
            Software Solutions ↗
          </Link>
          {softwareLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={onClose}
              className="block px-3 py-1.5 text-sm text-muted hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        {/* Financial Services group */}
        <div className="p-4">
          <Link
            to="/services/financial-services"
            onClick={onClose}
            className="text-xs font-sora font-bold text-emerald-700 uppercase tracking-widest px-2 mb-2 block hover:text-emerald-900 transition-colors"
          >
            Financial Services ↗
          </Link>
          {financialLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={onClose}
              className="block px-3 py-1.5 text-sm text-muted hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Educational Solutions */}
      <div className="p-4 border-t border-gray-100">
        <Link
          to="/services/educational-solutions"
          onClick={onClose}
          className="text-xs font-sora font-bold text-sky-700 uppercase tracking-widest px-2 mb-2 block hover:text-sky-900 transition-colors"
        >
          Educational Solutions ↗
        </Link>
        <div className="flex gap-2">
          {educationalLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={onClose}
              className="block px-3 py-1.5 text-sm text-muted hover:text-sky-700 hover:bg-sky-50 rounded-lg transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Desktop wrapper with open/close ──────────────────────────────────────────
function ServicesDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-sora font-medium text-text hover:text-primary transition-colors py-1"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Services
        <ChevronDown size={14} className={cn('transition-transform duration-200', open && 'rotate-180')} />
      </button>
      {open && <ServicesMegaMenu onClose={() => setOpen(false)} />}
    </div>
  )
}

// ── Mobile services accordion ─────────────────────────────────────────────────
function MobileServicesAccordion({ onClose }) {
  const [topOpen, setTopOpen] = useState(false)
  const [swOpen, setSwOpen]   = useState(false)
  const [finOpen, setFinOpen] = useState(false)
  const [eduOpen, setEduOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setTopOpen(!topOpen)}
        className="flex items-center justify-between w-full py-2 text-sm font-sora font-medium text-primary"
      >
        Services
        <ChevronDown size={14} className={cn('transition-transform duration-200', topOpen && 'rotate-180')} />
      </button>

      {topOpen && (
        <div className="pl-4 pb-2 space-y-1">
          {/* Software Solutions sub-group */}
          <div className="pt-1">
            <button
              onClick={() => setSwOpen(!swOpen)}
              className="flex items-center justify-between w-full py-1.5 text-sm font-sora font-semibold text-purple-700"
            >
              Software Solutions
              <ChevronDown size={12} className={cn('transition-transform duration-200', swOpen && 'rotate-180')} />
            </button>
            {swOpen && (
              <div className="pl-3 space-y-1">
                <Link to="/services/software-solutions" className="block py-1.5 text-xs text-purple-600 font-semibold hover:text-purple-900 transition-colors" onClick={onClose}>
                  Overview →
                </Link>
                {softwareLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="block py-1.5 text-sm text-muted hover:text-purple-700 transition-colors" onClick={onClose}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Financial Services sub-group */}
          <div className="pt-1 border-t border-gray-100">
            <button
              onClick={() => setFinOpen(!finOpen)}
              className="flex items-center justify-between w-full py-1.5 text-sm font-sora font-semibold text-emerald-700"
            >
              Financial Services
              <ChevronDown size={12} className={cn('transition-transform duration-200', finOpen && 'rotate-180')} />
            </button>
            {finOpen && (
              <div className="pl-3 space-y-1">
                <Link to="/services/financial-services" className="block py-1.5 text-xs text-emerald-600 font-semibold hover:text-emerald-900 transition-colors" onClick={onClose}>
                  Overview →
                </Link>
                {financialLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="block py-1.5 text-sm text-muted hover:text-emerald-700 transition-colors" onClick={onClose}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Educational Solutions */}
          <div className="pt-1 border-t border-gray-100">
            <button
              onClick={() => setEduOpen(!eduOpen)}
              className="flex items-center justify-between w-full py-1.5 text-sm font-sora font-semibold text-sky-700"
            >
              Educational Solutions
              <ChevronDown size={12} className={cn('transition-transform duration-200', eduOpen && 'rotate-180')} />
            </button>
            {eduOpen && (
              <div className="pl-3 space-y-1">
                <Link to="/services/educational-solutions" className="block py-1.5 text-xs text-sky-600 font-semibold hover:text-sky-900 transition-colors" onClick={onClose}>
                  Overview →
                </Link>
                {educationalLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="block py-1.5 text-sm text-muted hover:text-sky-700 transition-colors" onClick={onClose}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  )
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    cn(
      'text-sm font-sora font-medium transition-colors',
      isActive ? 'text-primary' : 'text-text hover:text-primary'
    )

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      )}
    >
      <nav
        className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="RPL Solutions" className="h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <ServicesDropdown />
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ShinyButton href="/contact" label="Get a Quote" className="text-xs px-5 py-2" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
          <NavLink to="/" className="block py-2 text-sm font-sora font-medium text-primary" onClick={() => setMobileOpen(false)} end>Home</NavLink>
          <NavLink to="/about" className="block py-2 text-sm font-sora font-medium text-text" onClick={() => setMobileOpen(false)}>About</NavLink>
          <MobileServicesAccordion onClose={() => setMobileOpen(false)} />
          <NavLink to="/projects" className="block py-2 text-sm font-sora font-medium text-text" onClick={() => setMobileOpen(false)}>Projects</NavLink>
          <NavLink to="/careers" className="block py-2 text-sm font-sora font-medium text-text" onClick={() => setMobileOpen(false)}>Careers</NavLink>
          <NavLink to="/contact" className="block py-2 text-sm font-sora font-medium text-text" onClick={() => setMobileOpen(false)}>Contact</NavLink>
          <div className="pt-2">
            <ShinyButton href="/contact" label="Get a Quote" className="w-full justify-center text-xs" />
          </div>
        </div>
      )}
    </header>
  )
}
