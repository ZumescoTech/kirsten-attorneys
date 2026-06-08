import { BUSINESS, SITE_URL, DEFAULT_OG_IMAGE } from './config.js'
import { faqs } from '../data/faqs.js'

export function legalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'LocalBusiness'],
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/andre.png`,
    image: DEFAULT_OG_IMAGE,
    description:
      'Specialist criminal defence attorneys in Bellville, Cape Town. 24/7 bail applications, DUI defence, serious criminal cases. Former NPA prosecutor with 29+ years combined experience.',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Cape Town' },
      { '@type': 'City', name: 'Bellville' },
      { '@type': 'City', name: 'Tygerberg' },
      { '@type': 'AdministrativeArea', name: 'Western Cape' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: '24/7 emergency bail applications available',
      },
    ],
    priceRange: '$$',
    sameAs: [
      // TODO: add verified Facebook profile URL
      // TODO: add verified hg.org listing URL
      // TODO: add verified attorneys.co.za listing URL
      'https://maps.app.goo.gl/MtvC8i7iUU5hnKAW7',
    ],
  }
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'André Kirsten',
    jobTitle: 'Criminal Defence Attorney',
    worksFor: {
      '@type': 'LegalService',
      name: BUSINESS.name,
    },
    description:
      'Former NPA prosecutor turned criminal defence attorney. Specialist in bail applications, DUI defence, and serious criminal matters in Cape Town and Bellville.',
    url: `${SITE_URL}/about`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: `${SITE_URL}/images/andre-google.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
  }
}

export function faqPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }
}

export function articleSchema({ title, description, path, datePublished = '2025-06-01' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: 'André Kirsten',
    },
    publisher: {
      '@type': 'LegalService',
      name: BUSINESS.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/andre.png`,
      },
    },
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: `${SITE_URL}${path}`,
  }
}
