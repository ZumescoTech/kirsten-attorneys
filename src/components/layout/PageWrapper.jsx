import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  enter:   { opacity: 1, y: 0,   transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.25, ease: 'easeIn' } },
}

export default function PageWrapper({ children }) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.main>
  )
}
