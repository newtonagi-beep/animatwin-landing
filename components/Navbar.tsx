"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BtnLink } from "./Buttons";

const links = [
  { href: "/features", label: "Funkcje" },
  { href: "/pricing", label: "Cennik" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Kontakt" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <div className="container-j">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled || open ? "bg-white/90 shadow-lg shadow-ink/5 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-800 font-extrabold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-base text-white">🐾</span>
            AnimaTwin
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`link-j font-display text-sm font-semibold ${
                  pathname === l.href ? "text-brand" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ml-8 hidden items-center gap-4 md:flex">
            <BtnLink href="/contact" variant="outline" className="!py-2.5 text-sm">
              Zaloguj się
            </BtnLink>
            <BtnLink href="/pricing" variant="dark" className="!py-2.5 text-sm">
              Rozpocznij bezpłatnie
            </BtnLink>
          </div>

          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-white transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-white transition-transform duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.65, 0.05, 0, 1] }}
              className="mt-2 flex flex-col gap-1 rounded-card bg-white p-4 shadow-xl shadow-ink/10 md:hidden"
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-4 py-3 font-display text-lg font-semibold hover:bg-cream"
                >
                  {l.label}
                </Link>
              ))}
              <BtnLink href="/pricing" variant="primary" className="mt-2">
                Rozpocznij bezpłatnie
              </BtnLink>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
