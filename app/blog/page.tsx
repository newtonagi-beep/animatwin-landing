import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BigCTA from "@/components/BigCTA";
import { blogPosts } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog — AnimaTwin",
  description: "Artykuły o zdrowiu, żywieniu i profilaktyce psów."
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Wiedza, która wyprzedza chorobę"
        sub="Praktyczne artykuły o zdrowiu, żywieniu i profilaktyce — pisane na danych, nie na domysłach."
      />
      <section className="pb-24">
        <div className="container-j grid gap-6 md:grid-cols-3">
          {blogPosts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article className="group flex h-full cursor-pointer flex-col rounded-card bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-soft px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-brand">
                    {p.tag}
                  </span>
                  <time dateTime={p.date} className="text-xs text-ink/45">
                    {new Date(p.date).toLocaleDateString("pl-PL", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}
                  </time>
                </div>
                <h2 className="mt-5 font-display text-xl font-bold leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm text-ink/60">{p.excerpt}</p>
                <span className="mt-auto pt-6 font-display text-sm font-bold text-brand">
                  Czytaj dalej →
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <BigCTA />
    </>
  );
}
