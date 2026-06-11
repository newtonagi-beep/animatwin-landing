import Link from "next/link";
import { features } from "@/lib/data";
import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";

/** Mini-wizualizacje funkcji — nowoczesne, czysto CSS-owe. */
function FeatureVisual({ index }: { index: number }) {
  switch (index) {
    case 0: // Medical Hub — oś czasu
      return (
        <div className="space-y-2.5 p-5">
          {[
            ["💉", "Szczepienie · ważne", "bg-ok/15 text-ok"],
            ["🩻", "RTG stawu biodrowego", "bg-ink/5 text-ink/60"],
            ["💊", "Milprazon · 18:00", "bg-brand-soft text-brand"]
          ].map(([ic, t, c]) => (
            <div key={t} className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 shadow-sm">
              <span className="text-base">{ic}</span>
              <span className="flex-1 text-xs font-semibold">{t}</span>
              <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${c}`}>●</span>
            </div>
          ))}
        </div>
      );
    case 1: // Health Map — ring + narządy
      return (
        <div className="flex items-center justify-center gap-5 p-5">
          <div
            className="grid h-24 w-24 shrink-0 place-items-center rounded-full"
            style={{ background: "conic-gradient(#FF4800 0 87%, rgba(19,18,20,0.08) 87% 100%)" }}
          >
            <div className="grid h-[74%] w-[74%] place-items-center rounded-full bg-white font-display text-xl font-extrabold">
              87
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[["Serce", "bg-ok"], ["Nerki", "bg-warn"], ["Stawy", "bg-brand"], ["Płuca", "bg-ok"]].map(([n, c]) => (
              <span key={n} className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold shadow-sm">
                <i className={`h-1.5 w-1.5 rounded-full ${c}`} /> {n}
              </span>
            ))}
          </div>
        </div>
      );
    case 2: // Food Finder — slidery + makro
      return (
        <div className="space-y-3 p-5">
          {[["Białko", 72], ["Tłuszcz", 45], ["Błonnik", 28]].map(([n, v]) => (
            <div key={n as string}>
              <div className="mb-1 flex justify-between text-[10px] font-bold">
                <span>{n}</span>
                <span className="text-brand">{v}%</span>
              </div>
              <div className="relative h-2 rounded-full bg-white shadow-inner">
                <i className="absolute left-0 top-0 h-full rounded-full bg-brand" style={{ width: `${v}%` }} />
                <i className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-white shadow ring-2 ring-brand" style={{ left: `calc(${v}% - 7px)` }} />
              </div>
            </div>
          ))}
        </div>
      );
    case 3: // Encyklopedia — chipy ras
      return (
        <div className="flex flex-wrap content-center gap-2 p-5">
          {["Labrador", "Beagle", "Owczarek", "Husky", "Pudel", "Bokser", "Jamnik"].map((r, i) => (
            <span
              key={r}
              className={`rounded-full px-3 py-1.5 text-[11px] font-bold shadow-sm ${
                i === 0 ? "bg-brand text-white" : "bg-white"
              }`}
            >
              {r}
            </span>
          ))}
        </div>
      );
    case 4: // Kliniki — mapa z pinami
      return (
        <div className="relative h-full min-h-[140px] p-5">
          <div className="absolute inset-4 rounded-2xl bg-white shadow-inner" />
          {[["18%", "26%"], ["55%", "18%"], ["72%", "48%"], ["34%", "58%"], ["60%", "72%"]].map(([l, t], i) => (
            <span
              key={i}
              style={{ left: l, top: t }}
              className={`absolute grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-[10px] shadow ${
                i === 2 ? "scale-125 bg-brand text-white" : "bg-white"
              }`}
            >
              📍
            </span>
          ))}
          <span className="absolute bottom-6 right-6 rounded-full bg-ink px-2.5 py-1 text-[9px] font-bold text-white">
            24/7
          </span>
        </div>
      );
    default: // AI — czat
      return (
        <div className="space-y-2 p-5">
          <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-3 py-2 text-[11px] font-medium text-white">
            Bruno drapie ucho — co robić?
          </p>
          <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[11px] font-medium shadow-sm">
            U labradorów w tym wieku to częsty sygnał alergii. W historii Bruna jest uczulenie na
            kurczaka — sprawdźmy karmę…
          </p>
          <span className="flex w-fit gap-1 rounded-full bg-white px-3 py-2 shadow-sm">
            <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand [animation-delay:150ms]" />
            <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand [animation-delay:300ms]" />
          </span>
        </div>
      );
  }
}

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
                className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10"
              >
                <div className="h-44 bg-gradient-to-br from-cream to-brand-soft/60 transition-transform duration-700 group-hover:scale-[1.02]">
                  <FeatureVisual index={i} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                    <span>{f.icon}</span> {f.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">{f.short}</p>
                  <span className="mt-auto pt-4 font-display text-sm font-bold text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Więcej →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
