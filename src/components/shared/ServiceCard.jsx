import { motion, useReducedMotion } from 'framer-motion'
import { KeyRound, Car, Gavel, FileWarning, Pill, ShieldAlert, FileMinus, Briefcase, ScrollText, ScanSearch } from 'lucide-react'

const iconMap = { KeyRound, Car, Gavel, FileWarning, Pill, ShieldAlert, FileMinus, Briefcase, ScrollText, ScanSearch }

export default function ServiceCard({ id, title, body, icon }) {
  const prefersReduced = useReducedMotion()
  const Icon = iconMap[icon] || Gavel
  return (
    <div className="card-hover bg-white border border-border-subtle rounded-sm p-8 overflow-hidden h-full flex flex-col">
      <motion.span
        className="font-sans text-4xl font-bold text-navy opacity-20 block mb-5 leading-none"
        animate={prefersReduced ? {} : { scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: (parseInt(id, 10) - 1) * 0.3 }}
      >
        {id}
      </motion.span>
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-navy/5 mb-5 flex-shrink-0">
        <Icon size={20} className="text-navy opacity-70" aria-hidden="true" />
      </div>
      <h3 className="font-display text-h3 text-navy mb-3">{title}</h3>
      <p className="font-sans text-sm text-text-body leading-relaxed flex-1 font-light">{body}</p>
    </div>
  )
}
