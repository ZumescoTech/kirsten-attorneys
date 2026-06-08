import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const links = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Resources', to: '/resources' },
  { label: 'FAQs',      to: '/faqs' },
  { label: 'Contact',   to: '/contact' },
]

export default function MobileMenu({ isOpen, onClose }) {
  const { pathname } = useLocation()

  useEffect(() => { onClose() }, [pathname])
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[200] bg-white flex flex-col"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-border-subtle">
            <span className="font-display text-lg font-semibold text-navy">André Kirsten Attorneys</span>
            <button onClick={onClose} aria-label="Close menu" className="text-text-muted hover:text-navy transition-colors p-2">
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col justify-center px-8">
            <motion.ul
              className="space-y-1"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
            >
              {links.map(({ label, to }) => (
                <motion.li
                  key={to}
                  variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } } }}
                >
                  <Link
                    to={to}
                    className={`block font-display text-3xl font-semibold py-3 border-b border-border-subtle transition-colors ${
                      pathname === to ? 'text-navy' : 'text-text-primary hover:text-navy'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
