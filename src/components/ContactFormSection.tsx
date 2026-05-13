import { type FormEvent, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SITE } from '../siteNav'

type FormStatus = 'idle' | 'submitting' | 'success'

type FormPayload = {
  name: string
  phone: string
  email: string
  suburb: string
  message: string
}

function buildMailto(payload: FormPayload): string {
  const subject = `Quote request from ${payload.name}`
  const body = [
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    payload.suburb ? `Suburb: ${payload.suburb}` : '',
    '',
    'Message:',
    payload.message,
  ]
    .filter(Boolean)
    .join('\n')

  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function ContactFormSection() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [lastPayload, setLastPayload] = useState<FormPayload | null>(null)

  const mailtoHref = useMemo(
    () => (lastPayload ? buildMailto(lastPayload) : ''),
    [lastPayload],
  )

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const phone = String(fd.get('phone') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const suburb = String(fd.get('suburb') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    if (!name || !phone || !email || !message) {
      return
    }

    setStatus('submitting')
    const payload: FormPayload = { name, phone, email, suburb, message }

    await new Promise((r) => window.setTimeout(r, 700))
    setLastPayload(payload)
    form.reset()
    setStatus('success')
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-[#E0E0DC] bg-[#FAFAF8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 lg:gap-y-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="font-jetbrains text-xs font-medium uppercase tracking-[0.14em] text-[#666662]">
              Request a quote
            </p>
            <h2
              id="contact-heading"
              className="mt-3 font-playfair text-3xl font-bold tracking-tight text-[#111110] sm:text-4xl"
            >
              Tell us what the job needs
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#666662]">
              Send a short note and we will come back with a straight answer. Same-day replies when
              we are on the tools nearby.
            </p>
            <ul className="mt-8 space-y-3 border-l border-[#E0E0DC] pl-5 text-sm leading-relaxed text-[#666662]">
              <li>No obligation. Clear scope before we start.</li>
              <li>Fully insured. {SITE.ownerName.split(' ')[0]} reads every message.</li>
              <li>Prefer the phone? {SITE.phoneDisplay}</li>
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delayMs={80}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 120, damping: 24 }}
              className="rounded-[6px] border border-[#E0E0DC] bg-white p-6 shadow-[0_20px_40px_-22px_rgba(17,17,16,0.12)] sm:p-8"
            >
              {status === 'success' && lastPayload ? (
                <div className="space-y-4" role="status" aria-live="polite">
                  <p className="font-playfair text-xl font-bold text-[#111110]">Message ready to send</p>
                  <p className="text-sm leading-relaxed text-[#666662]">
                    This site does not store your details on a server. Open your email app with the
                    fields pre-filled, send, and we will reply from {SITE.email}.
                  </p>
                  <a
                    href={mailtoHref}
                    className="btn-active inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-[#111110] px-4 text-sm font-medium text-white transition-colors hover:bg-[#2a2a28] sm:w-auto"
                  >
                    Open email app
                  </a>
                  <button
                    type="button"
                    className="btn-active text-sm font-medium text-[#666662] underline decoration-[#E0E0DC] underline-offset-4 hover:text-[#111110] hover:decoration-[#111110]"
                    onClick={() => {
                      setStatus('idle')
                      setLastPayload(null)
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-sm font-medium text-[#111110]">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="min-h-11 w-full rounded-sm border border-[#E0E0DC] bg-white px-3 py-2.5 text-sm text-[#111110] outline-none transition-colors focus:border-[#111110] focus:ring-1 focus:ring-[#111110]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-phone" className="text-sm font-medium text-[#111110]">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        className="min-h-11 w-full rounded-sm border border-[#E0E0DC] bg-white px-3 py-2.5 text-sm text-[#111110] outline-none transition-colors focus:border-[#111110] focus:ring-1 focus:ring-[#111110]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="text-sm font-medium text-[#111110]">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-h-11 w-full rounded-sm border border-[#E0E0DC] bg-white px-3 py-2.5 text-sm text-[#111110] outline-none transition-colors focus:border-[#111110] focus:ring-1 focus:ring-[#111110]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-suburb" className="text-sm font-medium text-[#111110]">
                        Suburb <span className="font-normal text-[#666662]">(optional)</span>
                      </label>
                      <input
                        id="contact-suburb"
                        name="suburb"
                        type="text"
                        autoComplete="address-level2"
                        className="min-h-11 w-full rounded-sm border border-[#E0E0DC] bg-white px-3 py-2.5 text-sm text-[#111110] outline-none transition-colors focus:border-[#111110] focus:ring-1 focus:ring-[#111110]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-sm font-medium text-[#111110]">
                      What do you need done?
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      className="min-h-[8.5rem] w-full resize-y rounded-sm border border-[#E0E0DC] bg-white px-3 py-3 text-sm leading-relaxed text-[#111110] outline-none transition-colors focus:border-[#111110] focus:ring-1 focus:ring-[#111110]"
                    />
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-active inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm bg-[#111110] px-6 text-sm font-medium text-white transition-colors hover:bg-[#2a2a28] disabled:pointer-events-none disabled:opacity-60"
                    >
                      {status === 'submitting' ? 'Preparing…' : 'Review and send'}
                    </button>
                    <p className="text-xs leading-relaxed text-[#666662] sm:max-w-xs sm:text-right">
                      By sending, you agree we reply by phone or email. No mailing lists, no spam.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
