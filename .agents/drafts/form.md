{/* Dane kontaktowe */}
          <div className="md:col-span-2">
            <p className="label-eyebrow">Pracownia</p>
            <p className="mt-4 font-serif text-3xl font-semibold text-cream">
              NOKO Studio
            </p>
            <p className="mt-2 text-sm text-cream-muted">
              Pracownia Architektury Wnętrz
            </p>

            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark text-dark-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-cream-muted">E-mail</p>
                  <a href="mailto:biuro@noko-studio.pl" className="mt-1 block text-base text-cream hover:underline">
                    biuro@noko-studio.pl
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark text-dark-foreground">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-cream-muted">Telefon</p>
                  <a href="tel:+48455408602" className="mt-1 block text-base text-cream hover:underline">
                    Paulina · +48 455 408 602
                  </a>
                  <a href="tel:+48455408601" className="mt-1 block text-base text-cream hover:underline">
                    Aleksandra · +48 455 408 601
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark text-dark-foreground">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-cream-muted">Lokalizacja</p>
                  <p className="mt-1 text-base text-cream">Białystok i okolice</p>
                  <p className="text-sm text-cream-muted">zdalnie — cała Polska</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Formularz */}
          <div className="md:col-span-3">
            <div className="bg-ink p-8 shadow-sm md:p-12">
              <h2 className="font-serif text-2xl font-semibold text-cream md:text-3xl">
                Opowiedz nam o swojej przestrzeni
              </h2>
              <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Imię i nazwisko" name="name" />
                  <Field label="E-mail" name="email" type="email" />
                </div>
                <Field label="Temat" name="subject" />
                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-cream-muted">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Metraż, lokalizacja, oczekiwania…"
                    className="mt-2 block w-full border border-hairline bg-ink px-4 py-3 text-base text-cream placeholder:text-cream-muted/60 focus:border-cream focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-dark px-8 py-4 text-sm font-medium text-dark-foreground transition-colors hover:bg-dark/90"
                >
                  Wyślij wiadomość <span aria-hidden>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>