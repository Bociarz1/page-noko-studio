# Reguła: Środowisko Wdrożeniowe (Deployments)

Jako asystent AI, MUSISZ bezwzględnie przestrzegać poniższych wytycznych dotyczących konfiguracji i wdrożenia aplikacji. Ten projekt jest optymalizowany specjalnie pod architekturę Cloudflare Pages.

## 1. Stack Wdrożeniowy
- **Hosting:** Cloudflare Pages
- **Adapter:** `@astrojs/cloudflare` (wersja 13+)
- **Output Mode:** `static` (SSG – Static Site Generation) jako domyślny tryb dla stron. Wyjątkiem są Trasy API (API Routes), które mogą być dynamiczne.
- **Node.js:** Wymagana wersja to `>= 22.12.0`.

## 2. Konfiguracja (`astro.config.mjs`)
Agent modyfikujący plik konfiguracji MUSI zachować następujące ustawienia wydajnościowe:
- `site`: URL produkcyjny docelowego klienta.
- `output: "static"`: Zmień na `"hybrid"` TYLKO w ostateczności, jeśli dany klient ewidentnie wymaga specyficznego SSR (Server-Side Rendering) dla pojedynczych stron.
- `adapter: cloudflare({ imageService: "compile" })`: Wymagane ustawienie adaptera z włączoną kompilacją obrazów podczas budowania (build-time).
- `build.inlineStylesheets: "always"`: Wymusza wstrzykiwanie CSS bezpośrednio do pliku HTML (inline CSS). Drastycznie poprawia to wskaźnik LCP i całkowicie eliminuje problem FOUC (Flash of Unstyled Content).
- `integrations: [sitemap()]`: Wtyczka odpowiedzialna za automatyczne generowanie `sitemap-index.xml`.

## 3. Trasy Dynamiczne i API (API Routes)
Każdy plik będący punktem końcowym API (np. plik `src/pages/api/contact.ts` obsługujący wysyłkę formularzy) MUSI posiadać na samej górze eksport:
```ts
export const prerender = false;
```
**UWAGA:** Bez tej linijki, kompilator wygeneruje statyczny plik tekstowy zamiast interaktywnego skryptu, a Cloudflare Edge Functions nie zadziałają!

## 4. Zmienne Środowiskowe (Secrets)
- Zmienne MUSZĄ być przechowywane w pliku `.env` (lokalnie dla dewelopera) oraz w panelu Cloudflare Pages (dla produkcji).
- Plik `.env` jest na liście `.gitignore` – **NIGDY nie commituj kluczy API do repozytorium GitHub.**
- Do poprawnego działania modułów kontaktowych w szablonie, bezwzględnie wymagane są w środowisku klucze:
  - `RESEND_API_KEY` — Twój prywatny klucz dostępu do platformy Resend (obsługa maili).
  - `CONTACT_EMAIL` — Docelowy adres e-mail klienta, na który formularz kontaktowy ma dostarczać zapytania.
