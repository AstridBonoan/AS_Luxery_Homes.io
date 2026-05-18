import { useState } from 'react'
import { portfolioProjects } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Portfolio() {
  const [activeId, setActiveId] = useState(portfolioProjects[0].id)
  const { ref, isVisible } = useScrollReveal()
  const active = portfolioProjects.find((p) => p.id === activeId) ?? portfolioProjects[0]

  return (
    <section id="portfolio" className="bg-cream py-20 sm:py-28 lg:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-[0.35em] text-stone uppercase">Portfolio</p>
            <h2 className="editorial-heading mt-3 text-3xl text-ink sm:text-4xl lg:text-5xl">
              Curated estates
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-stone sm:text-base">
            Each residence represents a singular collaboration between visionary clients,
            world-class architects, and our master craftsmen.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9]">
            <img
              key={active.id}
              src={active.image}
              alt={active.title}
              className="h-full w-full object-cover transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12">
              <p className="text-xs tracking-[0.2em] text-gold uppercase">
                {active.location} · {active.year}
              </p>
              <h3 className="editorial-heading mt-2 text-2xl text-cream sm:text-3xl lg:text-4xl">
                {active.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/80 sm:text-base">
                {active.description}
              </p>
              <p className="mt-4 text-xs tracking-[0.15em] text-cream/50 uppercase">
                {active.sqft} sq ft
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {portfolioProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveId(project.id)}
                className={`group relative aspect-[4/3] overflow-hidden transition-all ${
                  activeId === project.id
                    ? 'ring-2 ring-gold ring-offset-2 ring-offset-cream'
                    : 'opacity-70 hover:opacity-100'
                }`}
                aria-label={`View ${project.title}`}
                aria-pressed={activeId === project.id}
              >
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
