import Link from "next/link";
import { features } from "@/lib/data";
import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";

export default function FeatureCards() {
  const top = features.slice(0, 6);
  return (
    <section className="py-24 md:py-32">
      <div className="container-j">
        <Reveal>
          <Eyebrow>Funkcje</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-6xl">
              Wszystko, czego potrzebuje zdrowy pies
            </h2>
            <Link href="/features" className="link-j font-display font-bold text-brand">
              Wszystkie funkcje →
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {top.map((f, i) => (
            <Reveal key={f.name} delay={Math.min(i * 0.05, 0.25)}>
              <Link
                href="/features"
                className="group flex h-full flex-col rounded-card bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-2xl transition-transform duration-500 group-hover:scale-110">
                  {f.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{f.name}</h3>
                <p className="mt-2 text-sm text-ink/60">{f.short}</p>
                <span className="mt-auto pt-5 font-display text-sm font-bold text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Więcej →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
