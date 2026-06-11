import Link from "next/link";
import { BtnLink } from "./Buttons";

const cols = [
  {
    title: "Start",
    items: [
      { href: "/pricing", label: "Rozpocznij bezpłatnie" },
      { href: "/contact", label: "Zaloguj się" }
    ]
  },
  {
    title: "Odkrywaj",
    items: [
      { href: "/features", label: "Funkcje" },
      { href: "/pricing", label: "Cennik" },
      { href: "/blog", label: "Blog" }
    ]
  },
  {
    title: "Firma",
    items: [
      { href: "/contact", label: "Kontakt" },
      { href: "/blog", label: "Aktualności" }
    ]
  },
  {
    title: "Prawne",
    items: [
      { href: "/privacy", label: "Polityka prywatności" },
      { href: "/terms", label: "Regulamin" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-20 text-white">
      <div className="container-j">
        <div className="flex flex-col gap-12 border-b border-white/10 pb-14 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2 font-display text-2xl font-extrabold">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand">🐾</span>
              AnimaTwin
            </Link>
            <p className="mt-5 text-white/60">
              Pet Digital Twin & AI Guardian. Wirtualna kopia zdrowia Twojego zwierzaka, która
              ewoluuje razem z nim.
            </p>
            <div className="mt-6 flex gap-3">
              <BtnLink href="/pricing" variant="primary">
                Rozpocznij bezpłatnie
              </BtnLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-white/40">
                  {c.title}
                </h4>
                <ul className="space-y-3">
                  {c.items.map((i) => (
                    <li key={i.label}>
                      <Link href={i.href} className="link-j text-sm text-white/80 hover:text-white">
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 select-none text-center font-display text-[16vw] font-extrabold leading-none tracking-tighter text-white/5">
          AnimaTwin
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} AnimaTwin. Wszelkie prawa zastrzeżone.</p>
          <p>hello@animatwin.com · animatwin.com</p>
        </div>
      </div>
    </footer>
  );
}
