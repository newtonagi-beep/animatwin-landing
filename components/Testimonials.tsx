import { testimonials } from "@/lib/data";
import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";
import AutoRail from "./AutoRail";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-j">
        <Reveal>
          <Eyebrow>Opinie</Eyebrow>
          <h2 className="text-4xl font-extrabold md:text-6xl">Posłuchaj właścicieli</h2>
        </Reveal>
      </div>
      <Reveal className="mt-12">
        <AutoRail speed={0.45} className="px-5 md:px-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex w-[84vw] max-w-md shrink-0 flex-col rounded-card bg-white p-8 shadow-sm"
            >
              <span className="font-display text-4xl leading-none text-brand">“</span>
              <blockquote className="mt-2 text-lg font-medium leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={`Zdjęcie: ${t.name}`}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-soft"
                />
                <span>
                  <span className="block font-display font-bold">{t.name}</span>
                  <span className="block text-sm text-ink/50">{t.pet}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </AutoRail>
      </Reveal>
    </section>
  );
}
