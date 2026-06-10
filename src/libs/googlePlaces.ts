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
    // import.meta.env jest standardowym i bezpiecznym sposobem dostępu do .env w Astro SSG
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
