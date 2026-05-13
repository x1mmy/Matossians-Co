import { Reveal } from './Reveal'

const tel = '+61402881934'
const telDisplay = '+61 402 881 934'

export function CtaSection() {
  return (
    <section
      id="quote"
      className="bg-[#111110] px-4 py-20 text-white sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <h2
            id="cta-heading"
            className="font-playfair text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]"
          >
            Ready to get started?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            Call or message to get a free quote. No obligation.
          </p>
        </Reveal>
        <Reveal delayMs={100} className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`tel:${tel}`}
            className="btn-active inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[#111110] transition-opacity hover:opacity-90"
          >
            Call Now
          </a>
          <a
            href="mailto:hello@matossiansandco.com.au?subject=Quote%20request"
            className="btn-active inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/55 px-6 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Send a Message
          </a>
        </Reveal>
        <Reveal delayMs={180} className="mt-6">
          <p className="font-jetbrains text-xs uppercase tracking-[0.12em] text-white/55">
            Direct line {telDisplay}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
