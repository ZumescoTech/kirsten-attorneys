import { Phone } from 'lucide-react'

export default function EmergencyButton({ className = '', dark = false }) {
  return (
    <a
      href="tel:0726045324"
      className={`btn-navy inline-flex items-center gap-2 ${dark ? '' : 'btn-navy-white'} ${className}`}
      style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '20px', paddingRight: '20px', borderRadius: '4px', fontSize: '0.75rem' }}
    >
      <Phone size={13} />
      <span>072 604 5324</span>
    </a>
  )
}
