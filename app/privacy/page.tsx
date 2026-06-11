import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Polityka prywatności — AnimaTwin",
  description: "Zasady przetwarzania danych osobowych w AnimaTwin."
};

const sections = [
  {
    h: "1. Administrator danych",
    p: "Administratorem danych osobowych jest AnimaTwin (kontakt: hello@animatwin.com). Dbamy o prywatność użytkowników i przetwarzamy dane wyłącznie w zakresie niezbędnym do świadczenia usług."
  },
  {
    h: "2. Jakie dane przetwarzamy",
    p: "Dane konta (email, hasło w postaci zaszyfrowanej), dane profilowe zwierząt (imię, gatunek, rasa, wiek, waga), historię medyczną wprowadzaną przez użytkownika (wizyty, szczepienia, leki, alergie, wyniki badań, zdjęcia diagnostyczne) oraz dane techniczne niezbędne do działania usługi."
  },
  {
    h: "3. Cel i podstawa przetwarzania",
    p: "Dane przetwarzamy w celu świadczenia usługi (art. 6 ust. 1 lit. b RODO), realizacji obowiązków prawnych (lit. c) oraz w prawnie uzasadnionym interesie administratora, np. zapewnienia bezpieczeństwa (lit. f)."
  },
  {
    h: "4. Bezpieczeństwo",
    p: "Stosujemy Row Level Security na każdej tabeli bazy danych — użytkownik ma dostęp wyłącznie do swoich danych. Cała komunikacja odbywa się przez HTTPS, a dane wrażliwe są dodatkowo szyfrowane. Autentykację zapewnia Supabase Auth."
  },
  {
    h: "5. Udostępnianie danych",
    p: "Profil publiczny zwierzęcia (QR / link dla weterynarza) jest udostępniany wyłącznie na żądanie użytkownika, pod unikalnym tokenem z datą ważności. Dostęp wygasa automatycznie. Nie sprzedajemy danych osobowych podmiotom trzecim."
  },
  {
    h: "6. Prawa użytkownika",
    p: "Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz wniesienia sprzeciwu. Platforma jest RODO-ready — możesz w każdej chwili usunąć wszystkie dane konta z poziomu ustawień lub kontaktując się z nami."
  },
  {
    h: "7. Okres przechowywania",
    p: "Dane przechowujemy przez okres posiadania konta. Po usunięciu konta dane są trwale usuwane, z wyjątkiem danych, których przechowywanie wymagają przepisy prawa."
  },
  {
    h: "8. Kontakt",
    p: "W sprawach związanych z ochroną danych osobowych napisz na hello@animatwin.com."
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Prawne" title="Polityka prywatności" sub="Ostatnia aktualizacja: 11 czerwca 2026" />
      <section className="pb-28">
        <div className="container-j max-w-3xl space-y-10">
          {sections.map((s) => (
            <Reveal key={s.h}>
              <h2 className="font-display text-2xl font-bold">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-ink/70">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
