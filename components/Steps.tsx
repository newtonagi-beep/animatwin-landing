"use client";

import { steps } from "@/lib/data";
import { Eyebrow } from "./Buttons";
import { Reveal } from "./Reveal";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.5"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-j grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow>Jak działa</Eyebrow>
            <h2 className="text-4xl font-extrabold md:text-6xl">
              Proste,
              <br />
              szybkie
              <br />
              <span className="text-brand">&amp; pewne</span>
            </h2>
            <p className="mt-6 max-w-sm text-ink/60">
              Od rejestracji do pierwszego ostrzeżenia Health Map — pięć kroków, kilka minut.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div aria-hidden className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-ink/10" />
          <motion.div
            aria-hidden
            style={{ scaleY: reduce ? 1 : scaleY }}
            className="absolute bottom-6 left-[1.35rem] top-6 w-px origin-top bg-brand"
          />
          <ol className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <li className="flex gap-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/10 bg-white font-display text-sm font-bold">
                    {s.n}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                    <p className="mt-1 text-ink/60">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
