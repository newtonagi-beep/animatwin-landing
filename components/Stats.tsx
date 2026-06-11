import { stats } from "@/lib/data";
import { Reveal } from "./Reveal";

export default function Stats() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-j">
        <Reveal>
          <h2 className="text-center text-4xl font-extrabold md:text-5xl">
            +195 karm. +350 ras. +7 tys. klinik.{" "}
            <span className="text-brand">Jedna aplikacja.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-card border border-ink/10 p-8 text-center transition-transform duration-500 hover:-translate-y-1.5">
                <p className="font-display text-5xl font-extrabold text-brand md:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm font-medium text-ink/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
