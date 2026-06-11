import { plans } from "@/lib/data";
import { BtnLink } from "./Buttons";
import { Reveal } from "./Reveal";

export default function PricingCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {plans.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.08}>
          <article
            className={`relative flex h-full flex-col rounded-card p-8 ${
              p.featured
                ? "bg-ink text-white shadow-2xl shadow-ink/25 lg:-translate-y-3"
                : "border border-ink/10 bg-white"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-brand px-4 py-1 font-display text-xs font-bold uppercase tracking-wider text-white">
                Najpopularniejszy
              </span>
            )}
            <h3 className="font-display text-xl font-bold">{p.name}</h3>
            <p className="mt-4 font-display text-5xl font-extrabold">
              {p.price}
              <span className={`ml-2 text-base font-medium ${p.featured ? "text-white/50" : "text-ink/50"}`}>
                {p.period}
              </span>
            </p>
            <ul className={`mt-8 space-y-3 text-sm ${p.featured ? "text-white/85" : "text-ink/75"}`}>
              {p.items.map((it) => (
                <li key={it} className="flex gap-3">
                  <span className={p.featured ? "text-brand" : "text-ok"}>✓</span>
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-9">
              <BtnLink
                href="/contact"
                variant={p.featured ? "primary" : "outline"}
                className="w-full"
              >
                {p.price === "0 zł" ? "Rozpocznij bezpłatnie" : `Wybierz ${p.name}`}
              </BtnLink>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
