<section className="bg-surface px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-3">
          {services.map(({ Icon, title, desc, items }) => (
            <article
              key={title}
              className="flex flex-col bg-ink p-10 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-dark text-dark-foreground">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h2 className="mt-8 font-serif text-2xl font-semibold leading-snug text-cream">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                {desc}
              </p>
              <ul className="mt-8 space-y-3 border-t border-hairline pt-6">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-cream">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cream" strokeWidth={2.25} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-[1600px] text-center">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-dark px-8 py-4 text-sm font-medium text-dark-foreground transition-colors hover:bg-dark/90"
          >
            Skontaktuj się z nami <span aria-hidden>→</span>
          </Link>
        </div>
      </section>