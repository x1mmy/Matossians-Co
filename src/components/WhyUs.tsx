import { Reveal } from './Reveal'

const stats = [
  {
    title: '14 hrs, 1 man, 2 machines',
    body: 'A real lawn day from our crew, straight from the yard, no shortcuts on the big runs.',
  },
  {
    title: "Regular clients across Sydney's Hills District",
    body: 'Neighbours refer neighbours when the finish is consistent and the gate gets closed.',
  },
  {
    title: 'Every job done right, or we come back',
    body: 'If something is off, we fix it. Pride is cheaper than a bad name on the street.',
  },
]

export function WhyUs() {
  return (
    <section className="border-b border-[#E0E0DC] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="font-jetbrains text-xs font-medium uppercase tracking-[0.14em] text-[#666662]">
              Why homeowners call us
            </p>
            <h2 className="mt-3 font-playfair text-3xl font-bold tracking-tight text-[#111110] sm:text-4xl">
              Proof you can feel underfoot
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.title} delayMs={i * 80}>
                <div className="border-l border-[#E0E0DC] pl-5">
                  <p className="font-playfair text-lg font-bold text-[#111110]">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#666662]">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-10">
          <Reveal delayMs={120}>
            <figure className="rounded-[6px] border border-[#E0E0DC] bg-white p-8 sm:p-10">
              <blockquote className="font-playfair text-xl font-bold leading-snug text-[#111110] sm:text-2xl">
                <p>
                  We work like the Lord is watching the details, not just the clock. Your home gets
                  the same patience I would want on mine, and if a line is wrong we come back until
                  it reads true.
                </p>
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-[#666662]">
                Elwyn, Matossian&apos;s and Co
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
