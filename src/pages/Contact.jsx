import PageWrapper from '../components/layout/PageWrapper'
import InnerHero from '../components/shared/InnerHero'
import ContactSection from '../components/sections/ContactSection'
import { IMAGES } from '../data/images'

export default function Contact() {
  return (
    <PageWrapper>
      <InnerHero
        label="Get In Touch"
        headline="Speak to André directly."
        tagline="No call centres. No assistants. Your case deserves the attorney's personal attention from day one."
        bgImage={IMAGES.hero.contact}
      />
      <ContactSection />
    </PageWrapper>
  )
}
