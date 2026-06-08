import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function GoldButton({ children, href, to, onClick, type = 'button', className = '', fullWidth = false, white = false }) {
  const cls = `btn-navy ${white ? 'btn-navy-white' : ''} ${fullWidth ? 'w-full justify-center' : ''} ${className}`
  const content = (
    <>
      {children}
      <span className="btn-arrow"><ArrowRight size={14} /></span>
    </>
  )
  if (to) return <Link to={to} className={cls}>{content}</Link>
  if (href) return <a href={href} className={cls}>{content}</a>
  return <button type={type} onClick={onClick} className={cls}>{content}</button>
}
