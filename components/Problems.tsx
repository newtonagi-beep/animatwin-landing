"use client";

import { problems } from "@/lib/data";
import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";

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
      <div className="container-j mt-12">
        <div className="rail -mx-5 px-5 md:-mx-10 md:px-10">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 0.06, 0.3)} className="shrink-0">
              <article className="flex h-full w-[82vw] max-w-sm flex-col rounded-card bg-white p-7 shadow-sm transition-transform duration-500 hover:-translate-y-1.5">
                <h3 className="text-xl font-bold">{p.title}</h3>
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
            </Reveal>
          ))}
        </div>
        <p className="mt-2 text-center text-xs uppercase tracking-widest text-ink/40 md:hidden">
          Przesuń, aby zobaczyć więcej →
        </p>
      </div>
    </section>
  );
}
