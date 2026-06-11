export const stats = [
  { value: "197", label: "karm w bazie Food Finder" },
  { value: "354", label: "rasy w encyklopedii" },
  { value: "7 248", label: "klinik weterynaryjnych" },
  { value: "12", label: "narządów na Health Map 3D" }
];

export const problems = [
  {
    title: "Rozproszona historia medyczna",
    pain: "Karty papierowe, zeszyty, maile do weterynarza, SMSy z przypomnieniami.",
    fix: "Jedno miejsce na całą historię: wizyty, szczepienia, leki, alergie, wyniki badań, zdjęcia RTG/USG."
  },
  {
    title: "Brak wczesnego ostrzegania",
    pain: "Właściciele często zauważają problem zdrowotny za późno.",
    fix: "Health Map 3D i Health Score 0–100. Kolorowanie narządów ostrzega o potencjalnych problemach."
  },
  {
    title: "Trudność w doborze karmy",
    pain: "Setki marek, składów i porcji — jak wybrać?",
    fix: "Food Finder: baza 197 rzeczywistych karm, porównywarka i kalkulator dziennej porcji."
  },
  {
    title: "Zagubienie w harmonogramie",
    pain: "Kiedy szczepienie, kiedy odrobaczanie, kiedy lek?",
    fix: "Kalendarz zdrowia z kolorowym kodowaniem ważności i przypomnieniami."
  },
  {
    title: "Brak wiedzy o predyspozycjach rasowych",
    pain: "Każda rasa ma typowe choroby, ale nikt ich nie zbiera w jednym miejscu.",
    fix: "Encyklopedia 354 ras z badge'ami ostrzegającymi o typowych problemach zdrowotnych."
  },
  {
    title: "Brak danych dla weterynarza",
    pain: "Wizyta w nowej klinice, a Ty nie pamiętasz daty ostatniej szczepionki.",
    fix: "QR kod / link do publicznego profilu psa — weterynarz skanuje i widzi całą historię."
  }
];

export const features = [
  {
    icon: "🏥",
    name: "Medical Hub",
    short: "Cała historia medyczna w jednym miejscu.",
    points: [
      "Oś czasu wszystkich zdarzeń medycznych — wizyty, badania, zabiegi, notatki",
      "Leki z harmonogramem dawkowania i przypomnieniami",
      "Alergie: alergeny, reakcje, daty wykrycia",
      "Szczepienia z color-codingiem ważności",
      "Galeria RTG/USG w aplikacji",
      "QR / link dla weterynarza z datą ważności",
      "OCR dokumentów medycznych",
      "Auto-sync wizyt z kalendarzem"
    ]
  },
  {
    icon: "🧬",
    name: "Health Map 3D",
    short: "Interaktywny model anatomiczny psa (Three.js).",
    points: [
      "12 narządów: serce, płuca, nerki, wątroba, żołądek, jelita, pęcherz, mózg, oczy, uszy, stawy, skóra",
      "Kolorowanie wg historii: zielony / żółty / czerwony",
      "Nakładka predyspozycji rasowych z suwakiem wieku",
      "Pełna interakcja: obrót, zoom, panel szczegółów narządu",
      "Health Score 0–100"
    ]
  },
  {
    icon: "🍖",
    name: "Food Finder",
    short: "Wybór karmy bez domysłów — same dane.",
    points: [
      "Baza 197 karm, 12 marek — rzeczywiste dane",
      "Makroskładniki: białko, tłuszcz, błonnik, węglowodany",
      "Witaminy i minerały parsowane z dodatków",
      "Filtry i dual range slidery",
      "Porównywarka do 3 karm obok siebie",
      "Kalkulator porcji wg wagi i aktywności"
    ]
  },
  {
    icon: "📚",
    name: "Encyklopedia Ras",
    short: "354 rasy, 22 pola danych każda.",
    points: [
      "Wzrost, waga, długość życia, grupa FCI, charakter, energia",
      "Wyszukiwarka full-text",
      "Filtry: rozmiar (11 kategorii), grupa FCI (12 grup)",
      "Porównywarka do 3 ras — tabela 21 cech",
      "Badge zdrowotne na podstawie typowych chorób rasy"
    ]
  },
  {
    icon: "📍",
    name: "Wyszukiwarka Klinik",
    short: "Największa baza klinik weterynaryjnych w Polsce.",
    points: [
      "7 248 placówek z Krajowej Izby Lekarsko-Weterynaryjnej",
      "Filtry: województwo, typ placówki, 24/7, paszporty",
      "Karty z kontaktem, listą lekarzy i godzinami przyjęć",
      "Paginacja 20 placówek na stronę"
    ]
  },
  {
    icon: "🤖",
    name: "AI Asystent",
    short: "Asystent, który zna profil Twojego psa.",
    points: [
      "Chat ze streamingiem odpowiedzi w czasie rzeczywistym",
      "Kontekst profilu: rasa, wiek, waga, historia medyczna",
      "Smart Command Bar — szybki dostęp z każdego miejsca"
    ]
  },
  {
    icon: "🎨",
    name: "Design System",
    short: "Dostosuj wygląd aplikacji do siebie.",
    points: [
      "Theme Editor — live customization kolorów",
      "Sidebar Editor — drag-and-drop układu menu",
      "Miniaturki zwierząt z rozwijanym subnav"
    ]
  },
  {
    icon: "🧪",
    name: "Quiz doboru rasy",
    short: "Znajdź psa dopasowanego do Twojego życia.",
    points: [
      "27 ras w scoringu",
      "Preferencje: aktywność, przestrzeń, doświadczenie, dzieci, alergie"
    ]
  }
];

export const steps = [
  { n: "01", title: "Rejestracja", desc: "Email + hasło. 30 sekund." },
  { n: "02", title: "Onboarding", desc: "Imię, gatunek, rasa zwierzaka. 3 minuty." },
  { n: "03", title: "Dodaj historię", desc: "Pierwsza wizyta, szczepienie, waga." },
  { n: "04", title: "Health Map", desc: "Model 3D pokazuje stan zdrowia." },
  { n: "05", title: "Gotowe", desc: "Przypomnienia pilnują terminów, QR czeka na weterynarza." }
];

export const plans = [
  {
    name: "Free",
    price: "0 zł",
    period: "na zawsze",
    featured: false,
    items: ["1 zwierzę", "Podstawowy dashboard", "Encyklopedia ras", "Powiadomienia push"]
  },
  {
    name: "Standard",
    price: "19 zł",
    period: "miesięcznie",
    featured: true,
    items: ["Do 3 zwierząt", "Pełny Medical Hub", "Food Finder", "AI Asystent (limit)", "Eksport PDF"]
  },
  {
    name: "Premium",
    price: "39 zł",
    period: "miesięcznie",
    featured: false,
    items: ["Bez limitu zwierząt", "Wszystko ze Standard", "Health Map 3D", "AI Asystent bez limitu", "Priorytetowe wsparcie"]
  }
];

export const testimonials = [
  {
    quote:
      "Wreszcie cała historia Bruna w jednym miejscu. Weterynarz zeskanował QR i od razu wiedział wszystko o szczepieniach.",
    name: "Marta K.",
    pet: "właścicielka labradora"
  },
  {
    quote:
      "Health Map pokazała żółty kolor przy stawach. Pojechaliśmy na kontrolę — wcześnie wykryta dysplazja. Bezcenne.",
    name: "Tomasz W.",
    pet: "właściciel owczarka niemieckiego"
  },
  {
    quote:
      "Kalkulator porcji w Food Finderze skończył nasze domysły. Pies schudł 2 kg i ma więcej energii.",
    name: "Agnieszka P.",
    pet: "właścicielka beagle'a"
  },
  {
    quote:
      "Mam trzy koty i psa. Bez AnimaTwin nie ogarnęłabym terminów odrobaczania. Teraz aplikacja pilnuje wszystkiego.",
    name: "Karolina Z.",
    pet: "właścicielka czterech zwierząt"
  }
];

export const faqs = [
  {
    q: "Czym AnimaTwin różni się od zwykłej aplikacji dla zwierząt?",
    a: "To nie jest aplikacja do zdjęć psa. AnimaTwin to system wczesnego ostrzegania: gromadzi pełną historię medyczną, wizualizuje stan zdrowia na modelu 3D i pomaga podejmować świadome decyzje zdrowotne."
  },
  {
    q: "Czy moje dane są bezpieczne?",
    a: "Tak. Row Level Security na każdej tabeli, szyfrowanie HTTPS, dane wrażliwe dodatkowo szyfrowane, autentykacja Supabase Auth. Platforma jest RODO-ready — możesz usunąć wszystkie dane konta."
  },
  {
    q: "Jak działa QR dla weterynarza?",
    a: "Generujesz publiczny profil psa pod unikalnym tokenem z datą ważności. Weterynarz skanuje kod i widzi historię medyczną — bez zakładania konta. Dostęp wygasa automatycznie."
  },
  {
    q: "Czy AnimaTwin działa dla kotów?",
    a: "Tak — platforma obsługuje psy (główny fokus) i koty. Właściciele wielu zwierząt mogą zarządzać nimi z jednego konta."
  },
  {
    q: "Skąd pochodzą dane o klinikach i karmach?",
    a: "Kliniki: 7 248 placówek z Krajowej Izby Lekarsko-Weterynaryjnej (wetsystems.org.pl). Karmy: 197 rzeczywistych produktów 12 marek z pełnym składem. Rasy: 354 pozycje po 22 pola danych."
  },
  {
    q: "Czy mogę zmienić plan w dowolnym momencie?",
    a: "Tak. Upgrade i downgrade działają natychmiast, rozliczenie proporcjonalne. Plan Free jest bezpłatny na zawsze."
  }
];

export const blogPosts = [
  {
    slug: "dysplazja-stawow-wczesne-objawy",
    title: "Dysplazja stawów u psa — 7 wczesnych objawów, których nie wolno ignorować",
    excerpt:
      "Dysplazja rozwija się miesiącami, zanim pies zacznie kuleć. Sprawdź, jakie sygnały wysyła organizm i jak Health Map 3D pomaga je wychwycić.",
    date: "2026-05-28",
    tag: "Zdrowie"
  },
  {
    slug: "jak-czytac-sklad-karmy",
    title: "Jak czytać skład karmy? Białko, tłuszcz i błonnik bez ściemy",
    excerpt:
      "Marketing na opakowaniu a rzeczywiste makroskładniki to dwie różne rzeczy. Praktyczny przewodnik po etykietach — z przykładami z bazy Food Finder.",
    date: "2026-05-14",
    tag: "Żywienie"
  },
  {
    slug: "kalendarz-szczepien-psa",
    title: "Kalendarz szczepień psa: co, kiedy i dlaczego",
    excerpt:
      "Od pierwszych szczepień szczenięcia po coroczne przypomnienia. Kompletny harmonogram + jak ustawić automatyczne powiadomienia.",
    date: "2026-04-30",
    tag: "Profilaktyka"
  }
];

export const organs = [
  { name: "Serce", status: "ok" },
  { name: "Płuca", status: "ok" },
  { name: "Nerki", status: "warn" },
  { name: "Wątroba", status: "ok" },
  { name: "Żołądek", status: "ok" },
  { name: "Jelita", status: "ok" },
  { name: "Pęcherz", status: "ok" },
  { name: "Mózg", status: "ok" },
  { name: "Oczy", status: "ok" },
  { name: "Uszy", status: "warn" },
  { name: "Stawy", status: "alert" },
  { name: "Skóra", status: "ok" }
] as const;
