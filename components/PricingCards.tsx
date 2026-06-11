"use client";

import { useState } from "react";
import { plans, ANNUAL_DISCOUNT } from "@/lib/data";
import { BtnLink } from "./Buttons";
import { Reveal } from "./Reveal";

export function BillingToggle({
  annual,
  onChange
}: {
  annual: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white p-1">
      <button
        onClick={() => onChange(false)}
        aria-pressed={!annual}
        className={`rounded-full px-5 py-2 font-display text-sm font-bold transition-colors duration-300 ${
          !annual ? "bg-ink text-white" : "text-ink/60 hover:text-ink"
        }`}
      >
        Miesięcznie
      </button>
      <button
        onClick={() => onChange(true)}
        aria-pressed={annual}
        className={`flex items-center gap-2 rounded-full px-5 py-2 font-display text-sm font-bold transition-colors duration-300 ${
          annual ? "bg-ink text-white" : "text-ink/60 hover:text-ink"
        }`}
      >
        Rocznie
        <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-extrabold text-white">
          −30%
        </span>
      </button>
    </div>
  );
}

export function price(priceM: number, annual: boolean) {
  if (priceM === 0) return 0;
  return annual ? Math.round(priceM * (1 - ANNUAL_DISCOUNT)) : priceM;
}

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <BillingToggle annual={annual} onChange={setAnnual} />
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((p, i) => {
          const val = price(p.priceM, annual);
          return (
            <Reveal key={p.name} delay={i * 0.08}>
              <article
                className={`relative flex h-full flex-col rounded-card p-8 ${
                  p.featured
                    ? "bg-ink text-white shadow-2xl shadow-ink/25 lg:-translate-y-3"
                    : "border border-ink/10 bg-white"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand px-4 py-1 font-display text-xs font-bold uppercase tracking-wider text-white">
                    Wybór użytkowników
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-4 font-display text-5xl font-extrabold">
                  {val} zł
                  <span className={`ml-2 text-base font-medium ${p.featured ? "text-white/50" : "text-ink/50"}`}>
                    {p.priceM === 0 ? "na zawsze" : "/ mies."}
                  </span>
                </p>
                {p.priceM > 0 && (
                  <p className={`mt-1 text-xs ${p.featured ? "text-white/50" : "text-ink/50"}`}>
                    {annual ? (
                      <>
                        <s>{p.priceM} zł</s> · rozliczenie roczne ({val * 12} zł/rok)
                      </>
                    ) : (
                      <>przy płatności rocznej: {price(p.priceM, true)} zł/mies.</>
                    )}
                  </p>
                )}
                <ul className={`mt-7 space-y-3 text-sm ${p.featured ? "text-white/85" : "text-ink/75"}`}>
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className={p.featured ? "text-brand" : "text-ok"}>✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-9">
                  <BtnLink
                    href="/contact"
                    variant={p.featured ? "primary" : "outline"}
                    className="w-full"
                  >
                    {p.priceM === 0 ? "Rozpocznij bezpłatnie" : `Wybierz ${p.name}`}
                  </BtnLink>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
