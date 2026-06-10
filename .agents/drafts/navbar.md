//NAVBAR
import { useEffect, useState } from "react";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#udogodnienia", label: "Udogodnienia" },
  { href: "#okolica", label: "Okolica" },
  { href: "#galeria", label: "Galeria" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color-mix(in_oklab,var(--cream)_85%,transparent)] border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span
            className="inline-block h-2 w-2 rounded-full transition-transform group-hover:scale-125"
            style={{ backgroundColor: "var(--moss)" }}
          />
          <span
            className="font-display text-xl tracking-tight"
            style={{ color: scrolled ? "var(--forest-deep)" : "var(--cream)" }}
          >
            Wiżajny <em className="not-italic" style={{ color: "var(--wood)" }}>Slow</em>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-2 transition-colors hover:text-[var(--wood)]"
                style={{ color: scrolled ? "var(--forest-deep)" : "color-mix(in oklab, var(--cream) 90%, transparent)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Menu"
            className="md:hidden rounded-md p-2"
            style={{ color: scrolled ? "var(--forest-deep)" : "var(--cream)" }}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <ul className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}