export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-xl tracking-[0.15em] text-ink uppercase">
              AS <span className="text-gold">Luxury</span>
            </p>
            <p className="mt-2 text-xs text-stone">
              Custom residential construction since 1984
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {[
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#about', label: 'About' },
              { href: '#consultation', label: 'Consultation' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] text-stone uppercase transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-stone/70">
            &copy; {year} AS Luxury Homes. All rights reserved.
          </p>
          <p className="text-xs text-stone/70">
            Licensed · Bonded · Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
