import { problems } from "@/lib/data";
import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";
import AutoRail from "./AutoRail";

export default function Problems() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-j">
        <Reveal>
          <Eyebrow>Problemy, które znasz</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-extrabold md:text-6xl">
            Karta w szufladzie, wyniki w mailu, terminy w głowie?
          </h2>
        </Reveal>
      </div>
      <Reveal className="mt-12">
        <AutoRail speed={0.55} className="px-5 md:px-10">
          {problems.map((p) => (
            <article
              key={p.title}
              className="flex w-[82vw] max-w-sm shrink-0 flex-col rounded-card bg-white p-7 shadow-sm transition-transform duration-500 hover:-translate-y-1.5"
            >
              <h3 className="font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-ink/55">{p.pain}</p>
              <div className="mt-auto pt-6">
                <p className="rounded-2xl bg-brand-soft p-4 text-sm font-medium text-ink">
                  <span className="mb-1 block font-display text-xs font-bold uppercase tracking-wider text-brand">
                    AnimaTwin
                  </span>
                  {p.fix}
                </p>
              </div>
            </article>
          ))}
        </AutoRail>
      </Reveal>
    </section>
  );
}
