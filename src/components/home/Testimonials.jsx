import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = testimonials.length

  const go = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const next = () => go((current + 1) % total)
  const prev = () => go((current - 1 + total) % total)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % total)
    }, 5000)
    return () => clearTimeout(timer)
  }, [current, total])

  const slideVariants = {
    enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 30 : -30 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -30 : 30, transition: { duration: 0.3, ease: 'easeIn' } }),
  }

  const { quote, name, area } = testimonials[current]

  return (
    <section className="py-[7.5rem] bg-white">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Client Testimonials</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-h2 text-navy mt-6 mb-16">
            Trusted when it matters most.
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div
            className="relative bg-bg-light border border-border-subtle rounded-sm p-10 md:p-14 overflow-hidden min-h-[280px] flex flex-col justify-center"
            aria-live="polite"
            aria-atomic="true"
          >
            <Quote size={48} className="text-navy opacity-10 absolute top-8 left-8" aria-hidden="true" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center"
              >
                <p className="font-serif text-xl md:text-2xl italic text-navy leading-relaxed mb-8">
                  "{quote}"
                </p>
                <div>
                  <p className="font-sans font-semibold text-sm text-navy tracking-wide">{name}</p>
                  <p className="font-sans text-xs text-text-muted mt-1 uppercase tracking-[0.1em]">{area}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-muted hover:border-navy hover:text-navy transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-2 bg-navy'
                      : 'w-2 h-2 bg-border-subtle hover:bg-text-muted'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-muted hover:border-navy hover:text-navy transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
