import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import GoldButton from '../ui/GoldButton'

const NATURE_OPTIONS = [
  { value: '', label: 'Nature of Matter' },
  { value: 'bail', label: 'Bail Application' },
  { value: 'dui', label: 'DUI / Drunk Driving' },
  { value: 'serious', label: 'Serious Criminal Matter' },
  { value: 'domestic', label: 'Domestic Violence' },
  { value: 'appeal', label: 'Criminal Appeal' },
  { value: 'expungement', label: 'Record Expungement' },
  { value: 'other', label: 'Other' },
]

const CONTACT_METHODS = ['Phone', 'Email', 'WhatsApp']

const inputBase =
  'w-full bg-white border border-border-subtle text-text-primary font-sans text-sm px-4 py-3 rounded-sm placeholder-text-muted transition-all duration-200 focus:outline-none focus:border-navy focus:shadow-[0_0_0_3px_rgba(11,42,78,0.10)]'

const errorClass = 'text-red-500 font-sans text-xs mt-1'

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Full name is required.'
  if (!fields.phone.trim()) errors.phone = 'Phone number is required.'
  else if (fields.phone.trim().length < 9) errors.phone = 'Please enter a valid phone number.'
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = 'Please enter a valid email address.'
  if (!fields.nature) errors.nature = 'Please select the nature of your matter.'
  if (!fields.description.trim()) errors.description = 'Please briefly describe your situation.'
  return errors
}

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: '', phone: '', email: '', nature: '', description: '', contactMethod: 'Phone',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-4 py-10"
        >
          <CheckCircle size={40} className="text-navy" />
          <h3 className="font-serif text-2xl text-navy">Message received.</h3>
          <p className="font-sans text-sm text-text-body leading-relaxed max-w-sm font-light">
            Thank you, {fields.name}. We will be in touch shortly on{' '}
            <span className="text-text-primary font-semibold">{fields.phone}</span>.
          </p>
          <p className="font-sans text-xs text-text-muted">
            For urgent matters, call <a href="tel:0726045324" className="text-navy hover:text-navy-hover">072 604 5324</a> directly.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name *"
              value={fields.name}
              onChange={set('name')}
              className={inputBase}
              aria-label="Full Name"
            />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number *"
              value={fields.phone}
              onChange={set('phone')}
              className={inputBase}
              aria-label="Phone Number"
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address (optional)"
              value={fields.email}
              onChange={set('email')}
              className={inputBase}
              aria-label="Email Address"
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>

          {/* Nature of Matter */}
          <div>
            <select
              value={fields.nature}
              onChange={set('nature')}
              className={`${inputBase} ${!fields.nature ? 'text-text-muted' : 'text-text-primary'} appearance-none`}
              aria-label="Nature of Matter"
            >
              {NATURE_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value} disabled={value === ''} className="bg-white text-text-primary">
                  {label}
                </option>
              ))}
            </select>
            {errors.nature && <p className={errorClass}>{errors.nature}</p>}
          </div>

          {/* Description */}
          <div>
            <textarea
              placeholder="Brief description of your situation *"
              value={fields.description}
              onChange={set('description')}
              rows={5}
              className={`${inputBase} resize-none`}
              aria-label="Description"
            />
            {errors.description && <p className={errorClass}>{errors.description}</p>}
          </div>

          {/* Preferred contact */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.1em] text-text-muted mb-3">
              Preferred Contact Method
            </p>
            <div className="flex gap-4 flex-wrap">
              {CONTACT_METHODS.map((method) => (
                <label key={method} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={fields.contactMethod === method}
                    onChange={set('contactMethod')}
                    className="accent-navy"
                  />
                  <span className={`font-sans text-sm transition-colors duration-200 ${fields.contactMethod === method ? 'text-navy' : 'text-text-muted group-hover:text-text-body'}`}>
                    {method}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <GoldButton type="submit" fullWidth>
            Send Message
          </GoldButton>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
