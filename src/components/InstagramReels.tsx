import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useCallback, useEffect, useState } from 'react'
import { Reveal } from './Reveal'

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

const REELS: { permalink: string; captioned?: boolean }[] = [
  { permalink: 'https://www.instagram.com/reel/DYPL2smosdN/' },
  { permalink: 'https://www.instagram.com/reel/DX_Q9emORYj/', captioned: true },
  { permalink: 'https://www.instagram.com/reel/DXkmdBSE0pg/' },
  { permalink: 'https://www.instagram.com/reel/DXJdo5jiP9h/' },
]

const slideShare = 100 / REELS.length

function loadInstagramEmbeds() {
  if (typeof window === 'undefined') return
  window.instgrm?.Embeds.process()
}

function ensureInstagramScript(onLoad: () => void) {
  const src = 'https://www.instagram.com/embed.js'
  const existing = document.querySelector(`script[src="${src}"]`)
  if (existing) {
    onLoad()
    return
  }
  const script = document.createElement('script')
  script.src = src
  script.async = true
  script.onload = onLoad
  document.body.appendChild(script)
}

export function InstagramReels() {
  const [index, setIndex] = useState(0)

  const go = useCallback((dir: -1 | 1) => {
    setIndex((i) => {
      const n = REELS.length
      return (i + dir + n) % n
    })
  }, [])

  useEffect(() => {
    ensureInstagramScript(() => {
      loadInstagramEmbeds()
      window.setTimeout(loadInstagramEmbeds, 400)
    })
  }, [])

  useEffect(() => {
    const t = window.setTimeout(loadInstagramEmbeds, 280)
    return () => window.clearTimeout(t)
  }, [index])

  return (
    <section
      id="work"
      className="scroll-mt-28 border-b border-[#E0E0DC] bg-[#FAFAF8] px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="reels-heading"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-jetbrains text-xs font-medium uppercase tracking-[0.14em] text-[#666662]">
              On the job
            </p>
            <h2
              id="reels-heading"
              className="mt-3 font-playfair text-3xl font-bold tracking-tight text-[#111110] sm:text-4xl"
            >
              Recent reels
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#666662]">
              Short clips from the crew on site. Swipe or use the arrows to browse.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="btn-active inline-flex size-11 items-center justify-center rounded-sm border border-[#E0E0DC] bg-white text-[#111110] transition-colors hover:border-[#111110]"
              onClick={() => go(-1)}
              aria-label="Previous reel"
            >
              <CaretLeft size={22} weight="regular" aria-hidden />
            </button>
            <button
              type="button"
              className="btn-active inline-flex size-11 items-center justify-center rounded-sm border border-[#E0E0DC] bg-white text-[#111110] transition-colors hover:border-[#111110]"
              onClick={() => go(1)}
              aria-label="Next reel"
            >
              <CaretRight size={22} weight="regular" aria-hidden />
            </button>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="overflow-hidden rounded-[6px] border border-[#E0E0DC] bg-white">
            <div
              className="flex"
              style={{
                width: `${REELS.length * 100}%`,
                transform: `translateX(-${index * slideShare}%)`,
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {REELS.map((reel) => (
                <div
                  key={reel.permalink}
                  className="box-border shrink-0 px-3 py-6 sm:px-6 sm:py-8"
                  style={{ width: `${slideShare}%` }}
                >
                  <div className="mx-auto flex max-w-[540px] justify-center">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={reel.permalink}
                      data-instgrm-version="14"
                      {...(reel.captioned ? { 'data-instgrm-captioned': '' } : {})}
                      style={{
                        background: '#fff',
                        border: 0,
                        borderRadius: 6,
                        margin: 0,
                        maxWidth: 540,
                        minWidth: 280,
                        padding: 0,
                        width: '100%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 border-t border-[#E0E0DC] py-3">
              {REELS.map((reel, i) => (
                <button
                  key={reel.permalink}
                  type="button"
                  className="btn-active flex min-h-11 min-w-11 items-center justify-center rounded-full p-2"
                  onClick={() => setIndex(i)}
                  aria-label={`Show reel ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                >
                  <span
                    className={`block size-2.5 rounded-full transition-colors ${
                      i === index ? 'bg-[#111110]' : 'bg-[#E0E0DC] hover:bg-[#666662]'
                    }`}
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
