import { motion } from 'framer-motion'
import { PAGE_NAV } from '../siteNav'

const quoteHref = '#quote'

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="btn-active whitespace-nowrap rounded-sm px-2.5 py-2.5 text-xs font-medium tracking-tight text-[#666662] transition-colors hover:bg-[#111110]/[0.04] hover:text-[#111110] sm:px-3 sm:text-sm"
    >
      {label}
    </a>
  )
}

export function Nav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 26 }}
      className="sticky top-0 z-30"
    >
      <header className="border-b border-[#E0E0DC] bg-[#FAFAF8]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:contents">
            <motion.a
              href="#top"
              className="btn-active flex min-h-11 min-w-11 items-center gap-2 py-1 sm:gap-3 lg:order-1 lg:shrink-0"
              aria-label="Matossian's and Co home"
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#111110] p-1.5 sm:h-12 sm:w-12">
                <img
                  src="/logo-emblem.png"
                  alt=""
                  className="h-full w-full object-contain"
                  width={96}
                  height={96}
                  decoding="async"
                />
              </span>
              <span className="hidden font-playfair text-lg font-bold tracking-tight text-[#111110] min-[380px]:inline sm:text-xl">
                Matossian&apos;s &amp; Co
              </span>
            </motion.a>

            <motion.a
              href={quoteHref}
              className="btn-active inline-flex min-h-11 shrink-0 items-center justify-center rounded-sm bg-[#111110] px-3 text-sm font-medium tracking-tight text-white transition-colors hover:bg-[#2a2a28] sm:px-5 lg:order-3"
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              Get a Free Quote
            </motion.a>
          </div>

          <nav
            aria-label="Page sections"
            className="flex min-h-11 min-w-0 items-center gap-0.5 overflow-x-auto border-t border-[#E0E0DC] pt-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1 lg:order-2 lg:flex-1 lg:justify-center lg:border-0 lg:pt-0 [&::-webkit-scrollbar]:hidden"
          >
            {PAGE_NAV.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
        </div>
      </header>
    </motion.div>
  )
}
