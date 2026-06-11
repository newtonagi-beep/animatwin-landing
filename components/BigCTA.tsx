import { BtnLink } from "./Buttons";
import { Reveal } from "./Reveal";

export default function BigCTA() {
  return (
    <section className="px-3 py-6 md:px-6">
      <div className="block-j bg-ink px-6 py-20 text-center text-white md:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold md:text-6xl">
            Nie czekaj, aż pies zachoruje. <span className="text-brand">AnimaTwin ostrzega wcześniej.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-white/60">
            Rejestracja zajmuje 30 sekund. Plan Free na zawsze za 0 zł.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <BtnLink href="/pricing" variant="primary">
              Wypróbuj za darmo
            </BtnLink>
            <BtnLink href="/features" variant="light">
              Zobacz demo
            </BtnLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
