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

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="o-nas" className="section-y">
      <div className="container-page grid gap-14 md:grid-cols-12 md:gap-16 items-center">
        <Reveal className="md:col-span-5">
          <span className="eyebrow">O nas</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            Dom na końcu świata, w którym słychać tylko las.
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-7">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Witamy w <strong className="text-foreground">Wiżajny Slow</strong> — miejscu stworzonym dla tych, którzy mają dość miejskiego zgiełku.
            Naszą agroturystykę zbudowaliśmy z myślą o gościach, którzy szukają ciszy, śpiewu ptaków o świcie i gwieździstego nieba, jakiego nie widać już prawie nigdzie w Polsce.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            To prawdziwy <strong className="text-foreground">dom na końcu świata</strong> — drewniany, otoczony lasem i polami, bez ulicznych latarni, bez sąsiadów za płotem.
            Oferujemy <strong className="text-foreground">noclegi bez sąsiadów</strong>, w których dzień zaczyna się od mgły nad stawem, a kończy przy ognisku, pod Drogą Mleczną.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "8", l: "pokoi" },
              { v: "0", l: "sąsiadów" },
              { v: "5 ha", l: "lasu wokół" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl" style={{ color: "var(--forest)" }}>{s.v}</div>
                <div className="text-xs uppercase tracking-widest mt-1 text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- AMENITIES ---------------- */
const amenities = [
  {
    title: "8 komfortowych pokoi",
    desc: "Każdy z własną łazienką. Naturalne drewno, lniana pościel, ciepło pieca.",
    icon: BedIcon,
  },
  {
    title: "Zero sąsiadów",
    desc: "Najbliższe zabudowania kilometr stąd. Tu nikt nie zapuka o północy.",
    icon: TreesIcon,
  },
  {
    title: "Prywatny staw",
    desc: "Z pomostem i miejscem do kąpieli. Latem rano — tylko Ty i mgła nad wodą.",
    icon: WaveIcon,
  },
  {
    title: "Ognisko i grill",
    desc: "Zadaszone miejsce na ognisko, duży grill, drewno w cenie pobytu.",
    icon: FireIcon,
  },
  {
    title: "Duża kuchnia",
    desc: "W pełni wyposażona — gotuj, piecz, jedz w gronie znajomych.",
    icon: KitchenIcon,
  },
  {
    title: "Wi-Fi i parking",
    desc: "Szybki internet i miejsce dla aut — nawet jeśli przyjeżdża cała ekipa.",
    icon: WifiIcon,
  },
];

function Amenities() {
  return (
    <section id="udogodnienia" className="section-y" style={{ background: "var(--gradient-warm)" }}>
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">Udogodnienia</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Wszystko, czego nie znajdziesz w mieście.</h2>
            <p className="mt-5 text-muted-foreground">
              Cały obiekt można wynająć na wyłączność — to świetny <strong className="text-foreground">dom na imprezę</strong>,
              a brak sąsiadów sprawia, że jest to wymarzone <strong className="text-foreground">miejsce na wieczór kawalerski na Podlasiu</strong> lub kameralny <strong className="text-foreground">dom na panieński</strong>.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elev)] hover:border-[var(--wood)]">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:scale-110"
                  style={{ backgroundColor: "color-mix(in oklab, var(--forest) 12%, transparent)", color: "var(--forest)" }}
                >
                  <a.icon />
                </div>
                <h3 className="mt-5 font-display text-2xl">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
const galleryItems = [
  { src: cabinExterior, alt: "Drewniany dom w lesie o zmierzchu", span: "row-span-2" },
  { src: bedroom, alt: "Sypialnia w drewnianym domku", span: "" },
  { src: pond, alt: "Prywatny staw z pomostem", span: "" },
  { src: bonfire, alt: "Ognisko pod gwiazdami", span: "row-span-2" },
  { src: dining, alt: "Stół jadalny we wnętrzu", span: "" },
  { src: stars, alt: "Gwieździste niebo nad Suwalszczyzną", span: "" },
];

function Gallery() {
  return (
    <section id="galeria" className="section-y">
      <div className="container-page">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="eyebrow">Galeria</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Spójrz, zanim przyjedziesz.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Domek, wnętrza i okoliczna natura — kilka kadrów z codziennego życia w Wiżajnach.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4">
          {galleryItems.map((g, i) => (
            <Reveal key={i} delay={i * 60} className={g.span}>
              <figure className="group relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AREA TABS ---------------- */
const areaTabs = [
  {
    value: "wizajny",
    label: "Styk Granic i Wiżajny",
    img: suwalskiPark,
    title: "Wiżajny — najzimniejszy biegun Polski",
    points: [
      "Jezioro Wiżajny tuż obok — spacer i kąpiel w sezonie.",
      "Trójstyk granic Bolcie: Polska, Litwa, Rosja w jednym punkcie.",
      "Góra Rowelska (298 m) — najwyższy szczyt Suwalszczyzny.",
    ],
  },
  {
    value: "park",
    label: "Suwalski Park Krajobrazowy",
    img: pond,
    title: "Suwalski Park Krajobrazowy",
    points: [
      "Jezioro Hańcza — najgłębsze jezioro Polski (108,5 m).",
      "Punkt widokowy Smolniki — kadr z polskich pocztówek.",
      "Polodowcowe pagórki, doliny i bezludne ścieżki.",
    ],
  },
  {
    value: "litwa",
    label: "Wycieczki na Litwę",
    img: trakai,
    title: "Idealna baza wypadowa na Litwę z Polski",
    points: [
      "Do granicy litewskiej dosłownie kilkanaście minut autem.",
      "Wilno — 2,5 godziny drogi: starówka i klimatyczne kawiarnie.",
      "Zamek w Trokach na wyspie — must-see po drodze do Wilna.",
    ],
  },
  {
    value: "aktywnie",
    label: "Aktywnie",
    img: bike,
    title: "Rower, woda i szlaki",
    points: [
      "Jesteśmy idealnym punktem dla Green Velo — noclegi przy szlaku rowerowym Wschodniej Polski.",
      "Narty wodne i wakeboard w WOSiR Szelment.",
      "Kajaki na Czarnej Hańczy — jeden z najpiękniejszych spływów w kraju.",
    ],
  },
];

function Area() {
  return (
    <section
      id="okolica"
      className="section-y"
      style={{ backgroundColor: "color-mix(in oklab, var(--forest-deep) 96%, black)" }}
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl" style={{ color: "var(--cream)" }}>
            <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--wood) 60%, white)" }}>Okolica</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Co robić w okolicy?</h2>
            <p className="mt-5" style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}>
              Suwalszczyzna to mikroregion, w którym w 20 minut samochodem dojeżdżasz od jezior i parku krajobrazowego po granicę z Litwą.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Tabs defaultValue="wizajny" className="mt-12">
            <TabsList className="flex flex-wrap h-auto bg-transparent p-0 gap-2 justify-start">
              {areaTabs.map((t) => (
                <TabsTrigger
                  key={t.value}
                  value={t.value}
                  className="rounded-full border px-5 py-2.5 text-sm data-[state=active]:bg-[var(--wood)] data-[state=active]:text-[var(--cream)] data-[state=active]:border-[var(--wood)] transition-all"
                  style={{ borderColor: "color-mix(in oklab, var(--cream) 25%, transparent)", color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {areaTabs.map((t) => (
              <TabsContent key={t.value} value={t.value} className="mt-10">
                <div className="grid gap-10 md:grid-cols-2 items-center animate-fade-in">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={t.img} alt={t.title} loading="lazy" className="h-[380px] w-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div style={{ color: "var(--cream)" }}>
                    <h3 className="font-display text-3xl md:text-4xl">{t.title}</h3>
                    <ul className="mt-6 space-y-4">
                      {t.points.map((p) => (
                        <li key={p} className="flex gap-3" style={{ color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}>
                          <span className="mt-2 inline-block h-1.5 w-6 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--wood)" }} />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const reviews = [
  {
    text: "Wynajęliśmy cały dom na wieczór kawalerski. Brak sąsiadów, ognisko do rana i niesamowita cisza. Mamy już rezerwację na przyszły rok.",
    name: "Maciek",
    where: "Warszawa",
  },
  {
    text: "Najpiękniejsze noclegi na trasie Green Velo, jakie do tej pory zaliczyliśmy. Drewno, lniana pościel, ciepły prysznic po 80 km. Idealnie.",
    name: "Ania & Piotr",
    where: "Wrocław",
  },
  {
    text: "Pojechaliśmy z dziećmi i psem na 5 dni. Wieczorem Droga Mleczna nad głową, rano mgła nad stawem. Wracamy.",
    name: "Rodzina K.",
    where: "Poznań",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-y">
      <div className="container-page max-w-4xl text-center">
        <Reveal>
          <span className="eyebrow">Opinie gości</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Mówią o nas najlepiej.</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 relative min-h-[220px]">
            {reviews.map((r, idx) => (
              <blockquote
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <p className="font-display italic text-2xl md:text-3xl leading-snug">“{r.text}”</p>
                <footer className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">
                  {r.name} · {r.where}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Opinia ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[var(--forest)]" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */
function Location() {
  return (
    <section className="section-y" style={{ background: "var(--gradient-warm)" }}>
      <div className="container-page grid gap-12 lg:grid-cols-5 items-center">
        <Reveal className="lg:col-span-2">
          <span className="eyebrow">Lokalizacja</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Wiżajny, na samym czubku Polski.</h2>
          <p className="mt-5 text-muted-foreground">
            Nasza <strong className="text-foreground">agroturystyka w Wiżajnach</strong> położona jest na uboczu, kilka kilometrów od centrum miejscowości.
            Z jednej strony las, z drugiej pola — najbliższy sąsiad daleko za horyzontem.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Z Suwałk</span><span>45 min</span>
            </li>
            <li className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Do granicy z Litwą</span><span>10 min</span>
            </li>
            <li className="flex justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">Do Wilna</span><span>2 h 30 min</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Trójstyk Granic</span><span>15 min</span>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elev)] border border-border">
            <iframe
              title="Mapa — Wiżajny Slow"
              src="https://www.openstreetmap.org/export/embed.html?bbox=22.70%2C54.34%2C23.05%2C54.45&layer=mapnik&marker=54.395%2C22.875"
              className="w-full h-[440px] border-0"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  {
    q: "Czy wynajmujecie dom na wyłączność na imprezy (np. dom na kawalerski lub panieński)?",
    a: "Tak! Nasz obiekt posiada 8 pokoi i można go wynająć w całości. Brak sąsiadów oraz duży teren (prywatny staw, miejsce na ognisko) sprawiają, że to idealne miejsce na wieczór kawalerski (Podlasie / Suwalszczyzna) czy dom na panieński. Organizujemy swobodne spotkania na łonie natury.",
  },
  {
    q: "Czy w okolicy jest zasięg LTE / Wi-Fi?",
    a: 'Tak. Wiemy, że "Wiżajny Slow" to agroturystyka — dom na końcu świata, ale zadbaliśmy o to, by nasi goście mieli stały dostęp do internetu Wi-Fi. Możesz u nas pracować zdalnie lub streamować filmy bez problemu.',
  },
  {
    q: "Gdzie jest najbliższy sklep i jak wygląda kwestia wyżywienia?",
    a: "Mimo że nasz domek na odludziu znajduje się z dala od zgiełku, najbliższy dobrze wyposażony sklep znajdziesz w centrum Wiżajn (kilka minut autem). Do dyspozycji gości oddajemy w pełni wyposażoną, dużą kuchnię oraz przygotowane miejsce na ognisko i zadaszony grill.",
  },
  {
    q: "Czy możemy zabrać ze sobą psa / zwierzę domowe?",
    a: "Oczywiście! Nasze noclegi bez sąsiadów i ogromny, otwarty teren wokół to prawdziwy raj dla psów. Prosimy jedynie o wcześniejsze zgłoszenie przyjazdu z pupilem.",
  },
  {
    q: 'Czy "Wiżajny Slow" to dobra baza wypadowa na Litwę z Polski?',
    a: "Idealna! Od granicy dzielą nas minuty. To doskonała baza wypadowa na Litwę z Polski — w zaledwie 2,5 godziny dojedziesz do pięknego Wilna, a po drodze możesz zwiedzić zamek w Trokach. W pobliżu znajduje się też słynny Trójstyk Granic.",
  },
];

function Faq() {
  return (
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Najczęstsze pytania</h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`q${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-lg md:text-xl py-6 hover:no-underline hover:text-[var(--forest)]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- BOOKING ---------------- */
function Booking() {
  // Publiczny kalendarz Google (tylko do odczytu) — zastąp poniższy `src`
  // własnym adresem osadzenia (Google Calendar → Ustawienia kalendarza → Integracja → Osadź).
  const calendarSrc =
    "https://calendar.google.com/calendar/embed?src=pl.polish%23holiday%40group.v.calendar.google.com&ctz=Europe%2FWarsaw&mode=MONTH&showPrint=0&showCalendars=0&showTz=0&showTitle=0";

  return (
    <section
      id="rezerwacja"
      className="section-y relative overflow-hidden"
      style={{ backgroundColor: "var(--forest-deep)" }}
    >
      <img src={stars} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--forest-deep)_70%,transparent)]" />

      <div className="container-page relative grid gap-12 lg:grid-cols-2 items-center" style={{ color: "var(--cream)" }}>
        <Reveal>
          <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--wood) 70%, white)" }}>Dostępność</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Sprawdź wolne terminy.</h2>
          <p className="mt-5 max-w-md" style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}>
            Poniższy kalendarz pokazuje aktualnie zajęte terminy — aktualizujemy go na bieżąco.
            Aby zarezerwować pobyt, po prostu do nas zadzwoń.
          </p>
          <a
            href="tel:+48600000000"
            className="mt-8 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium transition-all hover:scale-[1.03]"
            style={{ backgroundColor: "var(--wood)", color: "var(--cream)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
            </svg>
            Zadzwoń: +48 600 000 000
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="overflow-hidden rounded-2xl border bg-card/95 p-2 backdrop-blur shadow-[var(--shadow-elev)]"
            style={{ borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)" }}
          >
            <iframe
              title="Kalendarz dostępności — Wiżajny Slow"
              src={calendarSrc}
              className="w-full h-[520px] rounded-xl border-0 bg-white"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-muted-foreground">
              Widok tylko do odczytu — zajęte terminy pobierane na żywo z naszego kalendarza Google.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CONTACT FORM ---------------- */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    }, 5000);
  };

  return (
    <section className="section-y" style={{ backgroundColor: "var(--sand)" }}>
      <div className="container-page max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Kontakt</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Napisz do nas.</h2>
            <p className="mt-4 text-muted-foreground">
              Masz pytanie o dostępność, chcesz zorganizować pobyt lub po prostu poznać szczegóły? Odpowiadamy w ciągu 24 godzin.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)]" style={{ borderColor: "color-mix(in oklab, var(--forest) 10%, transparent)" }}>
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: "color-mix(in oklab, var(--forest) 12%, transparent)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl">Dziękujemy za wiadomość!</h3>
                <p className="mt-2 text-muted-foreground">Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Imię</Label>
                    <Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Twoje imię" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nazwisko</Label>
                    <Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Twoje nazwisko" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Numer telefonu</Label>
                    <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+48 600 000 000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Adres e-mail</Label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Treść wiadomości</Label>
                  <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Napisz, co chcesz wiedzieć..." rows={5} required />
                </div>
                <div className="pt-2">
                  <Button type="submit" className="w-full sm:w-auto rounded-full px-8 py-3 h-auto text-sm font-medium" style={{ backgroundColor: "var(--forest)", color: "var(--cream)" }}>
                    Wyślij wiadomość
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer id="kontakt" className="border-t border-border" style={{ backgroundColor: "var(--cream)" }}>
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">
            Wiżajny <em className="not-italic" style={{ color: "var(--wood)" }}>Slow</em>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Agroturystyka na Suwalszczyźnie. Domek na odludziu, prywatny staw, ognisko i niebo pełne gwiazd.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base">Kontakt</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground" href="tel:+48600000000">+48 600 000 000</a></li>
            <li><a className="hover:text-foreground" href="mailto:rezerwacje@wizajny-slow.pl">rezerwacje@wizajny-slow.pl</a></li>
            <li>16-407 Wiżajny, woj. podlaskie</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base">Social</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground" href="#">Instagram</a></li>
            <li><a className="hover:text-foreground" href="#">Facebook</a></li>
            <li><a className="hover:text-foreground" href="#">Booking.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Wiżajny Slow. Wszelkie prawa zastrzeżone.</span>
          <span>Zaprojektowano z miłości do ciszy.</span>
        </div>
      </div>
    </footer>
  );
}