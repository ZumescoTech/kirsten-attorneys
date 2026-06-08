import PageWrapper from '../components/layout/PageWrapper'
import InnerHero from '../components/shared/InnerHero'
import ServicesGrid from '../components/sections/ServicesGrid'
import CTABanner from '../components/home/CTABanner'

export default function Services() {
  return (
    <PageWrapper>
      <InnerHero
        label="Criminal Defence Services"
        headline="Every charge demands a committed defence."
        tagline="From bail applications to High Court appeals — we handle the full spectrum of criminal litigation in the Western Cape."
      />
      <ServicesGrid />
      <CTABanner />
    </PageWrapper>
  )
}
