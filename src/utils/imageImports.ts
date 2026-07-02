/**
 * Moduł z pre-ładowanymi mapami grafów obrazów dla całego projektu.
 * Używa import.meta.glob (Vite) do statycznego zindeksowania wszystkich zasobów.
 * Dzięki temu komponenty mogą dynamicznie wiązać ścieżki string (z CMS)
 * z obiektami ImageMetadata (wymaganymi przez komponent <Image /> w Astro).
 */
import type { ImageMetadata } from 'astro';

export const blogImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/blog/**/*.{jpeg,jpg,png,webp,avif}'
);

export const portfolioImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/portfolio/**/*.{jpeg,jpg,png,webp,avif}'
);

export const authorImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/authors/*.{jpeg,jpg,png,webp,avif}'
);

/**
 * Rozwiązuje ścieżkę string (absolutna od root projektu, np. /src/assets/blog/...)
 * na obiekt ImageMetadata potrzebny komponentowi <Image />.
 * Rzuca błąd podczas budowania jeśli plik nie istnieje.
 */
export async function resolveImage(
  graph: Record<string, () => Promise<{ default: ImageMetadata }>>,
  path: string
): Promise<ImageMetadata> {
  // Normalize relative paths from CMS back to absolute root paths for import.meta.glob
  const normalizedPath = path.startsWith('../../assets/') 
    ? path.replace('../../assets/', '/src/assets/') 
    : path;

  const loader = graph[normalizedPath];
  if (!loader) {
    throw new Error(
      `[imageImports] Obraz "${normalizedPath}" (oryginalnie: "${path}") nie istnieje w repozytorium. ` +
      `Sprawdź ścieżkę w frontmatter pliku Markdown.`
    );
  }
  return (await loader()).default;
}
