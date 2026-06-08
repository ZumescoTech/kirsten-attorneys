import PageWrapper from '../components/layout/PageWrapper'
import Hero from '../components/home/Hero'
import ValueProp from '../components/home/ValueProp'
import AboutSnippet from '../components/home/AboutSnippet'
import ServicesPreview from '../components/home/ServicesPreview'
import Testimonials from '../components/home/Testimonials'
import CTABanner from '../components/home/CTABanner'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <ValueProp />
      <AboutSnippet />
      <ServicesPreview />
      <Testimonials />
      <CTABanner />
    </PageWrapper>
  )
}
