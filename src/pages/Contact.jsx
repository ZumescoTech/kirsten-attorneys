import PageWrapper from '../components/layout/PageWrapper'
import InnerHero from '../components/shared/InnerHero'
import ContactSection from '../components/sections/ContactSection'

const CONTACT_BG = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2000&auto=format&fit=crop'

export default function Contact() {
  return (
    <PageWrapper>
      <InnerHero
        label="Get In Touch"
        headline="Speak to André directly."
        tagline="No call centres. No assistants. Your case deserves the attorney's personal attention from day one."
        bgImage={CONTACT_BG}
      />
      <ContactSection />
    </PageWrapper>
  )
}
