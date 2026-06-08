import { Lock, Car, Scale, Shield, FileText, ClipboardList } from 'lucide-react'

const iconMap = { Lock, Car, Scale, Shield, FileText, ClipboardList }

export default function ServiceCard({ id, title, body, icon }) {
  const Icon = iconMap[icon] || Scale
  return (
    <div className="card-hover bg-white border border-border-subtle rounded-sm p-8 overflow-hidden h-full flex flex-col">
      <span className="font-sans text-4xl font-bold text-navy opacity-20 block mb-5 leading-none">
        {id}
      </span>
      <Icon size={20} className="text-navy opacity-40 mb-4 flex-shrink-0" aria-hidden="true" />
      <h3 className="font-serif text-h3 text-navy mb-3">{title}</h3>
      <p className="font-sans text-sm text-text-body leading-relaxed flex-1 font-light">{body}</p>
    </div>
  )
}
