import { motion, useReducedMotion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import { IMAGES } from '../../data/images'

const pillars = [
  { id: '01', title: '24/7 Availability',      body: 'We are on call 24 hours a day, throughout the year. Arrests, bail hearings, and crises do not follow business hours — and neither do we. Call 072 604 5324 at any time.' },
  { id: '02', title: 'Prosecutorial Insight',   body: 'André spent 7 years as an NPA prosecutor before switching to defence. He knows precisely how the state builds its case, where it is vulnerable, and how to dismantle it.' },
  { id: '03', title: 'Personalized Attention',  body: 'No junior attorneys, no handoffs. André personally handles every client and every case — keeping you informed, comfortable, and supported in a time when it truly matters.' },
]

export default function ValueProp() {
  const prefersReduced = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.05, staggerDirection: -1 } },
  }

  const itemVariants = {
    hidden:  prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: prefersReduced ? { duration: 0 } : { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
  }

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal><SectionLabel>What We Offer</SectionLabel></ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">
          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-semibold text-h2 text-navy max-w-xl">
              Experienced. Strategic. Available.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15} direction="right">
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden">
              <img
                src={IMAGES.office.consult}
                alt="Professional legal consultation room, Cape Town"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-navy/10" />
            </div>
          </ScrollReveal>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.1 }}
        >
          {pillars.map(({ id, title, body }, i) => (
            <motion.div key={id} variants={itemVariants} className="group">
              <motion.span
                className="font-display text-5xl font-semibold text-navy opacity-15 group-hover:opacity-30 transition-opacity duration-300 block mb-4 leading-none"
                animate={prefersReduced ? {} : { scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              >
                {id}
              </motion.span>
              <h3 className="font-display font-semibold text-h3 text-navy mb-3">{title}</h3>
              <p className="font-sans text-sm text-text-body leading-relaxed font-light">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
