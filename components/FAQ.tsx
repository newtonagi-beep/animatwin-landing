"use client";

import { faqs } from "@/lib/data";
import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-j grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-4xl font-extrabold md:text-5xl">Najczęstsze pytania</h2>
          <p className="mt-5 max-w-sm text-ink/60">
            Nie znalazłeś odpowiedzi? Napisz na hello@animatwin.com — odpowiadamy w 24 h.
          </p>
        </Reveal>
        <div className="divide-y divide-ink/10">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-bold">{f.q}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 transition-transform duration-300 ${
                      open === i ? "rotate-45 bg-brand text-white" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.65, 0.05, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-ink/65">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
