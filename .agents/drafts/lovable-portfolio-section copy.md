      <section className="bg-surface px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label-eyebrow">Portfolio</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-cream md:text-5xl">
                Wybrane realizacje
              </h2>
              <p className="mt-5 max-w-2xl text-base text-cream-muted md:text-lg">
                Projekty mieszkalne i komercyjne, w których łączymy funkcjonalność
                z dopracowaną estetyką.
              </p>
            </div>
            <Link
              to="/realizacje"
              className="inline-flex items-center gap-2 text-sm font-medium text-cream underline-offset-4 hover:underline"
            >
              Zobacz wszystkie <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to="/realizacje"
                className="group flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-ink">
                  <img
                    src={p.cover}
                    alt={`${p.title}, ${p.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream-muted">
                      {p.index} · {p.category === "mieszkalne" ? "Mieszkalne" : "Komercyjne"}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-cream md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-cream-muted">
                      {p.location} · {p.area} · {p.year}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="shrink-0 text-cream transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>