import { Reveal } from './Reveal'

const areas = [
  'Hills District',
  'Hawkesbury',
  'Berowra',
  'Arcadia',
  'Cherrybrook',
  'West Pennant Hills',
  'Castle Hill',
  'Baulkham Hills',
  'Pymble',
  'Ryde',
  'Sydney',
]

export function ServiceAreas() {
  return (
    <section
      id="areas"
      className="scroll-mt-28 border-b border-[#E0E0DC] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8">
          <p className="font-jetbrains text-xs font-medium uppercase tracking-[0.14em] text-[#666662]">
            WHERE WE WORK
          </p>
          <h2 className="mt-3 font-playfair text-3xl font-bold tracking-tight text-[#111110] sm:text-4xl">
            Sydney suburbs we already know by fence line
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <ul className="divide-y divide-[#E0E0DC] rounded-[6px] border border-[#E0E0DC] bg-white">
            {areas.map((area) => (
              <li
                key={area}
                className="flex min-h-11 items-center px-4 py-3 text-sm font-medium text-[#111110] sm:px-5 sm:text-base"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
