export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&auto=format&fit=crop"
          alt="Luxury custom home with dramatic architecture at dusk"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32">
        <p className="fade-in mb-4 text-xs tracking-[0.35em] text-gold uppercase sm:mb-6">
          Bespoke Residential Construction
        </p>
        <h1 className="editorial-heading fade-in-up max-w-4xl text-4xl leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Where vision becomes
          <em className="block font-light italic text-gold">extraordinary living</em>
        </h1>
        <p className="fade-in-up mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:mt-8 sm:text-lg [animation-delay:0.2s]">
          We craft one-of-a-kind estates for the world&apos;s most discerning homeowners —
          architectural masterpieces built with uncompromising precision.
        </p>
        <div className="fade-in-up mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-6 [animation-delay:0.35s]">
          <a
            href="#consultation"
            className="inline-flex items-center justify-center bg-gold px-8 py-4 text-xs tracking-[0.25em] text-charcoal uppercase transition-all hover:bg-cream"
          >
            Request Private Consultation
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-cream/40 px-8 py-4 text-xs tracking-[0.25em] text-cream uppercase transition-all hover:border-gold hover:text-gold"
          >
            View Portfolio
          </a>
        </div>
      </div>

      <div className="relative z-10 hidden border-t border-cream/10 sm:block">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-cream/10 px-8 lg:px-12">
          {[
            { value: '$25M+', label: 'Average Project Value' },
            { value: '40+', label: 'Years of Excellence' },
            { value: '98%', label: 'Client Referral Rate' },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-8 lg:py-10">
              <p className="font-serif text-2xl text-gold lg:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs tracking-[0.15em] text-cream/50 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] text-cream/40 uppercase">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
