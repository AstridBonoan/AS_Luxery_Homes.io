import { useState, type FormEvent } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  budget: string
  timeline: string
  message: string
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  budget: '',
  timeline: '',
  message: '',
}

const budgetOptions = [
  'Select budget range',
  '$5M – $10M',
  '$10M – $20M',
  '$20M – $50M',
  '$50M+',
]

const timelineOptions = [
  'Select timeline',
  'Within 6 months',
  '6 – 12 months',
  '1 – 2 years',
  '2+ years',
]

export function Consultation() {
  const { ref, isVisible } = useScrollReveal()
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {}
    if (!form.firstName.trim()) next.firstName = 'Required'
    if (!form.lastName.trim()) next.lastName = 'Required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Valid email required'
    }
    if (!form.phone.trim()) next.phone = 'Required'
    if (!form.budget || form.budget.startsWith('Select')) next.budget = 'Please select'
    if (!form.timeline || form.timeline.startsWith('Select')) next.timeline = 'Please select'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm(initialForm)
  }

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const inputClass = (field: keyof FormData) =>
    `w-full border-b bg-transparent py-3 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-gold ${
      errors[field] ? 'border-red-400' : 'border-ink/20'
    }`

  return (
    <section id="consultation" className="bg-cream py-20 sm:py-28 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.35em] text-stone uppercase">Consultation</p>
            <h2 className="editorial-heading mt-3 text-3xl text-ink sm:text-4xl lg:text-5xl">
              Begin your
              <span className="block italic text-gold">private consultation</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-stone sm:text-base">
              Our client advisory team responds within 24 hours. All inquiries are held in
              strict confidence. We accept a select number of new commissions annually.
            </p>

            <div className="mt-10 space-y-6 border-t border-ink/10 pt-8">
              <div>
                <p className="text-xs tracking-[0.2em] text-stone uppercase">Direct Line</p>
                <a
                  href="tel:+18885551234"
                  className="mt-1 block font-serif text-xl text-ink transition-colors hover:text-gold"
                >
                  +1 (888) 555-1234
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-stone uppercase">Email</p>
                <a
                  href="mailto:concierge@asluxuryhomes.com"
                  className="mt-1 block font-serif text-xl text-ink transition-colors hover:text-gold"
                >
                  concierge@asluxuryhomes.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-stone uppercase">Showroom</p>
                <p className="mt-1 text-sm text-stone">
                  By appointment only
                  <br />
                  1200 Wilshire Blvd, Suite 400
                  <br />
                  Beverly Hills, CA 90210
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center border border-gold/30 bg-charcoal/5 p-10 text-center">
                <p className="font-serif text-3xl text-ink">Thank you</p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">
                  Your consultation request has been received. A senior client advisor will
                  contact you within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs tracking-[0.2em] text-gold uppercase hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="sr-only">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="First name *"
                      value={form.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                      className={inputClass('firstName')}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="sr-only">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Last name *"
                      value={form.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                      className={inputClass('lastName')}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email *"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone *"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={inputClass('phone')}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="sr-only">
                    Project location
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="Project location"
                    value={form.location}
                    onChange={(e) => update('location', e.target.value)}
                    className={inputClass('location')}
                  />
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="budget" className="sr-only">
                      Budget range
                    </label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(e) => update('budget', e.target.value)}
                      className={`${inputClass('budget')} cursor-pointer appearance-none`}
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-xs text-red-500">{errors.budget}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="timeline" className="sr-only">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      value={form.timeline}
                      onChange={(e) => update('timeline', e.target.value)}
                      className={`${inputClass('timeline')} cursor-pointer appearance-none`}
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-xs text-red-500">{errors.timeline}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Project vision
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your vision"
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal px-8 py-4 text-xs tracking-[0.25em] text-cream uppercase transition-all hover:bg-gold hover:text-charcoal sm:w-auto"
                >
                  Request Consultation
                </button>

                <p className="text-xs text-stone/70">
                  By submitting, you agree to our privacy policy. We never share your
                  information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
