      <section className="bg-surface px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center md:text-left">
            <p className="label-eyebrow">Korzyści</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-cream md:text-5xl">
              Co zyskujesz?
            </h2>
            <p className="mt-5 max-w-2xl text-base text-cream-muted md:text-lg">
              Oferujemy więcej niż tylko projekty wnętrz. Każdy klient może liczyć na:
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-4 border-t border-hairline pt-6">
                <Check className="mt-1 h-5 w-5 shrink-0 text-cream" strokeWidth={1.5} />
                <p className="text-lg leading-relaxed text-cream">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>