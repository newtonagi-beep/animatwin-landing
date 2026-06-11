import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingCards from "@/components/PricingCards";
import FAQ from "@/components/FAQ";
import BigCTA from "@/components/BigCTA";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Cennik — AnimaTwin",
  description: "Free 0 zł, Standard 19 zł/mies., Premium 39 zł/mies. Porównaj plany AnimaTwin."
};

const rows: [string, string, string, string][] = [
  ["Liczba zwierząt", "1", "Do 3", "Bez limitu"],
  ["Dashboard", "Podstawowy", "Pełny Medical Hub", "Pełny Medical Hub"],
  ["Encyklopedia ras", "✓", "✓", "✓"],
  ["Powiadomienia push", "✓", "✓", "✓"],
  ["Food Finder", "—", "✓", "✓"],
  ["AI Asystent", "—", "Z limitem", "Bez limitu"],
  ["Eksport PDF", "—", "✓", "✓"],
  ["Health Map 3D", "—", "—", "✓"],
  ["Priorytetowe wsparcie", "—", "—", "✓"]
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Cennik"
        title="Prosty cennik. Zero ukrytych opłat."
        sub="Zacznij bezpłatnie i przejdź wyżej, gdy Twój pies (albo stado) będzie tego potrzebować."
      />
      <section className="pb-24">
        <div className="container-j">
          <PricingCards />

          <Reveal className="mt-20">
            <h2 className="mb-8 text-3xl font-extrabold md:text-4xl">Pełne porównanie planów</h2>
            <div className="overflow-x-auto rounded-card bg-white p-2 shadow-sm">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="text-left font-display">
                    <th className="p-4 text-ink/50">Funkcja</th>
                    <th className="p-4">Free</th>
                    <th className="p-4 text-brand">Standard</th>
                    <th className="p-4">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r[0]} className="border-t border-ink/5">
                      <td className="p-4 font-medium">{r[0]}</td>
                      <td className="p-4 text-ink/70">{r[1]}</td>
                      <td className="p-4 font-semibold">{r[2]}</td>
                      <td className="p-4 text-ink/70">{r[3]}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-ink/10 font-display font-extrabold">
                    <td className="p-4">Cena</td>
                    <td className="p-4">0 zł</td>
                    <td className="p-4 text-brand">19 zł/mies.</td>
                    <td className="p-4">39 zł/mies.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
      <FAQ />
      <BigCTA />
    </>
  );
}
