/**
 * Reconnaissance (Step 0):
 * - Framework: Vite 8 + React 19 SPA with react-router-dom v7
 * - Routes: /, /about, /services, /resources, /faqs, /contact, /blog/*
 * - Head management: react-helmet-async via SEOHead component
 * - Static assets: public/ (robots.txt, sitemap.xml, images/)
 * - Production domain: https://andrekirsten.co.za
 */

export const SITE_URL = 'https://andrekirsten.co.za'
export const SITE_NAME = 'André Kirsten Attorneys'
// TODO: replace og-image.jpg with a branded 1200×630px OG image (current file is a placeholder copy of office photo)
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`

export const BUSINESS = {
  name: SITE_NAME,
  phone: '+27726045324',
  phoneDisplay: '072 604 5324',
  email: 'andre@andrekirsten.co.za',
  streetAddress: '25 Nelson Street, Oak Glen',
  addressLocality: 'Bellville',
  addressRegion: 'Western Cape',
  postalCode: '7530',
  addressCountry: 'ZA',
  latitude: -33.8813617,
  longitude: 18.6641208,
}

/** All prerenderable + sitemap routes */
export const ROUTES = [
  '/',
  '/about',
  '/services',
  '/resources',
  '/faqs',
  '/contact',
  '/blog/bail-application-cape-town',
  '/blog/dui-attorney-bellville',
  '/blog/what-happens-after-arrest-south-africa',
]

export const PAGE_SEO = {
  '/': {
    title: 'Criminal Defence Lawyer Cape Town | André Kirsten Attorneys',
    description:
      'Specialist criminal defence attorney in Bellville & Cape Town. 24/7 bail applications, DUI defence & serious criminal cases. Former NPA prosecutor with 29+ years experience.',
    h1: 'Criminal Defence Lawyer Cape Town | André Kirsten Attorneys',
  },
  '/about': {
    title: 'About André Kirsten | Criminal Defence Attorney Cape Town',
    description:
      'Meet André Kirsten — former NPA prosecutor and specialist criminal defence attorney in Bellville, Cape Town. 29+ years of combined prosecution and defence experience.',
    h1: 'About André Kirsten',
  },
  '/services': {
    title: 'Criminal Defence Services Cape Town | Bail, DUI & Serious Cases',
    description:
      'Full-spectrum criminal defence in the Western Cape: 24/7 bail applications, DUI defence, drug offences, murder, fraud, and High Court appeals.',
    h1: 'Every charge demands a committed defence.',
  },
  '/resources': {
    title: 'Criminal Law Guides & Resources | André Kirsten Attorneys',
    description:
      'Practical legal guides on bail, DUI, police rights, and hiring a criminal attorney in Cape Town and Bellville.',
    h1: 'Know your rights.',
  },
  '/faqs': {
    title: 'Criminal Law FAQs | André Kirsten Attorneys Cape Town',
    description:
      'Answers to common questions about arrests, bail, DUI, criminal records, and criminal defence in Cape Town and the Western Cape.',
    h1: 'Answers when you need them.',
  },
  '/contact': {
    title: 'Contact André Kirsten Attorneys | 24/7 Emergency Line',
    description:
      'Speak to André Kirsten directly. 24/7 emergency line for arrests and bail. Bellville office, virtual consultations available across the Western Cape.',
    h1: 'Speak to André directly.',
  },
  '/blog/bail-application-cape-town': {
    title: 'Bail Application Cape Town — What You Need to Know',
    description:
      'Complete guide to bail applications in Cape Town and Bellville. How bail works, what courts consider, and how to get 24/7 emergency bail assistance.',
    h1: 'Bail Application Cape Town — What You Need to Know',
  },
  '/blog/dui-attorney-bellville': {
    title: 'DUI Attorney Bellville & Cape Town | Section 65 Defence',
    description:
      'How to choose a DUI attorney in Bellville and Cape Town. Section 65 charges, breathalyser challenges, licence suspension appeals, and trial defence.',
    h1: 'DUI Attorney Bellville & Cape Town',
  },
  '/blog/what-happens-after-arrest-south-africa': {
    title: 'What to Do After Arrest in South Africa | Step-by-Step Guide',
    description:
      'What happens after arrest in South Africa — your constitutional rights, police procedures, bail, first court appearance, and when to call a criminal lawyer.',
    h1: 'What to Do After Arrest in South Africa',
  },
}

export function getPageSeo(pathname) {
  const path = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname
  return PAGE_SEO[path] || PAGE_SEO['/']
}

export function canonicalUrl(pathname) {
  const path = pathname === '/' ? '' : pathname.replace(/\/$/, '')
  return `${SITE_URL}${path}`
}
