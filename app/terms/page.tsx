import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Regulamin — AnimaTwin",
  description: "Regulamin korzystania z platformy AnimaTwin."
};

const sections = [
  {
    h: "§1. Postanowienia ogólne",
    p: "Niniejszy regulamin określa zasady korzystania z platformy AnimaTwin — Pet Digital Twin & AI Guardian, dostępnej pod adresem animatwin.com. Rejestracja konta oznacza akceptację regulaminu."
  },
  {
    h: "§2. Zakres usługi",
    p: "AnimaTwin udostępnia narzędzia do gromadzenia historii medycznej zwierząt, wizualizacji stanu zdrowia (Health Map 3D, Health Score), doboru karmy (Food Finder), przeglądania encyklopedii ras, wyszukiwania klinik weterynaryjnych oraz asystenta AI."
  },
  {
    h: "§3. Charakter informacyjny",
    p: "AnimaTwin nie świadczy usług weterynaryjnych. Health Map, Health Score, badge zdrowotne i odpowiedzi AI Asystenta mają charakter informacyjno-pomocniczy i nie zastępują diagnozy ani konsultacji z lekarzem weterynarii. W przypadku niepokojących objawów skontaktuj się z weterynarzem."
  },
  {
    h: "§4. Konto i plany subskrypcji",
    p: "Dostępne plany: Free (0 zł — 1 zwierzę), Standard (19 zł/mies. — do 3 zwierząt) i Premium (39 zł/mies. — bez limitu). Zmiana planu możliwa w dowolnym momencie z rozliczeniem proporcjonalnym. Subskrypcję można anulować ze skutkiem na koniec okresu rozliczeniowego."
  },
  {
    h: "§5. Obowiązki użytkownika",
    p: "Użytkownik zobowiązuje się do podawania prawdziwych danych, niewykorzystywania platformy w sposób niezgodny z prawem oraz nieudostępniania konta osobom trzecim. Za treści wprowadzone do profilu zwierzęcia odpowiada użytkownik."
  },
  {
    h: "§6. Profil publiczny (QR)",
    p: "Użytkownik może wygenerować publiczny profil zwierzęcia dostępny pod tokenem z datą ważności. Udostępnienie linku osobom trzecim odbywa się na odpowiedzialność użytkownika; dostęp wygasa automatycznie po upływie ważności tokenu."
  },
  {
    h: "§7. Reklamacje",
    p: "Reklamacje należy zgłaszać na hello@animatwin.com. Rozpatrujemy je w terminie 14 dni od otrzymania."
  },
  {
    h: "§8. Postanowienia końcowe",
    p: "Regulamin może ulec zmianie; o zmianach informujemy z 14-dniowym wyprzedzeniem. W sprawach nieuregulowanych zastosowanie mają przepisy prawa polskiego."
  }
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Prawne" title="Regulamin" sub="Obowiązuje od: 11 czerwca 2026" />
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
