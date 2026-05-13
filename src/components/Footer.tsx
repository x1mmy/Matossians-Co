import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import { PAGE_NAV, SITE } from '../siteNav'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-[#E0E0DC] bg-[#FAFAF8] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">
        <div className="space-y-4">
          <a href="#top" className="btn-active inline-flex min-h-11 items-center gap-3 py-1">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#111110] p-2">
              <img
                src="/logo-emblem.png"
                alt=""
                className="h-full w-full object-contain"
                width={96}
                height={96}
                decoding="async"
              />
            </span>
            <span className="font-playfair text-xl font-bold tracking-tight text-[#111110]">
              Matossian&apos;s &amp; Co
            </span>
          </a>
          <p className="font-jetbrains text-xs uppercase tracking-[0.12em] text-[#666662]">
            {SITE.abnDisplay}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-[#666662]">
            {SITE.businessLegalName}. Family-run across the Hills District, Hawkesbury, Northern
            Sydney, and most of metro Sydney. Fully insured. {SITE.ownerName}, owner-operator.
          </p>
          <p className="font-jetbrains text-xs uppercase tracking-[0.1em] text-[#666662]">
            {SITE.phoneDisplay} · {SITE.email}
          </p>
        </div>

        <div>
          <p className="font-jetbrains text-xs uppercase tracking-[0.12em] text-[#666662]">
            On this page
          </p>
          <ul className="mt-4 flex flex-col gap-1">
            {PAGE_NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="btn-active inline-flex min-h-11 items-center rounded-sm py-1 text-sm font-medium text-[#111110] underline decoration-[#E0E0DC] underline-offset-4 transition-colors hover:decoration-[#111110]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <p className="font-jetbrains text-xs uppercase tracking-[0.12em] text-[#666662] lg:text-right">
            Social
          </p>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-active inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-sm border border-[#E0E0DC] bg-white px-4 text-sm font-medium text-[#111110] transition-colors hover:border-[#111110]"
              aria-label="Matossian's and Co on Facebook"
            >
              <FacebookLogo size={22} weight="regular" aria-hidden />
              Facebook
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-active inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-sm border border-[#E0E0DC] bg-white px-4 text-sm font-medium text-[#111110] transition-colors hover:border-[#111110]"
              aria-label="Matossian's and Co on Instagram"
            >
              <InstagramLogo size={22} weight="regular" aria-hidden />
              Instagram
            </a>
          </div>
          <p className="text-xs text-[#666662] lg:text-right">
            {year} Matossian&apos;s and Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
