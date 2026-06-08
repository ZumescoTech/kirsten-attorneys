import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'

export default function ResourceCard({ id, title, summary, to }) {
  return (
    <div className="card-hover bg-white border border-border-subtle rounded-sm p-8 overflow-hidden h-full flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        <span className="font-sans text-xs text-navy opacity-50 uppercase tracking-[0.12em]">Guide {id}</span>
        <BookOpen size={14} className="text-navy opacity-40" aria-hidden="true" />
      </div>
      <h3 className="font-display text-lg text-navy mb-4 leading-snug flex-1">{title}</h3>
      <p className="font-sans text-sm text-text-body leading-relaxed mb-6 font-light">{summary}</p>
      {to ? (
        <Link to={to} className="inline-flex items-center gap-2 font-sans text-sm text-navy hover:text-navy-hover transition-colors duration-200 group self-start mt-auto">
          Read Guide
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-2 font-sans text-sm text-text-muted self-start mt-auto">
          Read Guide
          <ArrowRight size={14} />
        </span>
      )}
    </div>
  )
}
