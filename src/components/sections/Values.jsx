import { motion, useReducedMotion } from 'framer-motion'
import { PhoneCall, Crosshair, Zap } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'

const pillars = [
  {
    id: '01',
    title: 'Accessibility',
    body: 'You deserve a lawyer who answers your call. We maintain a 24/7 emergency line because crises don\'t follow business hours — we are available all hours, every day of the year.',
    Icon: PhoneCall,
  },
  {
    id: '02',
    title: 'Prosecutorial Edge',
    body: 'André\'s 7 years as an NPA prosecutor means he has conducted both prosecution and defence investigations. He knows exactly how the state builds its case — and where it can be challenged.',
    Icon: Crosshair,
  },
  {
    id: '03',
    title: 'Tenacity',
    body: 'André fights for every possible outcome — from diversion and withdrawal with no criminal record, to full trials and High Court appeals. No matter how small or serious, every client receives full commitment.',
    Icon: Zap,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Values() {
  const prefersReduced = useReducedMotion()
  return (
    <section className="py-[7.5rem] bg-white">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>How We Work</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-h2 text-navy mt-6 mb-16 max-w-xl">
            The principles behind every case.
          </h2>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.15 }}
        >
          {pillars.map(({ id, title, body, Icon }, i) => (
            <motion.div key={id} variants={itemVariants} className="group">
              <div className="flex items-center gap-3 mb-5">
                <motion.span
                  className="font-sans text-4xl font-bold text-navy opacity-15 group-hover:opacity-30 transition-opacity duration-300 leading-none"
                  animate={prefersReduced ? {} : { scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                >
                  {id}
                </motion.span>
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-sm bg-navy/5">
                  <Icon size={17} className="text-navy opacity-60" aria-hidden="true" />
                </div>
              </div>
              <h3 className="font-display text-h3 text-navy mb-3">{title}</h3>
              <p className="font-sans text-sm text-text-body leading-relaxed font-light">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
