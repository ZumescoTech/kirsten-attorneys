import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'

const credentials = [
  { id: '01', title: 'LLB', detail: 'University of the Free State, 1996' },
  { id: '02', title: 'Articles Completed', detail: 'Northern Cape, 1997' },
  { id: '03', title: 'Admitted Attorney', detail: 'Law Society of South Africa' },
  { id: '04', title: 'NPA Prosecutor', detail: 'National Prosecuting Authority — Eastern Free State & Bellville, 1998–2005' },
  { id: '05', title: 'Defence Attorney', detail: 'Legal Aid SA, Cape Town Justice Centre — Cape Town, Stellenbosch, Malmesbury & Bellville, 2005–2016' },
  { id: '06', title: 'Principal Attorney', detail: 'André Kirsten Attorneys, Bellville, 2016–present' },
  { id: '07', title: 'Specialist Training', detail: 'DNA evidence, fingerprint evidence, ballistic evidence' },
  { id: '08', title: 'Languages', detail: 'English · Afrikaans · isiXhosa' },
  { id: '09', title: 'Practice Area', detail: 'Western Cape — all courts including High Court & Magistrates\' Courts' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Credentials() {
  return (
    <section className="py-[7.5rem] bg-bg-light">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Qualifications & Experience</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-h2 text-navy mt-6 mb-16 max-w-lg">
            A record built in courtrooms, not boardrooms.
          </h2>
        </ScrollReveal>

        <motion.div
          className="space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px', amount: 0.1 }}
        >
          {credentials.map(({ id, title, detail }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="group flex items-start gap-6 py-6 border-b border-border-subtle last:border-b-0 hover:border-navy transition-colors duration-300"
            >
              <span className="font-sans text-xs text-text-muted group-hover:text-navy transition-colors duration-300 pt-1 flex-shrink-0 w-8">
                {id}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between w-full gap-1">
                <h3 className="font-display text-lg text-navy flex-shrink-0 mr-8">
                  {title}
                </h3>
                <p className="font-sans text-sm text-text-muted font-light sm:text-right">{detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
