import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'

const pillars = [
  { id: '01', title: '24/7 Availability',      body: 'We are on call 24 hours a day, throughout the year. Arrests, bail hearings, and crises do not follow business hours — and neither do we. Call 072 604 5324 at any time.' },
  { id: '02', title: 'Prosecutorial Insight',   body: 'André spent 7 years as an NPA prosecutor before switching to defence. He knows precisely how the state builds its case, where it is vulnerable, and how to dismantle it.' },
  { id: '03', title: 'Personalized Attention',  body: 'No junior attorneys, no handoffs. André personally handles every client and every case — keeping you informed, comfortable, and supported in a time when it truly matters.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function ValueProp() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal><SectionLabel>What We Offer</SectionLabel></ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-semibold text-h2 text-navy mb-14 max-w-xl">
            Experienced. Strategic. Available.
          </h2>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -60px 0px', amount: 0.1 }}
        >
          {pillars.map(({ id, title, body }) => (
            <motion.div key={id} variants={itemVariants} className="group">
              <span className="font-display text-5xl font-semibold text-navy opacity-15 group-hover:opacity-30 transition-opacity duration-300 block mb-4 leading-none">
                {id}
              </span>
              <h3 className="font-display font-semibold text-h3 text-navy mb-3">{title}</h3>
              <p className="font-sans text-sm text-text-body leading-relaxed font-light">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
