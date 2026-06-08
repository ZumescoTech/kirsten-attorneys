import PageWrapper from '../components/layout/PageWrapper'
import InnerHero from '../components/shared/InnerHero'
import AboutStory from '../components/sections/AboutStory'
import Credentials from '../components/sections/Credentials'
import Values from '../components/sections/Values'
import OfficeHours from '../components/sections/OfficeHours'
import CTABanner from '../components/home/CTABanner'
import { IMAGES } from '../data/images'

export default function About() {
  return (
    <PageWrapper>
      <InnerHero
        label="Criminal Defence — Cape Town"
        headline="About André Kirsten"
        tagline="Specialist criminal defence attorney with roots on both sides of South Africa's justice system."
        bgImage={IMAGES.hero.about}
      />
      <AboutStory />
      <Credentials />
      <Values />
      <OfficeHours />
      <CTABanner />
    </PageWrapper>
  )
}
