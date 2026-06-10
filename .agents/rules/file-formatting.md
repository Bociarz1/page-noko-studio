# Reguła: Formatowanie i Wewnętrzna Budowa Plików

Jako asystent AI, MUSISZ bezwzględnie przestrzegać poniższych zasad pisania kodu dla poszczególnych rozszerzeń plików. 

## 1. Pliki `.astro` (Komponenty i Strony)

- **Struktura Frontmatter (blok `---`):**
  MUSI zawsze zachowywać następującą kolejność, z wyraźnymi odstępami (pustymi liniami) między sekcjami:
  1. Importy zewnętrzne (paczki z NPM, np. `astro:assets`).
  2. Importy wewnętrzne (aliasy, np. `@components`, `@utils`).
  3. Definicja interfejsu `Props` (jeśli plik jest komponentem).
  4. Dekonstrukcja `Astro.props` z określonymi wartościami domyślnymi.
  5. Logika i obliczanie zmiennych pomocniczych dla HTML.
- **Struktura HTML i Klasy BEM:** 
  Zawsze używaj semantycznego HTML5 (`<section>`, `<article>`, `<header>`, `<main>`). Atrybuty klas zawsze umieszczaj jako pierwsze. **Wszystkie nazwy klas MUSZĄ bezwzględnie przestrzegać konwencji BEM** (Block__Element--Modifier).
- **Optymalizacja SEO i Dostępność (A11y):**
  1. Każda strona WWW MUSI zawierać dokładnie jeden tag `<h1>`.
  2. MUSI być zachowana poprawna hierarchia nagłówków (nie wolno przeskakiwać poziomów, np. skok z `<h1>` od razu do `<h3>` jest ZABRONIONY). Prawidłowo: `h1` → `h2` → `h3`.
  3. Wszystkie interaktywne elementy (przyciski, linki) MUSZĄ posiadać poprawne atrybuty `aria-label` lub widoczny dla czytników ekranu tekst.
  4. Ikony pełniące wyłącznie rolę dekoracyjną MUSZĄ bezwzględnie posiadać atrybut `aria-hidden="true"`.
- **Blok `<style>`:** 
  Zawsze używaj atrybutu `lang="scss"` (`<style lang="scss">`). Kategoryczny ZAKAZ korzystania ze starej dyrektywy `@import`. Jeśli potrzebujesz dostępu do zmiennych/mixinów, MUSISZ użyć `@use` na samej górze bloku stylu (np. `@use '@styles/_global.scss' as *;`).
- **Skrypty (`<script>`):**
  Jeśli komponent wymaga logiki po stronie klienta (JavaScript), blok `<script>` MUSI pojawić się pod blokiem `<style>`. Zgodnie z zasadą współlokacji, logika skryptu MUSI być wydzielona do osobnego pliku `.ts` umieszczonego w tym samym folderze i zaimportowana wewnątrz tagu, np: `<script src="./NazwaKomponentu.ts"></script>`.

## 2. Pliki `.scss` (Style)

- **Mobile First:** Wszystkie style MUSZĄ być pisane w podejściu MOBILE FIRST. Podstawowe reguły (pisane luzem) dotyczą urządzeń mobilnych. Dla większych ekranów kategoryczny ZAKAZ używania klasycznych zapytań `@media (min-width: ...)` – zamiast tego MUSISZ używać wyłącznie dedykowanego mixinu: `@include mq('tablet')`, `@include mq('desktop')` itp.
- **Jednostki (REM vs PX):** Bezwzględny NAKAZ używania jednostek `rem` do określania wielkości czcionek (typografii), marginesów (margin) oraz odstępów wewnętrznych (padding). Kategoryczny ZAKAZ używania sztywnych pikseli (`px`) w tych przypadkach ze względu na dostępność (Accessibility). Piksele są dozwolone wyłącznie do bardzo cienkich obramowań (np. `border: 1px solid`) lub absolutnie sztywnych, mikroskopijnych elementów.
- **Modułowość:** Używaj wyłącznie dyrektywy `@use`.
- **Głębokość Zagnieżdżenia (Nesting):** Kategoryczny ZAKAZ zagnieżdżania selektorów głębiej niż 3 poziomy, z wyjątkiem reguł pseudo-klas (`&:hover`, `&::before`). 
- **Zmienne CSS zamiast Klas Narzędziowych (Utility Classes):** Zmienne CSS określające typografię, kolory, z-index itp. MUSZĄ być używane bezpośrednio we właściwościach komponentu (np. `font-size: var(--font-size-lg);`). Kategoryczny ZAKAZ tworzenia i używania globalnych klas narzędziowych (np. `.text-medium`, `.bg-red`), jak ma to miejsce w Tailwind CSS.
- **Zmienne CSS vs SCSS:** Używaj natywnych zmiennych CSS do kolorów i czcionek. Zmienne SCSS (np. `$breakpoint-mobile`) są dozwolone WYŁĄCZNIE dla mediów (media queries) i twardych kalkulacji rozmiarów.
- **Hermetyzacja:** W plikach `.scss` należących do komponentów (wzorzec współlokacji), WSZYSTKIE reguły MUSZĄ być zamknięte w obrębie głównej klasy BEM tego komponentu (np. `.hero { ... }`), aby zapobiec konfliktom globalnym.
- **Zarządzanie Fontami (Typografia):** Kategoryczny ZAKAZ wklepywania na sztywno nazw fontów ani nadpisywania właściwości `font-family` w izolowanych komponentach. Globalna konfiguracja fontów z użyciem zmiennych deklarowana jest w pliku `_global.scss` i tylko stamtąd należy je dziedziczyć.

## 3. Pliki `.ts` (TypeScript)

- **Rygorystyczne Typowanie:** Kategoryczny ZAKAZ używania typu `any`. Każda funkcja, zmienna zewnętrzna i odpowiedź sieciowa MUSI mieć zdefiniowany twardy `interface` lub `type`.
- **Eksporty:** W plikach narzędziowych (`utils/`, `seo/`) zawsze stosuj nazwane eksporty (np. `export const formatDate = ...`). Eksport domyślny (`export default`) jest używany wyjątkowo, np. w plikach konfiguracyjnych.
- **Dokumentacja w Kodzie (JSDoc):** Każda skomplikowana funkcja logiki biznesowej MUSI być poprzedzona blokiem `/** ... */`, który krótko i zwięźle wyjaśnia jej przeznaczenie oraz parametry wejściowe.

## 4. Pliki `.json` (np. Manifesty i Konfiguracja)
- **Formatowanie:** Obowiązują zasady wcięć (najczęściej 2 spacje), podyktowane przez globalny plik `.prettierrc`.
- **Zasada:** Brak komentarzy (JSON ich nie obsługuje) i wymóg absolutnej ścisłości w zamykaniu klamer.
