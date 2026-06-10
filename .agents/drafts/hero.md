/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroForest}
        alt="Jezioro o świcie we mgle — agroturystyka na Suwalszczyźnie"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

      <div className="relative z-10 container-page flex min-h-[100svh] flex-col justify-end pb-24 pt-32">
        <Reveal>
          <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
            Suwalszczyzna · 54°22′N
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className="mt-4 max-w-4xl font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02]"
            style={{ color: "var(--cream)" }}
          >
            Domek na odludziu,<br />
            gdzie agroturystyka na <em className="italic" style={{ color: "color-mix(in oklab, var(--wood) 80%, white)" }}>Suwalszczyźnie</em> zwalnia oddech.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 max-w-xl text-base md:text-lg" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
            Drewniany dom otulony lasem, prywatny staw i niebo pełne gwiazd.
            Miejsce dla tych, którzy szukają ciszy — i dla tych, którzy chcą świętować daleko od świata.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#rezerwacja"
              className="inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-elev)]"
              style={{ backgroundColor: "var(--cream)", color: "var(--forest-deep)" }}
            >
              Sprawdź dostępność
            </a>
            <a
              href="#okolica"
              className="inline-flex items-center rounded-full border px-7 py-3.5 text-sm font-medium transition-all hover:bg-white/10"
              style={{ borderColor: "color-mix(in oklab, var(--cream) 60%, transparent)", color: "var(--cream)" }}
            >
              Odkryj okolicę
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase animate-pulse" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
        ↓ scroll
      </div>
    </section>
  );
}
