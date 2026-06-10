/**
 * Wrapper do pobierania opinii z Google Places API.
 * Używany WYŁĄCZNIE podczas budowania (SSG) po stronie serwera.
 */

export interface GoogleReview {
    author_name: string;
    author_url: string;
    profile_photo_url: string;
    rating: number;
    text: string;
    time: number;
    relative_time_description: string;
}

export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
    // Zabezpieczenie przed strzałami lokalnie (npm run dev, lokalne npm run build / preview).
    // Serwery Cloudflare Pages podczas budowania zawsze mają włączoną zmienną CF_PAGES="1".
    // Jeśli jej nie ma, skrypt wie, że jest uruchamiany u Ciebie na komputerze.
    const isCloudflare = typeof process !== 'undefined' && process.env.CF_PAGES === '1';

    if (!isCloudflare) {
        console.log("🛠️ Tryb lokalny: Zwracam zamokowane opinie bez odpytywania Google API.");
        return [
            {
                author_name: "Anna Kowalska",
                author_url: "#",
                profile_photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
                rating: 5,
                text: "Współpraca z NOKO Studio to czysta przyjemność. Projekt wnętrza przerósł nasze najśmielsze oczekiwania. Dbałość o detale i świetny kontakt na każdym etapie. Polecam z całego serca!",
                time: Date.now(),
                relative_time_description: "3 tygodnie temu"
            },
            {
                author_name: "Michał Nowak",
                author_url: "#",
                profile_photo_url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
                rating: 5,
                text: "Pełen profesjonalizm. Architekt idealnie wpasował się w nasz gust, a jednocześnie zaproponował bardzo praktyczne rozwiązania, o których sami byśmy nie pomyśleli. Realizacja przebiegła bez stresu.",
                time: Date.now(),
                relative_time_description: "miesiąc temu"
            },
            {
                author_name: "Karolina Wiśniewska",
                author_url: "#",
                profile_photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
                rating: 5,
                text: "Zdecydowanie polecam. Wnętrze jest przepiękne, nowoczesne i przytulne. Bardzo doceniam terminowość i przejrzysty kosztorys od samego początku.",
                time: Date.now(),
                relative_time_description: "2 miesiące temu"
            },
            {
                author_name: "Piotr Zieliński",
                author_url: "#",
                profile_photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
                rating: 5,
                text: "Projekt salonu i kuchni wyszedł rewelacyjnie. Architekci bardzo wsłuchali się w nasze potrzeby. Polecam każdemu, kto szuka spokoju podczas remontu.",
                time: Date.now(),
                relative_time_description: "3 miesiące temu"
            },
            {
                author_name: "Magdalena Kaczmarek",
                author_url: "#",
                profile_photo_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
                rating: 5,
                text: "Najlepsze biuro projektowe w Białymstoku. Niesamowite poczucie smaku i znajomość obecnych trendów. Efekt końcowy dosłownie wbija w fotel.",
                time: Date.now(),
                relative_time_description: "4 miesiące temu"
            },
            {
                author_name: "Kamil Kamiński",
                author_url: "#",
                profile_photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
                rating: 5,
                text: "Ogromna wiedza techniczna. Architekci z NOKO Studio zadbali nie tylko o wygląd, ale też o ergonomię i elektrykę. Ekipa wykończeniowa chwaliła precyzyjne rysunki.",
                time: Date.now(),
                relative_time_description: "pół roku temu"
            }
        ];
    }

    // 2. Pobieranie danych z Google na Produkcji (SSG)
    const API_KEY = import.meta.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = import.meta.env.GOOGLE_PLACE_ID;

    if (!API_KEY || !PLACE_ID) {
        console.warn("Brak kluczy GOOGLE_PLACES_API_KEY lub GOOGLE_PLACE_ID w pliku .env. Zwracam pustą tablicę opinii.");
        return [];
    }

    try {
        // Parametry: language=pl (aby mieć daty po polsku)
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&language=pl&key=${API_KEY}`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Błąd HTTP z Google API: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.status !== "OK") {
            console.error("Błąd API Google:", data.error_message || data.status);
            return [];
        }

        // Zwracamy tablicę opinii z obiektu 'result'
        const reviews: GoogleReview[] = data.result?.reviews || [];
        
        // Zwracamy tylko opinie z oceną 5 gwiazdek (filtrowanie dobrego PR)
        return reviews.filter(r => r.rating === 5);

    } catch (error) {
        console.error("Wystąpił problem podczas pobierania opinii Google:", error);
        return [];
    }
}
