import { motion } from 'framer-motion'
import {
  CloudRain,
  Plant,
  Stairs,
  Trash,
  Tree,
  Waves,
  Wrench,
} from '@phosphor-icons/react'
import { Reveal } from './Reveal'

const services = [
  {
    name: 'Garden maintenance and lawn mowing',
    description: 'Lawns, edges, beds, and seasonal tidy-ups kept on a steady rhythm.',
    Icon: Plant,
  },
  {
    name: 'Waste removal',
    description: 'Green waste and site clearances hauled away so the place sits clean.',
    Icon: Trash,
  },
  {
    name: 'Pressure washing',
    description: 'Driveways, paths, and patios washed back to a crisp finish.',
    Icon: Waves,
  },
  {
    name: 'Gutter cleaning',
    description: 'Downpipes and gutters cleared so water runs where it belongs.',
    Icon: CloudRain,
  },
  {
    name: 'General landscaping and cleanups',
    description: 'Shape-ups, overgrowth cuts, and full-yard resets when it has run wild.',
    Icon: Tree,
  },
  {
    name: 'Handyman services',
    description: 'Fixes, installs, and small jobs finished with care and the right tools.',
    Icon: Wrench,
  },
  {
    name: 'Outdoor handrails and staircase fabrication',
    description: 'Steel and outdoor stair work measured, built, and set solid.',
    Icon: Stairs,
  },
] as const

export function ServicesStrip() {
  return (
    <section id="services" className="scroll-mt-28 border-b border-[#E0E0DC] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 max-w-2xl">
          <p className="font-jetbrains text-xs font-medium uppercase tracking-[0.14em] text-[#666662]">
            What we run
          </p>
          <h2 className="mt-3 font-playfair text-3xl font-bold tracking-tight text-[#111110] sm:text-4xl">
            Outdoor and property services
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
          {services.map((s, i) => {
            const isLast = i === services.length - 1
            return (
              <Reveal
                key={s.name}
                delayMs={i * 80}
                className={
                  isLast
                    ? 'sm:col-span-2 sm:flex sm:justify-center lg:col-span-3'
                    : undefined
                }
              >
                <motion.article
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  className={`group flex h-full flex-col gap-3 rounded-[6px] border border-[#E0E0DC] bg-white p-6 shadow-none duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_28px_-18px_rgba(17,17,16,0.18)] ${
                    isLast ? 'w-full max-w-xl sm:max-w-2xl lg:max-w-3xl' : 'w-full'
                  }`}
                >
                  <s.Icon
                    className="text-[#111110]"
                    size={28}
                    weight="regular"
                    aria-hidden
                  />
                  <h3 className="text-base font-medium text-[#111110]">{s.name}</h3>
                  <p className="text-sm leading-relaxed text-[#666662]">{s.description}</p>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
