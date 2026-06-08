import PageWrapper from '../components/layout/PageWrapper'
import InnerHero from '../components/shared/InnerHero'
import FAQsSection from '../components/sections/FAQsSection'
import CTABanner from '../components/home/CTABanner'
import { IMAGES } from '../data/images'

export default function FAQs() {
  return (
    <PageWrapper>
      <InnerHero
        label="Frequently Asked Questions"
        headline="Answers when you need them."
        tagline="Clear answers to the questions clients ask most when facing a criminal matter."
        bgImage={IMAGES.hero.faqs}
      />
      <FAQsSection />
      <CTABanner />
    </PageWrapper>
  )
}
