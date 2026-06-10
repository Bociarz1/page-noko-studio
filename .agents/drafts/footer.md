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