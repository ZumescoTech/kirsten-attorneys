import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import GoldButton from '../ui/GoldButton'

export default function AboutSnippet() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative bg-bg-light overflow-hidden rounded-sm" style={{ aspectRatio: '4/5' }}>
              <img
                src="/andre.png"
                alt="André Kirsten — Criminal Defence Attorney, Bellville Cape Town"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              {/* Navy corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-navy opacity-30" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-navy opacity-30" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <SectionLabel>About André Kirsten</SectionLabel>
              <h2 className="font-serif font-semibold text-h2 text-navy mt-4 mb-6 leading-[1.15]">
                A career built on both sides of the courtroom.
              </h2>
              <p className="font-sans text-sm text-text-body leading-relaxed mb-4 font-light">
                André Kirsten began his career with the National Prosecuting Authority in 1998,
                spending seven years as a prosecutor in the Eastern Free State and Bellville — learning
                precisely how the state builds criminal cases and pursues convictions.
              </p>
              <p className="font-sans text-sm text-text-body leading-relaxed mb-8 font-light">
                He then joined Legal Aid SA's Cape Town Justice Centre, where he represented
                hundreds of accused persons over a decade — including serious High Court matters
                involving murder, rape, armed robbery, and fraud. Since opening his own practice
                in 2016, André has brought that rare dual perspective to every defence.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-navy pl-5 mb-8">
                <p className="font-serif text-lg italic text-navy leading-relaxed">
                  "29+ years of combined criminal litigation experience as both prosecutor and defence attorney."
                </p>
              </blockquote>

              <GoldButton to="/about">Read More About André</GoldButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
