/**
 * Baza opinii klientów NOKO Studio z profilu Google Maps.
 * Statyczna, szybka i niezależna od zewnętrznych zapytań API.
 */

export interface GoogleReview {
    author_name: string;
    author_url: string;
    profile_photo_url?: string;
    rating: number;
    text: string;
    time: number;
    relative_time_description: string;
}

export const reviews: GoogleReview[] = [
    {
        author_name: "Paulina Rzońca",
        author_url: "https://www.google.com/maps/contrib/114752130521728826826/reviews",
        rating: 5,
        text: "Współpraca z Panią Olą i Pauliną była prawdziwą przyjemnością. Z przekonaniem mogę powiedzieć, że jestem bardzo zadowolona z efektów ich pracy. Profesjonalne podejście, szczegółowy wywiad oraz duża uważność na potrzeby moje i męża, świetne pomysły i doradztwo na każdym etapie.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 300,
        relative_time_description: "10 miesięcy temu"
    },
    {
        author_name: "Katarzyna Rulka",
        author_url: "https://www.google.com/maps/contrib/106267022785178016920/reviews",
        rating: 5,
        text: "Bardzo udana konsultacja projektowa. Po wcześniejszym wysłaniu rzutu mieszkania na bieżąco podczas spotkania ustawialiśmy meble, czy dokonywaliśmy innych zmian. Przed spotkaniem miałam sporo wątpliwości co do funkcjonalności mojego mieszkania, które zostały w pełni rozwiane.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 90,
        relative_time_description: "3 miesiące temu"
    },
    {
        author_name: "Ilona Retajczyk",
        author_url: "https://www.google.com/maps/contrib/101696040966115010974/reviews",
        rating: 5,
        text: "Z czystym sumieniem polecam współpracę z dziewczynami! Jestem niezwykle wdzięczna za pomoc przy moim projekcie. Wszystko przebiegło profesjonalnie, ale w bardzo miłej atmosferze. Od początku czułam, że moje wnętrze jest w dobrych rękach.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 120,
        relative_time_description: "4 miesiące temu"
    },
    {
        author_name: "Anna Majewska",
        author_url: "https://www.google.com/maps/contrib/111397474179054567100/reviews",
        rating: 5,
        text: "Razem z mężem szukaliśmy dobrego architekta wnętrz i po sprawdzeniu wielu biur w Białymstoku cieszymy się, że postawiliśmy właśnie na nie. Dziewczyny mają niesamowite wyczucie stylu i genialne pomysły, na które sami byśmy nigdy nie wpadli.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 120,
        relative_time_description: "4 miesiące temu"
    },
    {
        author_name: "Justyna Polak",
        author_url: "https://www.google.com/maps/contrib/104728898283327384785/reviews",
        rating: 5,
        text: "Bardzo polecam. Po konsultacjach z Panią Olą czuć dużą dawkę wiedzy, doświadczenia i świetnego doboru możliwości do wnętrza. Najnowsze trendy i rozwiązania, które naprawdę się sprawdzają na lata. Zadowolenie gwarantowane. Pozdrawiam serdecznie!",
        time: Date.now() - 1000 * 60 * 60 * 24 * 30,
        relative_time_description: "miesiąc temu"
    },
    {
        author_name: "Gosia Karłuk",
        author_url: "https://www.google.com/maps/contrib/109043506395745767293/reviews",
        rating: 5,
        text: "Pełen profesjonalizm i ogromna wiedza techniczna Pani Pauliny i Pani Aleksandry. Projektantki idealnie wykorzystały każdy centymetr kwadratowy naszego mieszkania, proponując cudowne rozwiązania, na które sami byśmy nie wpadli.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 120,
        relative_time_description: "4 miesiące temu"
    },
    {
        author_name: "Xzej",
        author_url: "https://www.google.com/maps/contrib/117283063477326088661/reviews",
        rating: 5,
        text: "Współpraca z architektem wnętrz z Białegostoku przebiegła bardzo profesjonalnie. Dwie dziewczyny prowadzące pracownię przygotowały nowoczesny i funkcjonalny projekt, dopasowany do naszych oczekiwań. Świetny kontakt, duże zaangażowanie i pełen profesjonalizm.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 150,
        relative_time_description: "5 miesięcy temu"
    },
    {
        author_name: "Alicja Rzońca",
        author_url: "https://www.google.com/maps/contrib/109970352111216628724/reviews",
        rating: 5,
        text: "Z całego serca polecam! Panie niezwykle profesjonalne, zaangażowane i zawsze można było liczyć na ich wsparcie na każdym etapie współpracy. Doskonale odczytały nasze preferencje i potrzeby, dzięki czemu wszystko przebiegło sprawnie i w miłej atmosferze.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 240,
        relative_time_description: "8 miesięcy temu"
    },
    {
        author_name: "Grzegorz Markiewicz",
        author_url: "https://www.google.com/maps/contrib/111901297254810150155/reviews",
        rating: 5,
        text: "Z przyjemnością polecam firmę Noko Studio! Skorzystałem z ich oferty projektowania mieszkania i cały proces przebiegł naprawdę wzorowo. Jako osoba, która nie miała dużej wiedzy ani doświadczenia w tym zakresie, mogłem liczyć na pełną pomoc i fachowe doradztwo.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 300,
        relative_time_description: "10 miesięcy temu"
    },
    {
        author_name: "Tomasz Żemojda",
        author_url: "https://www.google.com/maps/contrib/109687838307605141703/reviews",
        rating: 5,
        text: "Współpraca z projektantkami z Noko Studio to czysta przyjemność! Ich pomysły oraz zmysł estetyczny trafiają idealnie w gust klienta, a każdy projekt jest nie tylko piękny, ale też w pełni przemyślany i funkcjonalny. Na każdym etapie widać pasję i profesjonalizm.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 330,
        relative_time_description: "11 miesięcy temu"
    },
    {
        author_name: "Rafał Siemieniuk",
        author_url: "https://www.google.com/maps/contrib/102140822336150269811/reviews",
        rating: 5,
        text: "Ciekawe realizacje. Architekt wnętrz z Białegostoku z dużym wyczuciem stylu.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 30,
        relative_time_description: "miesiąc temu"
    },
    {
        author_name: "Piotr Tomczyk",
        author_url: "https://www.google.com/maps/contrib/102941283679728135798/reviews",
        rating: 5,
        text: "Doskonała usługa w bardzo rozsądnej cenie, Panie bardzo komunikatywne i zaangażowane w projekt, rezultat przekroczył oczekiwania. Gorąco polecam Noko Studio!",
        time: Date.now() - 1000 * 60 * 60 * 24 * 300,
        relative_time_description: "10 miesięcy temu"
    },
    {
        author_name: "Hunting Expedition",
        author_url: "https://www.google.com/maps/contrib/113504837810458233991/reviews",
        rating: 5,
        text: "Najlepsi specjaliści, profesjonaliści w każdym calu. Bardzo dziękuję za pomoc przy budowie. Jestem mega zadowolony.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 300,
        relative_time_description: "10 miesięcy temu"
    },
    {
        author_name: "Natalia Er",
        author_url: "https://www.google.com/maps/contrib/112888831168503770735/reviews",
        rating: 5,
        text: "Współpraca z dziewczynami na najwyższym poziomie, pełne zaangażowanie, profesjonalizm i imponująca kreatywność, bardzo polecam.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 365,
        relative_time_description: "rok temu"
    },
    {
        author_name: "Rafał Kosiński",
        author_url: "https://www.google.com/maps/contrib/110438598855809462521/reviews",
        rating: 5,
        text: "Super obsługa od A do Z.",
        time: Date.now() - 1000 * 60 * 60 * 24 * 120,
        relative_time_description: "4 miesiące temu"
    },
    {
        author_name: "Michał Sierzputowski",
        author_url: "https://www.google.com/maps/contrib/105003389606990845323/reviews",
        rating: 5,
        text: "Ocena 5.0 ★ na profilu Google Maps",
        time: Date.now() - 1000 * 60 * 60 * 24 * 120,
        relative_time_description: "4 miesiące temu"
    },
    {
        author_name: "Gustaff",
        author_url: "https://www.google.com/maps/contrib/112158213067429635975/reviews",
        rating: 5,
        text: "Ocena 5.0 ★ na profilu Google Maps",
        time: Date.now() - 1000 * 60 * 60 * 24 * 150,
        relative_time_description: "5 miesięcy temu"
    }
];

export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
    return reviews;
}

export default reviews;
