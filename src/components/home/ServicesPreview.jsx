import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Lock, Car, Scale, ArrowRight } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'

const featured = [
  {
    id: '01',
    title: 'Bail Applications',
    body: '24/7 emergency bail at police stations after hours and formal bail hearings in court. We come to you — fast, reliable, and on call throughout the year.',
    Icon: Lock,
  },
  {
    id: '02',
    title: 'Drunk Driving & DUI',
    body: 'Section 65 defence with a special emphasis on DUI. Breathalyser challenges, blood alcohol re-examination, licence suspension appeals, and full court representation.',
    Icon: Car,
  },
  {
    id: '03',
    title: 'Serious Criminal Cases',
    body: 'Murder, rape, armed robbery, fraud, drugs, illegal firearms, abalone contraventions, and Financial Institutions Act charges — no case too complex.',
    Icon: Scale,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServicesPreview() {
  return (
    <section className="py-[7.5rem] bg-bg-light">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Our Services</SectionLabel>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-h2 text-navy max-w-lg">
              Vigorous defence across all serious criminal matters.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-sans text-sm text-navy hover:text-navy-hover transition-colors duration-200 group flex-shrink-0"
            >
              View All Services
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.15 }}
        >
          {featured.map(({ id, title, body, Icon }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              className="card-hover bg-white border border-border-subtle rounded-sm p-8 overflow-hidden"
            >
              <span className="font-sans text-4xl font-bold text-navy opacity-20 block mb-5 leading-none">
                {id}
              </span>
              <Icon size={22} className="text-navy opacity-40 mb-4" />
              <h3 className="font-display text-h3 text-navy mb-3">{title}</h3>
              <p className="font-sans text-sm text-text-body leading-relaxed font-light">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
