import PageWrapper from '../components/layout/PageWrapper'
import InnerHero from '../components/shared/InnerHero'
import AboutStory from '../components/sections/AboutStory'
import Credentials from '../components/sections/Credentials'
import Values from '../components/sections/Values'
import OfficeHours from '../components/sections/OfficeHours'
import CTABanner from '../components/home/CTABanner'

const ABOUT_BG = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=2000&auto=format&fit=crop'

export default function About() {
  return (
    <PageWrapper>
      <InnerHero
        label="Criminal Defence — Cape Town"
        headline="About André Kirsten"
        tagline="Specialist criminal defence attorney with roots on both sides of South Africa's justice system."
        bgImage={ABOUT_BG}
      />
      <AboutStory />
      <Credentials />
      <Values />
      <OfficeHours />
      <CTABanner />
    </PageWrapper>
  )
}
