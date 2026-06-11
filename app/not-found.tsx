import { BtnLink } from "@/components/Buttons";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center px-5 pt-24 text-center">
      <div>
        <p className="font-display text-[28vw] font-extrabold leading-none text-brand md:text-[14rem]">
          404
        </p>
        <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Ta strona uciekła za piłką</h1>
        <p className="mx-auto mt-4 max-w-md text-ink/60">
          Strona, której szukasz, nie istnieje albo zmieniła adres. Wróć na stronę główną — tam
          wszystko jest na swoim miejscu.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <BtnLink href="/" variant="primary">
            Wróć do strony głównej
          </BtnLink>
          <BtnLink href="/contact" variant="outline">
            Zgłoś problem
          </BtnLink>
        </div>
      </div>
    </section>
  );
}
