import { useReveal } from '../hooks/useReveal'

const quoteHref = '#quote'

export function Nav() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0, rootMargin: '0px' })

  return (
    <div
      ref={ref}
      className={`reveal sticky top-0 z-30 ${visible ? 'reveal-visible' : ''}`}
    >
      <header className="border-b border-[#E0E0DC] bg-[#FAFAF8]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="btn-active flex min-h-11 min-w-11 shrink-0 items-center py-2"
            aria-label="Matossian's and Co home"
          >
            <img
              src="/logo-wordmark.png"
              alt="Matossian's and Co"
              className="h-7 w-auto max-w-[min(100%,220px)] object-contain object-left sm:h-8"
              width={220}
              height={40}
              decoding="async"
            />
          </a>
          <a
            href={quoteHref}
            className="btn-active inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm bg-[#111110] px-4 text-sm font-medium tracking-tight text-white transition-colors hover:bg-[#2a2a28] sm:px-5"
          >
            Get a Free Quote
          </a>
        </div>
      </header>
    </div>
  )
}
