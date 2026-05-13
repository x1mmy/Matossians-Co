import { BeforeAfterSlider } from './BeforeAfterSlider'
import { Reveal } from './Reveal'
import { SITE } from '../siteNav'

const workHref = '#work'

export function Hero() {
  return (
    <section
      id="top"
      className="grid min-h-[100dvh] grid-cols-1 border-b border-[#E0E0DC] lg:grid-cols-2"
    >
      <div className="flex flex-col justify-center gap-8 px-4 py-14 sm:px-6 lg:px-12 lg:py-20 xl:pl-[max(2rem,calc((100vw-80rem)/2+1.5rem))]">
        <Reveal>
          <p className="font-jetbrains text-xs font-medium uppercase tracking-[0.14em] text-[#666662]">
            Hills District · Northern Sydney · Hawkesbury
          </p>
        </Reveal>
        <Reveal delayMs={80}>
          <h1 className="max-w-[18ch] font-playfair text-[2.35rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#111110] sm:text-5xl lg:text-[3.25rem]">
            Your property. Done properly.
          </h1>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="max-w-[52ch] text-lg leading-relaxed text-[#666662] sm:text-xl">
            Local, family-run property maintenance across most of Sydney. Reliable ongoing care and
            one-off jobs for homeowners, landlords, and small strata.
          </p>
        </Reveal>
        <Reveal delayMs={240} className="flex flex-wrap items-center gap-4">
          <a
            href="#quote"
            className="btn-active inline-flex min-h-11 items-center justify-center rounded-full bg-[#111110] px-6 text-sm font-medium text-white transition-colors hover:bg-[#2a2a28]"
          >
            Get a Free Quote
          </a>
          <a
            href={workHref}
            className="btn-active min-h-11 min-w-11 inline-flex items-center text-sm font-medium text-[#111110] underline decoration-[#E0E0DC] underline-offset-4 transition-colors hover:decoration-[#111110]"
          >
            See Our Work
          </a>
        </Reveal>
        <Reveal delayMs={320}>
          <p className="max-w-md text-sm leading-relaxed text-[#666662]">
            {SITE.businessLegalName}. Fully insured, professional, and flexible with scheduling.
            Owner-led by {SITE.ownerName.split(' ')[0]}.
          </p>
        </Reveal>
      </div>
      <div className="relative min-h-[min(100dvh,560px)] lg:min-h-[100dvh]">
        <BeforeAfterSlider
          beforeSrc="/work-after.png"
          afterSrc="/work-before.png"
          beforeAlt="Tall hedge and clippings on the brick driveway before cut-back"
          afterAlt="Same driveway and hedge line after trim and tidy"
        />
      </div>
    </section>
  )
}
