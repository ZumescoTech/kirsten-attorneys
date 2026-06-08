import { motion } from 'framer-motion'

export default function SectionLabel({ children, delay = 0, light = false }) {
  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <div className={`section-divider ${light ? 'bg-white opacity-40' : ''}`} style={light ? { background: '#ffffff' } : {}} />
      <span className={`font-mono text-sm font-medium uppercase tracking-[-0.03em] ${light ? 'text-white opacity-70' : 'text-navy'}`}>
        {children}
      </span>
    </motion.div>
  )
}
