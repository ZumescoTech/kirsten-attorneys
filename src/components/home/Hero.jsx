import { motion, useReducedMotion } from 'framer-motion'
import { Phone, ChevronDown } from 'lucide-react'
import GoldButton from '../ui/GoldButton'
import OutlineButton from '../ui/OutlineButton'
import { IMAGES } from '../../data/images'
const seoHeadline = 'Criminal Defence Lawyer Cape Town'
const seoWords = seoHeadline.split(' ')
const taglineHeadline = "Don't let a criminal charge ruin your life."
const taglineWords = taglineHeadline.split(' ')
const ease = [0.4, 0, 0.2, 1]
const dropEase = [0.34, 1.56, 0.64, 1]

const badges = ['Former NPA Prosecutor', '29+ Years Experience', 'Multilingual', 'Western Cape Wide']

export default function Hero() {
  const prefersReduced = useReducedMotion()
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: '100svh' }}
      aria-label="Hero"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${IMAGES.hero.home}')`,
          backgroundPosition: IMAGES.heroBgPosition,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(7,29,54,0.82) 0%, rgba(11,42,78,0.75) 100%)' }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-32">

        {/* Label */}
        <motion.p
          className="hero-subheadline uppercase text-white opacity-70 mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          Criminal Defence Attorneys · Cape Town &amp; Western Cape
        </motion.p>

        {/* Primary H1 — target keyword */}
        <h1 className="hero-title text-white mb-4">
          {seoWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.2em] last:mr-0"
              initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: dropEase }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="block text-[0.42em] font-medium tracking-[-0.05em] mt-3"
            initial={prefersReduced ? { opacity: 0.9, y: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + seoWords.length * 0.12, ease: dropEase }}
          >
            André Kirsten Attorneys
          </motion.span>
        </h1>

        {/* Emotional headline */}
        <motion.p
          className="hero-copy text-white opacity-75 mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease }}
          aria-label={taglineHeadline}
        >
          {taglineWords.map((word, i) => (
            <span key={i} className="inline-block mr-[0.2em] last:mr-0">{word}</span>
          ))}
        </motion.p>

        <motion.p
          className="hero-subheadline text-white opacity-70 mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease }}
        >
          You have everything to gain. We are on call 24 hours a day.
        </motion.p>

        {/* Body */}
        <motion.p
          className="hero-subheadline text-white opacity-65 max-w-xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85, ease }}
        >
          Former NPA prosecutor with 29+ years of combined criminal litigation experience.
          Vigorous, personalized defence across Cape Town and the Western Cape.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease }}
        >
          <GoldButton href="tel:0726045324" white className="hero-action">
            <Phone size={14} />
            Call Now — 24/7 Emergency
          </GoldButton>
          <OutlineButton to="/contact" className="hero-action border-white text-white hover:bg-white hover:text-navy">
            Book a Consultation
          </OutlineButton>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 1.2 } } }}
        >
          {badges.map((badge) => (
            <motion.span
              key={badge}
              className="font-mono text-sm uppercase tracking-[-0.03em] text-white opacity-55 border border-white border-opacity-20 px-4 py-2 rounded-sm"
              variants={{
                hidden:  { opacity: 0, y: 12 },
                visible: { opacity: 0.55, y: 0, transition: { duration: 0.4, ease } },
              }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white opacity-40 hover:opacity-70 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll to content"
      >
        <span className="font-mono text-sm uppercase tracking-[-0.03em]">Scroll</span>
        <ChevronDown size={16} className="animate-bounce-slow" />
      </motion.button>
    </section>
  )
}
