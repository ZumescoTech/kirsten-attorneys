import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import GoldButton from '../ui/GoldButton'

export default function CTABanner() {
  return (
    <section className="py-[7.5rem] bg-navy relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none px-6">
        <motion.div
          className="flex-1 h-px bg-white opacity-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
        />
        <div className="w-[600px] flex-shrink-0" />
        <motion.div
          className="flex-1 h-px bg-white opacity-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'right' }}
        />
      </div>

      <div className="relative max-w-content mx-auto px-6 text-center">
        <ScrollReveal delay={0.2}>
          <h2 className="font-serif text-h1 text-white mb-4 leading-[1.1]">
            Arrested? Don't wait.<br />Call André now.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="font-sans text-sm text-white opacity-70 mb-2 max-w-md mx-auto font-light">
            We are on call 24 hours a day, throughout the year, across the Western Cape.
          </p>
          <p className="font-sans text-sm text-white opacity-55 mb-10 max-w-md mx-auto font-light">
            You have everything to gain.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <GoldButton href="tel:0726045324" white>
              <Phone size={16} />
              072 604 5324 — Call Now
            </GoldButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-sans text-sm text-white opacity-60 hover:opacity-90 transition-opacity duration-200 group"
            >
              Or send a message
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
