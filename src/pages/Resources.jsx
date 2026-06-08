import PageWrapper from '../components/layout/PageWrapper'
import InnerHero from '../components/shared/InnerHero'
import ResourcesGrid from '../components/sections/ResourcesGrid'
import CTABanner from '../components/home/CTABanner'
import { IMAGES } from '../data/images'

export default function Resources() {
  return (
    <PageWrapper>
      <InnerHero
        label="Legal Guides"
        headline="Know your rights."
        tagline="Practical guides to help you navigate the South African criminal justice system."
        bgImage={IMAGES.hero.resources}
      />
      <ResourcesGrid />
      <CTABanner />
    </PageWrapper>
  )
}
