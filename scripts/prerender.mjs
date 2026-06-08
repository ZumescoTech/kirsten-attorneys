/**
 * Post-build static prerender — injects route HTML into dist/ for crawlability.
 * Reconnaissance: Vite 8 + React 19 SPA; uses renderToString SSR + manual head injection.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { getPageSeo, canonicalUrl, DEFAULT_OG_IMAGE, SITE_NAME } from '../src/seo/config.js'
import { articleSchema, faqPageSchema, legalServiceSchema, personSchema } from '../src/seo/schema.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const templatePath = path.join(distDir, 'index.html')

const ROUTES = [
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

function schemasForRoute(pathname) {
  if (pathname === '/') return [legalServiceSchema(), personSchema()]
  if (pathname === '/about') return [personSchema()]
  if (pathname === '/faqs') return [faqPageSchema()]
  if (pathname.startsWith('/blog/')) {
    const seo = getPageSeo(pathname)
    return [articleSchema({ title: seo.title, description: seo.description, path: pathname })]
  }
  return []
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function buildHeadTags(pathname) {
  const seo = getPageSeo(pathname)
  const canonical = canonicalUrl(pathname)
  const title = escapeHtml(seo.title)
  const description = escapeHtml(seo.description)

  const jsonLd = schemasForRoute(pathname)
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n    ')

  return `    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${DEFAULT_OG_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_ZA" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />
    ${jsonLd}`
}

function stripHelmetFromBody(html) {
  return html.replace(
    /^(\s*(<title[\s\S]*?<\/title>|<meta[\s\S]*?>|<link[\s\S]*?>|<script type="application\/ld\+json">[\s\S]*?<\/script>))+/,
    '',
  )
}

async function main() {
  const serverEntry = pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href
  const { render } = await import(serverEntry)
  const template = fs.readFileSync(templatePath, 'utf-8')

  for (const route of ROUTES) {
    const { html } = render(route)
    const appHtml = stripHelmetFromBody(html)
    const headTags = buildHeadTags(route)

    let page = template
      .replace(/<title>[\s\S]*?<\/title>/, '')
      .replace('</head>', `${headTags}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    const outDir = route === '/' ? distDir : path.join(distDir, route.slice(1))
    fs.mkdirSync(outDir, { recursive: true })
    const outFile = route === '/' ? templatePath : path.join(outDir, 'index.html')
    fs.writeFileSync(outFile, page, 'utf-8')
    console.log(`  prerendered ${route}`)
  }

  console.log('Prerender complete.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
