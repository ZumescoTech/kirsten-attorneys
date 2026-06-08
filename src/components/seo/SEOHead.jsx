import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { canonicalUrl, DEFAULT_OG_IMAGE, getPageSeo, SITE_NAME } from '../../seo/config'

export default function SEOHead({ title, description, path, jsonLd = [] }) {
  const { pathname } = useLocation()
  const seo = getPageSeo(path ?? pathname)
  const pageTitle = title ?? seo.title
  const pageDescription = description ?? seo.description
  const canonical = canonicalUrl(path ?? pathname)

  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd].filter(Boolean)

  return (
    <Helmet>
      <html lang="en-ZA" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
