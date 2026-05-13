import {
  CloudRain,
  Flower,
  Plant,
  Scissors,
  Waves,
  Wrench,
} from '@phosphor-icons/react'
import { Reveal } from './Reveal'

const services = [
  {
    name: 'Pressure Washing',
    description: 'Driveways, paths, and facades brought back to clean.',
    Icon: Waves,
  },
  {
    name: 'Lawn Mowing',
    description: 'Neat edges, even cuts, and a lawn that sits right.',
    Icon: Plant,
  },
  {
    name: 'Gutter Cleaning',
    description: 'Water flows where it should, not into the walls.',
    Icon: CloudRain,
  },
  {
    name: 'Hedge Trimming',
    description: 'Sharp lines and balanced shapes that hold their form.',
    Icon: Scissors,
  },
  {
    name: 'Garden Maintenance',
    description: 'Beds, weeds, and seasonal tidy-ups handled on rhythm.',
    Icon: Flower,
  },
  {
    name: 'Handyman Work',
    description: 'Handrails, fixes, and small jobs finished with care.',
    Icon: Wrench,
  },
] as const

export function ServicesStrip() {
  return (
    <section id="services" className="border-b border-[#E0E0DC] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 max-w-2xl">
          <p className="font-jetbrains text-xs font-medium uppercase tracking-[0.14em] text-[#666662]">
            What we run
          </p>
          <h2 className="mt-3 font-playfair text-3xl font-bold tracking-tight text-[#111110] sm:text-4xl">
            Services built for real homes
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((s, i) => (
            <Reveal key={s.name} delayMs={i * 80}>
              <article className="group flex h-full flex-col gap-3 rounded-[6px] border border-[#E0E0DC] bg-white p-6 shadow-none transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-18px_rgba(17,17,16,0.18)]">
                <s.Icon
                  className="text-[#111110]"
                  size={28}
                  weight="regular"
                  aria-hidden
                />
                <h3 className="text-base font-medium text-[#111110]">{s.name}</h3>
                <p className="text-sm leading-relaxed text-[#666662]">{s.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
