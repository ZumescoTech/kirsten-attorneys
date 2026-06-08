import { motion } from 'framer-motion'

export default function Divider({ delay = 0, origin = 'left', className = '' }) {
  return (
    <motion.div
      className={`h-px bg-border-subtle ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: origin }}
    />
  )
}
