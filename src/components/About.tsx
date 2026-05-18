import { useScrollReveal } from '../hooks/useScrollReveal'

const credentials = [
  {
    title: 'Master Craftsmanship',
    description:
      'Every detail — from hand-selected marble to custom ironwork — is executed by artisans with decades of specialized expertise.',
  },
  {
    title: 'Architectural Partnership',
    description:
      'We collaborate with Pritzker-caliber architects to translate bold visions into structurally flawless, livable masterpieces.',
  },
  {
    title: 'White-Glove Project Management',
    description:
      'A dedicated client liaison ensures seamless communication, transparent timelines, and absolute discretion throughout your build.',
  },
]

const awards = [
  'NAHB Custom Home Builder of the Year',
  'Architectural Digest AD100 Feature',
  'Luxury Home Builder Council — Platinum Member',
  'LEED Platinum Certified Builder',
]

export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="bg-charcoal py-20 sm:py-28 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs tracking-[0.35em] text-gold uppercase">About</p>
            <h2 className="editorial-heading mt-3 text-3xl text-cream sm:text-4xl lg:text-5xl">
              Four decades of
              <span className="block italic text-gold">uncompromising excellence</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-cream/70 sm:text-base">
              Founded in 1984, AS Luxury Homes has built over 200 bespoke residences across
              North America&apos;s most prestigious addresses. We accept a limited number of
              commissions each year to ensure every project receives our undivided attention.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
              Our clients include Fortune 500 executives, entertainment icons, and
              multi-generational families who demand nothing less than perfection.
            </p>

            <ul className="mt-10 space-y-3 border-t border-cream/10 pt-8">
              {awards.map((award) => (
                <li
                  key={award}
                  className="flex items-start gap-3 text-sm text-cream/60"
                >
                  <span className="mt-1.5 h-px w-4 shrink-0 bg-gold" aria-hidden />
                  {award}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80&auto=format&fit=crop"
              alt="Luxury home interior with refined finishes"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden bg-gold p-6 sm:block lg:-bottom-8 lg:-left-8 lg:p-8">
              <p className="font-serif text-4xl text-charcoal lg:text-5xl">40+</p>
              <p className="mt-1 text-xs tracking-[0.2em] text-charcoal/70 uppercase">
                Years of Trust
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3 lg:mt-24 lg:gap-12">
          {credentials.map((item, i) => (
            <div
              key={item.title}
              className="border-t border-cream/10 pt-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-serif text-2xl text-gold/60">0{i + 1}</span>
              <h3 className="editorial-heading mt-3 text-xl text-cream">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
