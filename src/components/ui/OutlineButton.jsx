import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function OutlineButton({ children, href, to, onClick, className = '' }) {
  const cls = `btn-outline ${className}`
  const content = (
    <>
      {children}
      <span className="btn-arrow"><ArrowRight size={14} /></span>
    </>
  )
  if (to) return <Link to={to} className={cls}>{content}</Link>
  if (href) return <a href={href} className={cls}>{content}</a>
  return <button type="button" onClick={onClick} className={cls}>{content}</button>
}
