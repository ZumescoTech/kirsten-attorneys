import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Resources', to: '/resources' },
  { label: 'FAQs',      to: '/faqs' },
  { label: 'Contact',   to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-semibold text-white block mb-1 tracking-wide">André Kirsten</span>
            <span className="font-mono text-sm uppercase tracking-[-0.03em] text-white opacity-50 block mb-5">Attorneys</span>
            <p className="font-sans text-sm text-white opacity-60 leading-relaxed">
              Criminal Defence Specialist<br />
              Bellville, Cape Town, South Africa
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-white opacity-50 mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="font-sans text-sm text-white opacity-70 hover:opacity-100 transition-opacity duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-white opacity-50 mb-5">Contact</p>
            <div className="space-y-4">
              <div>
                <p className="font-sans text-xs text-white opacity-50 uppercase tracking-wider mb-1">Emergency 24/7</p>
                <a href="tel:0726045324" className="font-display text-xl font-semibold text-white hover:opacity-80 transition-opacity flex items-center gap-2">
                  <Phone size={16} />
                  072 604 5324
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-white opacity-50 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-sm text-white opacity-60 leading-relaxed">
                  25 Nelson Street, Oak Glen<br />
                  Bellville, Cape Town, 7530
                </p>
              </div>
              <p className="font-sans text-sm text-white opacity-50">
                English · Afrikaans · isiXhosa
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white border-opacity-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white opacity-40">
            © 2026 André Kirsten Attorneys. All Rights Reserved.
          </p>
          <p className="font-sans text-xs text-white opacity-40">
            Bellville, Cape Town, South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
