"use client";

import { useState } from "react";
import { BillingToggle, price } from "./PricingCards";
import { Reveal } from "./Reveal";

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

export default function ComparisonTable() {
  const [annual, setAnnual] = useState(false);

  return (
    <Reveal className="mt-20">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
        <h2 className="text-3xl font-extrabold md:text-4xl">Pełne porównanie planów</h2>
        <BillingToggle annual={annual} onChange={setAnnual} />
      </div>

      <div className="overflow-x-auto rounded-card bg-white p-2 shadow-sm">
        <table className="w-full min-w-[680px] border-collapse text-sm">
          <thead>
            <tr className="text-left font-display">
              <th className="p-4 text-ink/50">Funkcja</th>
              <th className="p-4">Free</th>
              <th className="relative rounded-t-2xl bg-brand-soft p-4 text-brand">
                Standard
                <span className="absolute -top-0 right-3 translate-y-[-50%] rounded-full bg-brand px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  Wybór użytkowników
                </span>
              </th>
              <th className="p-4">Premium</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t border-ink/5">
                <td className="p-4 font-medium">{r[0]}</td>
                <td className="p-4 text-ink/70">{r[1]}</td>
                <td className="bg-brand-soft p-4 font-semibold">{r[2]}</td>
                <td className="p-4 text-ink/70">{r[3]}</td>
              </tr>
            ))}
            <tr className="border-t border-ink/10 font-display font-extrabold">
              <td className="p-4">Cena</td>
              <td className="p-4">0 zł</td>
              <td className="rounded-b-2xl bg-brand-soft p-4 text-brand">
                {price(19, annual)} zł/mies.
                {annual && <span className="ml-2 align-middle text-xs font-bold text-ink/40"><s>19 zł</s></span>}
              </td>
              <td className="p-4">
                {price(39, annual)} zł/mies.
                {annual && <span className="ml-2 align-middle text-xs font-bold text-ink/40"><s>39 zł</s></span>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ink/50">
        Rozliczenie roczne: −30% względem cen miesięcznych. Plan możesz zmienić w dowolnym momencie.
      </p>
    </Reveal>
  );
}
