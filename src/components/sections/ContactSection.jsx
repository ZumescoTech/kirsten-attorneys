import { Phone, MapPin, Building2, Printer, Video, Mail, MessageCircle } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import GoldButton from '../ui/GoldButton'
import ContactForm from '../shared/ContactForm'
import { MAPS } from '../../data/images'

const serviceAreas = [
  "All Cape Town Magistrates' Courts",
  "Western Cape High Court",
  "Northern & Southern Suburbs",
  "Cape Peninsula",
  "Stellenbosch · Paarl · Somerset West",
  "Wellington & surrounding areas",
]

export default function ContactSection() {
  return (
    <section className="py-[7.5rem] bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — contact info + map */}
          <ScrollReveal direction="left">
            <div>
              <SectionLabel>Contact Details</SectionLabel>

              {/* Emergency number — prominent */}
              <div className="mt-6 mb-10">
                <p className="font-sans text-xs uppercase tracking-[0.12em] text-text-muted mb-2">
                  Emergency 24/7
                </p>
                <a
                  href="tel:0726045324"
                  className="font-display text-4xl text-navy hover:text-navy-hover transition-colors duration-200 block"
                >
                  072 604 5324
                </a>
              </div>

              {/* Contact details list */}
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-navy opacity-40 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.1em] text-text-muted mb-1">Physical Address</p>
                    <p className="font-sans text-sm text-text-body leading-relaxed font-light">
                      25 Nelson Street, Oak Glen<br />
                      Bellville, Cape Town, 7530
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 size={16} className="text-navy opacity-40 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.1em] text-text-muted mb-1">Postal Address</p>
                    <p className="font-sans text-sm text-text-body leading-relaxed font-light">
                      P.O. Box 4050<br />
                      Old Oak, 7537
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-navy opacity-40 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.1em] text-text-muted mb-1">Email</p>
                    <a href="mailto:andre@andrekirsten.co.za" className="font-sans text-sm text-navy hover:text-navy-hover transition-colors duration-200">
                      andre@andrekirsten.co.za
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle size={16} className="text-navy opacity-40 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.1em] text-text-muted mb-1">WhatsApp</p>
                    <p className="font-sans text-sm text-text-body font-light">072 604 5324</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Printer size={16} className="text-navy opacity-40 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.1em] text-text-muted mb-1">Fax</p>
                    <p className="font-sans text-sm text-text-body font-light">086 552 2542</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Video size={16} className="text-navy opacity-40 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.1em] text-text-muted mb-1">Video Consultations (Skype)</p>
                    <p className="font-sans text-sm text-text-body font-light">andre.kirsten.attorney — pre-arrange via phone or email</p>
                  </div>
                </div>
              </div>

              {/* Service areas */}
              <div className="mb-10">
                <p className="font-sans text-xs uppercase tracking-[0.12em] text-text-muted mb-4">
                  Service Areas
                </p>
                <ul className="space-y-2">
                  {serviceAreas.map((area) => (
                    <li key={area} className="font-sans text-sm text-text-body flex items-center gap-2 font-light">
                      <span className="w-1 h-1 rounded-full bg-navy opacity-40 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Google Maps embed */}
              <div className="mb-4">
                <p className="font-sans text-xs uppercase tracking-[0.12em] text-text-muted mb-4">
                  Our Location
                </p>
                <div className="relative w-full rounded-sm overflow-hidden border border-border-subtle" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={MAPS.embedUrl}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0, filter: 'grayscale(40%) contrast(90%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="André Kirsten Lawyer — Bellville, Cape Town"
                  />
                </div>
              </div>

              <GoldButton
                href={MAPS.placeUrl}
                className="mt-2"
              >
                <MapPin size={15} />
                Get Directions
              </GoldButton>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <SectionLabel>Send a Message</SectionLabel>
              <h2 className="font-display text-h2 text-navy mt-6 mb-8 leading-[1.1]">
                Speak to André directly.
              </h2>
              <p className="font-sans text-sm text-text-body leading-relaxed mb-8 font-light">
                No call centres. No assistants. Consultations available in person at our Bellville
                office, at your office or residence, or via video call — whatever is most convenient.
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
