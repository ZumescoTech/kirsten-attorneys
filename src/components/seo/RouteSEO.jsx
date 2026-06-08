import { useLocation } from 'react-router-dom'
import SEOHead from './SEOHead'
import { getPageSeo } from '../../seo/config'
import { articleSchema, faqPageSchema, legalServiceSchema, personSchema } from '../../seo/schema'

export default function RouteSEO() {
  const { pathname } = useLocation()
  const jsonLd = []

  if (pathname === '/') {
    jsonLd.push(legalServiceSchema(), personSchema())
  } else if (pathname === '/about') {
    jsonLd.push(personSchema())
  } else if (pathname === '/faqs') {
    jsonLd.push(faqPageSchema())
  } else if (pathname.startsWith('/blog/')) {
    const seo = getPageSeo(pathname)
    jsonLd.push(articleSchema({ title: seo.title, description: seo.description, path: pathname }))
  }

  return <SEOHead jsonLd={jsonLd} />
}
