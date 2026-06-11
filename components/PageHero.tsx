import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  sub
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="pb-14 pt-40 md:pb-20 md:pt-48">
      <div className="container-j">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-4xl text-5xl font-extrabold md:text-7xl">{title}</h1>
          {sub && <p className="mt-6 max-w-xl text-lg text-ink/65">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}
