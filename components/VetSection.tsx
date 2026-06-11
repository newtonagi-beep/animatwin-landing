import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";

const vet = [
  { t: "Pacjent bez karty?", d: "QR z pełną historią medyczną — skan i wszystko widać." },
  { t: "Brak ciągłości leczenia", d: "Digital Twin przenosi historię między klinikami." },
  { t: "Recepty i zalecenia", d: "Automatyzacja przez platformę zamiast ręcznego wypisywania." }
];

export default function VetSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-j grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Dla weterynarza</Eyebrow>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Skanujesz QR. Widzisz całą historię.
          </h2>
          <p className="mt-5 max-w-md text-ink/60">
            Właściciel generuje publiczny profil psa pod unikalnym tokenem z datą ważności. Żadnych
            kont, żadnych haseł — dostęp wygasa automatycznie.
          </p>
          <div className="mt-9 space-y-5">
            {vet.map((v) => (
              <div key={v.t} className="flex gap-4">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-sm text-brand">
                  ✓
                </span>
                <div>
                  <h3 className="font-display font-bold">{v.t}</h3>
                  <p className="text-sm text-ink/60">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto w-full max-w-sm rounded-card bg-ink p-8 text-white shadow-2xl shadow-ink/20">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-white/50">
              Profil publiczny · ważny 72 h
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold">Bruno · Labrador, 4 lata</p>
            <div className="mt-6 grid grid-cols-7 gap-1 rounded-2xl bg-white p-5" aria-hidden>
              {Array.from({ length: 49 }).map((_, i) => (
                <span
                  key={i}
                  className={`aspect-square rounded-[3px] ${
                    [0,1,2,4,6,7,9,12,14,15,18,20,22,24,26,28,30,33,34,36,39,41,42,44,46,48].includes(i)
                      ? "bg-ink"
                      : "bg-transparent"
                  }`}
                />
              ))}
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>· Szczepienia: ważne (ostatnie 02.2026)</li>
              <li>· Leki aktywne: Milprazon 12,5 mg</li>
              <li>· Alergie: kurczak, pyłki traw</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
