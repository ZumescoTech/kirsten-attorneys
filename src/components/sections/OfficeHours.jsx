import { Phone } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import GoldButton from '../ui/GoldButton'

const hours = [
  { day: 'Monday – Friday',    time: '08:00 – 17:00' },
  { day: 'Saturday',           time: '09:00 – 13:00' },
  { day: 'Sunday & Holidays',  time: 'Emergency line only' },
]

export default function OfficeHours() {
  return (
    <section className="py-[7.5rem] bg-bg-light">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Availability</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-h2 text-navy mt-6 mb-16 max-w-lg">
            We're here when you need us.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Hours table */}
          <ScrollReveal direction="left">
            <div className="bg-white border border-border-subtle rounded-sm p-8">
              <h3 className="font-display text-lg text-navy mb-6">Standard Office Hours</h3>
              <div className="space-y-0">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-4 border-b border-border-subtle last:border-b-0"
                  >
                    <span className="font-sans text-sm font-medium text-text-primary">{day}</span>
                    <span className={`font-sans text-sm ${time === 'Emergency line only' ? 'text-navy font-semibold' : 'text-text-body'}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Emergency note */}
              <div className="mt-6 p-4 bg-bg-light border border-navy border-opacity-15 rounded-sm">
                <p className="font-sans text-xs text-text-body leading-relaxed font-light">
                  <span className="text-navy font-semibold">24/7 Emergency: </span>
                  Our emergency line (072 604 5324) is monitored around the clock
                  for arrests, bail applications, and urgent matters — regardless of day or time.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right info block */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-lg text-navy mb-3">Virtual Consultations</h3>
                <p className="font-sans text-sm text-text-body leading-relaxed font-light">
                  Virtual and online consultations are available for initial case assessments.
                  We recommend scheduling appointments during office hours for detailed
                  consultations.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg text-navy mb-3">Emergency Line</h3>
                <p className="font-sans text-sm text-text-body leading-relaxed mb-6 font-light">
                  If you have been arrested or require urgent legal assistance outside of
                  office hours, call our emergency line immediately. André is available 24
                  hours a day, 7 days a week across the Western Cape.
                </p>
                <GoldButton href="tel:0726045324">
                  <Phone size={16} />
                  Call 072 604 5324
                </GoldButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
