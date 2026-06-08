import { motion } from 'framer-motion'

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },   visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 },   visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },           visible: { opacity: 1 } },
}

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
