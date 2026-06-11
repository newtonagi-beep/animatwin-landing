import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";
import { BrowserMock, PhoneMock } from "./DeviceMocks";

export default function AppShowcase() {
  return (
    <section className="overflow-hidden bg-white py-24 md:py-32">
      <div className="container-j">
        <Reveal className="text-center">
          <Eyebrow>Web + mobile</Eyebrow>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold md:text-6xl">
            Na komputerze i w kieszeni
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink/60">
            Pełny dashboard w przeglądarce do pracy z historią medyczną — i mobilna wersja z
            przypomnieniami zawsze pod ręką. Te same dane, natychmiastowa synchronizacja.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <Reveal y={50}>
            <BrowserMock />
          </Reveal>
          <Reveal delay={0.2} y={70} className="md:absolute md:-bottom-10 md:-right-10">
            <div className="mt-6 flex justify-center md:mt-0 md:block">
              <PhoneMock className="rotate-[4deg]" />
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            ["🖥️", "Aplikacja webowa", "Pełny Medical Hub, Health Map 3D i edycja danych"],
            ["📱", "Wersja mobilna", "Przypomnienia, QR i szybki podgląd w drodze"],
            ["🔄", "Jedna baza danych", "Zmiana na telefonie od razu widoczna w przeglądarce"]
          ].map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="rounded-card bg-cream p-6 text-center">
                <span className="text-2xl">{ic}</span>
                <h3 className="mt-3 font-display font-bold">{t}</h3>
                <p className="mt-1.5 text-sm text-ink/60">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
