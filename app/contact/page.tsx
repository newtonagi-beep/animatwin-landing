"use client";

import { FormEvent, useState } from "react";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-2xl border border-ink/15 bg-white px-5 py-4 text-sm outline-none transition-colors duration-300 focus:border-brand";

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Porozmawiajmy"
        sub="Pytanie o produkt, współpraca dla klinik, media — napisz, odpowiadamy w 24 h."
      />
      <section className="pb-28">
        <div className="container-j grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="space-y-7">
              <div>
                <h2 className="font-display text-sm font-bold uppercase tracking-widest text-ink/45">
                  Email
                </h2>
                <a href="mailto:hello@animatwin.com" className="link-j font-display text-2xl font-bold">
                  hello@animatwin.com
                </a>
              </div>
              <div>
                <h2 className="font-display text-sm font-bold uppercase tracking-widest text-ink/45">
                  Strona
                </h2>
                <p className="font-display text-2xl font-bold">animatwin.com</p>
              </div>
              <div className="rounded-card bg-brand p-7 text-white">
                <h2 className="font-display text-xl font-bold">Jesteś weterynarzem?</h2>
                <p className="mt-2 text-sm text-white/80">
                  Budujemy panel dla klinik: QR pacjenta, ciągłość leczenia, automatyzacja zaleceń.
                  Napisz — dołącz do programu pilotażowego.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            {sent ? (
              <div className="grid h-full place-items-center rounded-card bg-white p-12 text-center shadow-sm">
                <div>
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ok/10 text-3xl text-ok">
                    ✓
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-bold">Wiadomość wysłana</h2>
                  <p className="mt-2 text-ink/60">Odpowiemy na podany adres w ciągu 24 godzin.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 rounded-card bg-white p-8 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block font-display text-sm font-semibold">Imię i nazwisko</span>
                    <input required name="name" autoComplete="name" className={field} placeholder="Jan Kowalski" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-display text-sm font-semibold">Email</span>
                    <input required type="email" name="email" autoComplete="email" className={field} placeholder="jan@przyklad.pl" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block font-display text-sm font-semibold">Temat</span>
                  <select name="topic" className={field} defaultValue="produkt">
                    <option value="produkt">Pytanie o produkt</option>
                    <option value="klinika">Współpraca — klinika weterynaryjna</option>
                    <option value="media">Media / partnerstwo</option>
                    <option value="inne">Inne</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block font-display text-sm font-semibold">Wiadomość</span>
                  <textarea required name="message" rows={6} className={field} placeholder="W czym możemy pomóc?" />
                </label>
                <button type="submit" className="btn-primary w-full">
                  <span className="lbl" data-text="Wyślij wiadomość">
                    Wyślij wiadomość
                  </span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
