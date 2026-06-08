import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const easeOutExpo = [0.16, 1, 0.3, 1]
const DEFAULT_BG = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=2000&auto=format&fit=crop'

export default function InnerHero({ label, headline, tagline, bgImage }) {
  const bg = bgImage || DEFAULT_BG

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: '60vh' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${bg}')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(7,29,54,0.85) 0%, rgba(11,42,78,0.78) 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-20 sm:pt-36 sm:pb-24">

        <motion.p
          className="font-sans text-xs uppercase tracking-[0.18em] text-white opacity-60 mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
        >
          {label}
        </motion.p>

        <motion.h1
          className="font-serif text-[clamp(2rem,4vw,4rem)] text-white mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: easeOutExpo }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="font-sans text-sm text-white opacity-70 max-w-xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: easeOutExpo }}
        >
          {tagline}
        </motion.p>

        {/* Divider — grows outward from center */}
        <motion.div
          className="h-px bg-white opacity-20 mx-auto mt-10"
          style={{ transformOrigin: 'center', width: '80px' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.7, ease: easeOutExpo }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white opacity-40 hover:opacity-70 transition-opacity duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.6, behavior: 'smooth' })}
        aria-label="Scroll to content"
        whileHover={{ opacity: 0.7 }}
      >
        <span className="font-sans text-[0.6rem] uppercase tracking-[0.16em]">Scroll</span>
        <ChevronDown size={16} className="animate-bounce-slow" />
      </motion.button>
    </section>
  )
}
