import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageWrapper from '../layout/PageWrapper'
import ScrollReveal from '../ui/ScrollReveal'

export default function BlogArticle({ title, children }) {
  return (
    <PageWrapper>
      <article className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 font-sans text-sm text-navy hover:text-navy-hover transition-colors mb-10"
            >
              <ArrowLeft size={16} />
              Back to Resources
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="font-mono text-sm uppercase tracking-[-0.03em] text-text-muted mb-4">
              Legal Guide · Cape Town
            </p>
            <h1 className="font-display text-h1 text-navy mb-8 leading-[1.15]">{title}</h1>
          </ScrollReveal>

          <div className="prose-legal space-y-6">
            {children}
          </div>
        </div>
      </article>
    </PageWrapper>
  )
}

export function ArticleSection({ heading, children }) {
  return (
    <ScrollReveal>
      <section className="mb-10">
        <h2 className="font-display text-h3 text-navy mb-4">{heading}</h2>
        <div className="font-sans text-sm text-text-body leading-relaxed space-y-4 font-light">
          {children}
        </div>
      </section>
    </ScrollReveal>
  )
}
