---
activation: Glob
pattern: "src/**/*.ts"
---

# TypeScript Conventions

## Typowanie:
- Zawsze używaj TypeScript strict mode (projekt dziedziczy `astro/tsconfigs/strict`).
- Preferuj `interface` dla kształtu obiektów/Props, `type` dla aliasów typów i unii.
- Zawsze typuj parametry funkcji i zwracane wartości (unikaj `any` — wyjątek: schema.org buildery).
- Nazwy interfejsów zaczynaj od `I`: `INavLink`, `IPortfolioProject`.
- Nazwy typów zaczynaj od `T`: `TSectionIds`.

## Zmienne środowiskowe:
- Dostęp przez `import.meta.env.NAZWA` (nie przez `process.env`).
- Zmienne po stronie serwera (API routes, SSR): dostępne bezpośrednio.
- Zmienne po stronie klienta: muszą mieć prefiks `PUBLIC_` (np. `PUBLIC_GA_ID`).
- Wymagane zmienne środowiskowe projektu:
  - `RESEND_API_KEY` — klucz API Resend (serwer)
  - `CONTACT_EMAIL` — adres docelowy maili z formularza (serwer)

## Moduły i eksporty:
- Używaj named exports (nie default) dla funkcji, klas i stałych w plikach `.ts`.
- Wyjątek: pliki `.astro` używają domyślnie default export komponentu (auto).

## Stałe i konfiguracja:
- Dane konfiguracyjne firmy/projektu trzymaj w `src/consts/site.ts` (obiekt `COMPANY`, `BASE_URL`).
- Linki nawigacyjne i section IDs trzymaj w `src/consts/navLinks.ts`.
- Używaj `enum` dla NavLinks — umożliwia refaktoryzację bez ręcznego szukania stringów.
- Section IDs typuj przez `satisfies TSectionIds<NavLinks>` dla type-safety.

## API Routes (src/pages/api/):
- Każda trasa API musi eksportować `export const prerender = false;` (wymagane dla SSR/Cloudflare).
- Zawsze waliduj dane wejściowe po stronie serwera (nie ufaj klientowi).
- Zwracaj `Response` z nagłówkiem `Content-Type: application/json`.
- Obsługuj błędy przez `try/catch` i zwracaj odpowiednie kody statusu HTTP.

Wzorzec API route:
```ts
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    // walidacja...
    return new Response(
      JSON.stringify({ success: true, message: "OK" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "Błąd serwera." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
```

## Aliasy importów (tsconfig.json):
Zawsze używaj aliasów — NIE ścieżek względnych:
- `@libs/ui/...` — biblioteka UI (komponenty, schematy, interfejsy, style)
- `@constants/...` → `src/consts/...`
- `@schemas/...` → `src/schemas/...`
- `@data/...` → `src/data/...`
