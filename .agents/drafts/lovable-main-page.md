{/* HERO full-bleed */}
      <section className="relative h-[calc(100vh-73px)] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Wnętrze zaprojektowane przez NOKO Studio"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[5rem]">
            Tworzymy przestrzenie,
            <br />
            które inspirują
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Projektowanie wnętrz to nasza pasja. Łączymy funkcjonalność z estetyką,
            tworząc unikalne przestrzenie dopasowane do Twoich potrzeb.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/realizacje"
              className="inline-flex items-center gap-2 bg-white px-7 py-4 text-sm font-medium text-cream transition-colors hover:bg-white/90"
            >
              Zobacz realizacje <span aria-hidden>→</span>
            </Link>
            <Link
              to="/uslugi"
              className="inline-flex items-center gap-2 border border-white/80 px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Poznaj ofertę
            </Link>
          </div>
        </div>
      </section>

      {/* O NAS — 3 ikony */}
      <section className="bg-surface px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-cream md:text-5xl">
              O nas
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-cream-muted md:text-lg">
              NOKO Studio to zespół doświadczonych architektów wnętrz, którzy tworzą
              przestrzenie z pasją i dbałością o każdy detal.
            </p>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-dark text-dark-foreground">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-serif text-lg font-semibold text-cream">
                  {title}
                </h3>
                <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-cream-muted">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT: tekst + 2 zdjęcia */}
      <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-cream md:text-5xl">
              Projektujemy z myślą
              <br />o Twoim komforcie
            </h2>
            <p className="mt-8 max-w-[44ch] text-base leading-relaxed text-cream-muted md:text-lg">
              Nasze projekty łączą nowoczesny design z funkcjonalnością.
              Tworzymy wnętrza, które nie tylko wyglądają pięknie, ale przede
              wszystkim są komfortowe i praktyczne w codziennym użytkowaniu.
            </p>
            <Link
              to="/uslugi"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-cream underline-offset-4 hover:underline"
            >
              Sprawdź naszą ofertę <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img
              src={splitImg1}
              alt="Projekt wnętrza — salon"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
            <img
              src={splitImg2}
              alt="Projekt wnętrza — pokój dzienny"
              className="mt-12 aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>