import { motion, useReducedMotion } from 'framer-motion'
import { Lock, Car, Scale, Shield, FileText, ClipboardList } from 'lucide-react'

const iconMap = { Lock, Car, Scale, Shield, FileText, ClipboardList }

export default function ServiceCard({ id, title, body, icon }) {
  const prefersReduced = useReducedMotion()
  const Icon = iconMap[icon] || Scale
  return (
    <div className="card-hover bg-white border border-border-subtle rounded-sm p-8 overflow-hidden h-full flex flex-col">
      <motion.span
        className="font-sans text-4xl font-bold text-navy opacity-20 block mb-5 leading-none"
        animate={prefersReduced ? {} : { scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: (parseInt(id, 10) - 1) * 0.3 }}
      >
        {id}
      </motion.span>
      <Icon size={20} className="text-navy opacity-40 mb-4 flex-shrink-0" aria-hidden="true" />
      <h3 className="font-display text-h3 text-navy mb-3">{title}</h3>
      <p className="font-sans text-sm text-text-body leading-relaxed flex-1 font-light">{body}</p>
    </div>
  )
}
