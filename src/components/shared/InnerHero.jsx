import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { IMAGES } from '../../data/images'

const easeOutExpo = [0.16, 1, 0.3, 1]

export default function InnerHero({ label, headline, tagline, bgImage }) {
  const bg = bgImage || IMAGES.hero.default

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
          className="hero-subheadline uppercase text-white opacity-60 mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
        >
          {label}
        </motion.p>

        <motion.h1
          className="hero-title text-white mb-6"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: easeOutExpo }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="hero-copy text-white opacity-70 max-w-xl mx-auto leading-relaxed"
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
        <span className="font-mono text-sm uppercase tracking-[-0.03em]">Scroll</span>
        <ChevronDown size={16} className="animate-bounce-slow" />
      </motion.button>
    </section>
  )
}
