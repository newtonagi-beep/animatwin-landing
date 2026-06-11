import { testimonials } from "@/lib/data";
import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-j">
        <Reveal>
          <Eyebrow>Opinie</Eyebrow>
          <h2 className="text-4xl font-extrabold md:text-6xl">Posłuchaj właścicieli</h2>
        </Reveal>
      </div>
      <div className="container-j mt-12">
        <div className="rail -mx-5 px-5 md:-mx-10 md:px-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i * 0.06, 0.25)} className="shrink-0">
              <figure className="flex h-full w-[84vw] max-w-md flex-col rounded-card bg-white p-8 shadow-sm">
                <span className="font-display text-4xl text-brand">“</span>
                <blockquote className="mt-2 text-lg font-medium leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-7">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft font-display font-bold text-brand">
                    {t.name[0]}
                  </span>
                  <span>
                    <span className="block font-display font-bold">{t.name}</span>
                    <span className="block text-sm text-ink/50">{t.pet}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
