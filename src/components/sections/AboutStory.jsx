import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'

const SERVICES_IMAGE = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&auto=format&fit=crop'

export default function AboutStory() {
  return (
    <section className="py-[7.5rem] bg-white">
      <div className="max-w-content mx-auto px-6 space-y-28">

        {/* Block 1 — text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div>
              <SectionLabel>The Attorney</SectionLabel>
              <h2 className="font-display text-h2 text-navy mt-6 mb-6 leading-[1.1]">
                29+ years. Two sides of justice.
              </h2>
              <p className="font-sans text-sm text-text-body leading-relaxed mb-5 font-light">
                André Kirsten holds an LLB from the University of the Free State (1996) and
                completed his articles in the Northern Cape in 1997. He joined the National
                Prosecuting Authority as a prosecutor in 1998, serving both district and regional
                courts in the Eastern Free State — responsible for overseeing the investigational
                activities of two detective branches.
              </p>
              <p className="font-sans text-sm text-text-body leading-relaxed mb-5 font-light">
                In 2004 he transferred to Bellville Court, prosecuting in both district and regional
                courts until his resignation in 2005 — at which point he joined Legal Aid SA's
                Cape Town Justice Centre as a defence attorney.
              </p>
              <p className="font-sans text-sm text-navy italic font-light">
                That prosecutorial experience is now your most powerful asset.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-bg-light">
              <img
                src="/andre.png"
                alt="André Kirsten — Criminal Defence Attorney"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-navy opacity-30" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-navy opacity-30" />
            </div>
          </ScrollReveal>
        </div>

        {/* Block 2 — full-width narrative */}
        <ScrollReveal>
          <div className="max-w-[760px] mx-auto text-center">
            <p className="font-sans text-base text-text-body leading-relaxed font-light">
              André spent 10 years at Legal Aid SA, touring Cape Town, Stellenbosch,
              Malmesbury, and Bellville Justice Centre. Legal Aid practitioners represent
              the majority of accused persons in the court system — as a result he dealt
              with <strong className="font-semibold text-navy">hundreds of trials</strong> involving
              serious matters such as murder, rape, armed robbery, fraud, and contraventions
              of the Financial Institutions Act and Bank Act. He developed a reputation for
              methodical preparation, composed courtroom presence, and an ability to find the
              angles others miss.
            </p>
          </div>
        </ScrollReveal>

        {/* Block 3 — image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src={SERVICES_IMAGE}
                alt="Western Cape High Court, Cape Town"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-navy opacity-30" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-navy opacity-30" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <h3 className="font-display text-h3 text-navy mb-4">Specialist Training</h3>
              <p className="font-sans text-sm text-text-body leading-relaxed mb-5 font-light">
                During his time at both the NPA and Legal Aid SA, André attended numerous
                specialist courses and seminars covering DNA evidence examination and testing,
                fingerprint evidence, and ballistic evidence — all in pursuit of mastering the
                finer skills required when dealing with forensic evidence in criminal matters.
              </p>
              <p className="font-sans text-sm text-text-body leading-relaxed font-light">
                In 2016, André opened his own practice in Bellville, where he provides personalized,
                vigorous criminal defence to clients across the entire Western Cape. Unlike large
                firms, every client speaks directly with André — no juniors, no handoffs.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
