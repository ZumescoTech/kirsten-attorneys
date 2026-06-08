import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import FAQItem from '../shared/FAQItem'
import { faqs } from '../../data/faqs'

export default function FAQsSection() {
  return (
    <section className="py-[7.5rem] bg-white">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Frequently Asked Questions</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-h2 text-navy mt-6 mb-16 max-w-xl">
            Clear answers when you need them most.
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl">
          <ScrollReveal delay={0.15}>
            <div className="border-t border-border-subtle">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
