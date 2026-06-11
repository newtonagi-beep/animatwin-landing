"use client";

import { useState } from "react";
import { organs } from "@/lib/data";
import { BtnLink } from "./Buttons";
import { Reveal } from "./Reveal";

const tone = {
  ok: { dot: "bg-ok", label: "OK" },
  warn: { dot: "bg-warn", label: "Monitoruj" },
  alert: { dot: "bg-white", label: "Wymaga uwagi" }
} as const;

export default function HealthMapShowcase() {
  const [active, setActive] = useState(10); // Stawy

  return (
    <section className="px-3 py-6 md:px-6">
      <div className="block-j bg-brand px-6 py-20 text-white md:px-16 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Flagowa funkcja
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Widzisz zdrowie psa w trzech wymiarach.
            </h2>
            <p className="mt-6 max-w-md text-white/80">
              Interaktywny model anatomiczny (Three.js) koloruje 12 narządów na podstawie historii
              medycznej. Nakładka predyspozycji rasowych z suwakiem wieku pokazuje ryzyka, zanim
              staną się problemem.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-medium text-white/90">
              <li>→ Health Score 0–100 podsumowuje ogólny stan</li>
              <li>→ Kliknięcie narządu otwiera panel szczegółów</li>
              <li>→ Obrót, zoom i pan — pełna interakcja</li>
            </ul>
            <div className="mt-10">
              <BtnLink href="/features" variant="light">
                Zobacz demo
              </BtnLink>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-card bg-white/10 p-6 backdrop-blur-sm md:p-8">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-bold uppercase tracking-widest text-white/70">
                  Health Score
                </p>
                <p className="font-display text-3xl font-extrabold">87/100</p>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[87%] rounded-full bg-white" />
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                {organs.map((o, i) => (
                  <button
                    key={o.name}
                    onClick={() => setActive(i)}
                    className={`rounded-xl px-2 py-3 text-center text-xs font-semibold transition-all duration-300 ${
                      active === i
                        ? "scale-105 bg-white text-brand shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    <span
                      className={`mx-auto mb-1.5 block h-2 w-2 rounded-full ${
                        o.status === "alert" ? "bg-brand ring-2 ring-white" : tone[o.status].dot
                      }`}
                    />
                    {o.name}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-ink/20 p-4">
                <p className="font-display text-lg font-bold">{organs[active].name}</p>
                <p className="text-sm text-white/80">
                  Status: {tone[organs[active].status].label}
                  {organs[active].status !== "ok" &&
                    " · sugerowana kontrola weterynaryjna na podstawie historii i predyspozycji rasy"}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
