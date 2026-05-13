import { ArrowUpRight, FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import { PAGE_NAV, SITE } from '../siteNav'
import { Reveal } from './Reveal'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
          {/* Brand */}
          <Reveal className="lg:col-span-5">
            <a
              href="#top"
              className="btn-active group inline-flex max-w-full items-start gap-4 rounded-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-ink"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink p-2.5 ring-1 ring-ink/10 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/logo-emblem.png"
                  alt=""
                  className="h-full w-full object-contain"
                  width={96}
                  height={96}
                  decoding="async"
                />
              </span>
              <span className="min-w-0 pt-0.5">
                <span className="block font-playfair text-2xl font-bold tracking-tight text-ink sm:text-[1.65rem] sm:leading-tight">
                  Matossian&apos;s &amp; Co
                </span>
                <span className="mt-2 block font-jetbrains text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  {SITE.abnDisplay}
                </span>
              </span>
            </a>
            <p className="mt-7 max-w-[34ch] text-[0.9375rem] leading-[1.65] text-muted sm:max-w-prose">
              {SITE.businessLegalName}. Family-run across the Hills District, Hawkesbury, Northern
              Sydney, and most of metro Sydney. Fully insured. {SITE.ownerName}, owner-operator.
            </p>
            <div className="mt-8 flex flex-col gap-2 border-l-2 border-ink/90 pl-4">
              <a
                href={`tel:${SITE.phoneE164}`}
                className="btn-active font-jetbrains text-sm font-medium tabular-nums tracking-tight text-ink transition-colors hover:text-muted"
              >
                {SITE.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="btn-active break-all text-sm font-medium text-ink underline decoration-line underline-offset-[5px] transition-colors hover:decoration-ink/40"
              >
                {SITE.email}
              </a>
            </div>
          </Reveal>

          {/* In-page nav */}
          <Reveal delayMs={70} className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10 xl:pl-12">
            <p className="font-jetbrains text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              On this page
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-2.5">
              {PAGE_NAV.map((item) => (
                <li key={item.href} className="min-w-0">
                  <a
                    href={item.href}
                    className="btn-active group inline-flex min-h-10 items-center gap-1 text-sm font-medium text-ink/88 transition-colors hover:text-ink focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    <span className="truncate">{item.label}</span>
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Social */}
          <Reveal delayMs={130} className="lg:col-span-3 lg:flex lg:flex-col lg:items-end lg:border-l lg:border-line lg:pl-10 xl:pl-12">
            <p className="font-jetbrains text-[11px] font-medium uppercase tracking-[0.16em] text-muted lg:text-right">
              Social
            </p>
            <div className="mt-5 flex w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:max-w-[220px] lg:flex-col lg:items-stretch">
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-active flex min-h-11 items-center justify-center gap-2.5 rounded-md border border-line bg-white px-4 text-sm font-medium text-ink shadow-[0_1px_0_rgba(17,17,16,0.04)] transition-[border-color,box-shadow,transform] hover:border-ink/25 hover:shadow-[0_8px_24px_-12px_rgba(17,17,16,0.12)] sm:flex-1 lg:flex-none"
                aria-label="Matossian's and Co on Facebook"
              >
                <FacebookLogo size={20} weight="regular" className="shrink-0 text-ink" aria-hidden />
                Facebook
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-active flex min-h-11 items-center justify-center gap-2.5 rounded-md border border-line bg-white px-4 text-sm font-medium text-ink shadow-[0_1px_0_rgba(17,17,16,0.04)] transition-[border-color,box-shadow,transform] hover:border-ink/25 hover:shadow-[0_8px_24px_-12px_rgba(17,17,16,0.12)] sm:flex-1 lg:flex-none"
                aria-label="Matossian's and Co on Instagram"
              >
                <InstagramLogo size={20} weight="regular" className="shrink-0 text-ink" aria-hidden />
                Instagram
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-line pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="font-jetbrains text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
            {year} Matossian&apos;s and Co. All rights reserved.
          </p>
          <a
            href="#top"
            className="btn-active self-start font-jetbrains text-[11px] font-medium uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-ink sm:self-auto"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
