import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BigCTA from "@/components/BigCTA";
import { features } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Funkcje — AnimaTwin",
  description:
    "Medical Hub, Health Map 3D, Food Finder, encyklopedia +350 ras, +7 tys. klinik, AI Asystent — wszystkie funkcje AnimaTwin."
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Funkcje"
        title="Twoje zwierzę zasługuje na cyfrowego strażnika zdrowia"
        sub="Osiem narzędzi, jedna aplikacja. Każde zbudowane na rzeczywistych danych — bez placeholderów."
      />
      <section className="pb-24">
        <div className="container-j space-y-6">
          {features.map((f, i) => (
            <Reveal key={f.name} delay={0.05}>
              <article
                className={`grid gap-8 rounded-card p-8 md:grid-cols-[1fr_1.4fr] md:p-12 ${
                  i % 4 === 1
                    ? "bg-ink text-white"
                    : i % 4 === 3
                      ? "bg-brand text-white"
                      : "bg-white"
                }`}
              >
                <div>
                  <span className="text-4xl">{f.icon}</span>
                  <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">{f.name}</h2>
                  <p className={`mt-3 text-lg ${i % 4 === 1 || i % 4 === 3 ? "text-white/75" : "text-ink/60"}`}>
                    {f.short}
                  </p>
                </div>
                <ul className="grid content-start gap-3 sm:grid-cols-2">
                  {f.points.map((p) => (
                    <li
                      key={p}
                      className={`rounded-2xl p-4 text-sm font-medium ${
                        i % 4 === 1
                          ? "bg-white/10"
                          : i % 4 === 3
                            ? "bg-white/15"
                            : "bg-cream"
                      }`}
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <BigCTA />
    </>
  );
}
