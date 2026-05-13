import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-[#E0E0DC] bg-[#FAFAF8] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md space-y-4">
          <a href="#top" className="btn-active inline-block min-h-11 py-1">
            <img
              src="/logo-wordmark.png"
              alt="Matossian's and Co"
              className="h-8 w-auto max-w-[240px] object-contain object-left"
              width={240}
              height={44}
              decoding="async"
            />
          </a>
          <p className="font-jetbrains text-xs uppercase tracking-[0.12em] text-[#666662]">
            ABN 12 345 678 901
          </p>
          <p className="text-sm leading-relaxed text-[#666662]">
            Property maintenance and outdoor services for Sydney&apos;s Hills District, Cherrybrook,
            and Hawkesbury. Owner-led by Elwyn.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <p className="font-jetbrains text-xs uppercase tracking-[0.12em] text-[#666662]">
            Social
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-active inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-sm border border-[#E0E0DC] bg-white px-4 text-sm font-medium text-[#111110] transition-colors hover:border-[#111110]"
              aria-label="Matossian's and Co on Facebook"
            >
              <FacebookLogo size={22} weight="regular" aria-hidden />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-active inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-sm border border-[#E0E0DC] bg-white px-4 text-sm font-medium text-[#111110] transition-colors hover:border-[#111110]"
              aria-label="Matossian's and Co on Instagram"
            >
              <InstagramLogo size={22} weight="regular" aria-hidden />
              Instagram
            </a>
          </div>
          <p className="text-xs text-[#666662]">
            {year} Matossian&apos;s and Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
