import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, Phone, Clock } from 'lucide-react'
import useScrolled from '../../hooks/useScrolled'
import MobileMenu from './MobileMenu'

const links = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Resources', to: '/resources' },
  { label: 'FAQs',      to: '/faqs' },
  { label: 'Contact',   to: '/contact' },
]

export default function Navbar() {
  const scrolled = useScrolled(60)
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100]" role="banner">
        {/* Utility bar */}
        <div className="bg-navy hidden sm:block">
          <div className="max-w-content mx-auto px-6 flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <a href="tel:0726045324" className="flex items-center gap-1.5 font-sans text-xs text-white opacity-90 hover:opacity-100 transition-opacity">
                <Phone size={11} />
                <span>072 604 5324 — 24/7 Emergency</span>
              </a>
              <span className="flex items-center gap-1.5 font-sans text-xs text-white opacity-60">
                <Clock size={11} />
                <span>Mon–Fri 08:00–17:00 · Sat 09:00–13:00</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              {['English', 'Afrikaans', 'isiXhosa'].map((lang, i) => (
                <span key={lang} className="flex items-center gap-4">
                  <a href="#" className="font-sans text-xs text-white opacity-60 hover:opacity-100 transition-opacity">{lang}</a>
                  {i < 2 && <span className="text-white opacity-20">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main nav */}
        <motion.div
          className="bg-white"
          style={{
            boxShadow: scrolled ? '0 0 15px -4px rgba(20,20,20,0.15)' : 'none',
            borderBottom: scrolled ? 'none' : '1px solid #efefef',
            transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="max-w-content mx-auto px-6 flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link to="/" aria-label="André Kirsten Attorneys — Home" className="flex-shrink-0">
              <span className="font-display text-xl font-medium text-navy leading-none block tracking-[-0.03em]">
                André Kirsten
              </span>
              <span className="font-mono text-sm uppercase tracking-[-0.03em] text-text-muted block mt-0.5">
                Attorneys
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {links.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link site-nav__link transition-colors duration-200 pb-0.5 ${
                    pathname === to ? 'text-navy active' : 'text-text-muted hover:text-navy'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:0726045324"
                className="btn-navy site-nav__cta hidden lg:inline-flex items-center gap-2"
                style={{ padding: '10px 20px' }}
              >
                Call 24/7
              </a>
              <button
                className="md:hidden text-text-muted hover:text-navy transition-colors p-2 -mr-2"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
