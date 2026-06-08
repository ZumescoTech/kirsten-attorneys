import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import ResourceCard from '../shared/ResourceCard'
import { resources } from '../../data/resources'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function ResourcesGrid() {
  return (
    <section className="py-[7.5rem] bg-white">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Legal Guides</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-h2 text-navy mt-6 mb-16 max-w-xl">
            Know your rights before you need them.
          </h2>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.1 }}
        >
          {resources.map((resource) => (
            <motion.div key={resource.id} variants={cardVariants}>
              <ResourceCard {...resource} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
