import { Reveal } from './Reveal'

const workHref = '#services'

export function Hero() {
  return (
    <section
      id="top"
      className="grid min-h-[100dvh] grid-cols-1 border-b border-[#E0E0DC] lg:grid-cols-2"
    >
      <div className="flex flex-col justify-center gap-8 px-4 py-14 sm:px-6 lg:px-12 lg:py-20 xl:pl-[max(2rem,calc((100vw-80rem)/2+1.5rem))]">
        <Reveal>
          <p className="font-jetbrains text-xs font-medium uppercase tracking-[0.14em] text-[#666662]">
            Hills District · Cherrybrook · Hawkesbury
          </p>
        </Reveal>
        <Reveal delayMs={80}>
          <h1 className="max-w-[18ch] font-playfair text-[2.35rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#111110] sm:text-5xl lg:text-[3.25rem]">
            Your property. Done properly.
          </h1>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="max-w-[52ch] text-lg leading-relaxed text-[#666662] sm:text-xl">
            Sydney&apos;s property maintenance team for homeowners who don&apos;t compromise.
            Pressure washing, lawn care, gutter cleaning, and more.
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
            Property maintenance &amp; outdoor services done properly. Owner-led by Elwyn.
          </p>
        </Reveal>
      </div>
      <div className="relative min-h-[min(100dvh,520px)] lg:min-h-[100dvh]">
        <img
          src="https://picsum.photos/seed/matossian/800/900"
          alt="Outdoor property work by Matossian's and Co"
          className="absolute inset-0 h-full w-full object-cover"
          width={800}
          height={900}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
