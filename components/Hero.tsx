"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BtnLink } from "./Buttons";
import { RevealWords } from "./Reveal";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28">
      <motion.div style={{ y, opacity }} className="container-j relative z-10 text-center">
        <h1 className="mx-auto max-w-5xl text-[13vw] font-extrabold leading-[0.95] md:text-[6.5rem]">
          <RevealWords text="Jedna aplikacja" />
          <span className="block text-brand">
            <RevealWords text="dla zdrowia psa" />
          </span>
        </h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.65, 0.05, 0, 1] }}
          className="mx-auto mt-6 max-w-xl text-lg text-ink/70"
        >
          Pełna historia medyczna Twojego psa. W jednym miejscu. Zawsze pod ręką. Wirtualna kopia
          zdrowia, która ewoluuje razem z nim.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.65, 0.05, 0, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <BtnLink href="/pricing" variant="primary">
            Rozpocznij bezpłatnie
          </BtnLink>
          <BtnLink href="/features" variant="outline">
            Sprawdź, jak działa
          </BtnLink>
        </motion.div>
      </motion.div>

      {/* dekoracyjne karty w tle */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <FloatCard className="left-[6%] top-[22%] hidden rotate-[-7deg] lg:block" label="Health Score" value="87/100" tone="ok" delay={0.9} />
        <FloatCard className="right-[7%] top-[28%] hidden rotate-[6deg] lg:block" label="Szczepienie" value="za 12 dni" tone="warn" delay={1.05} />
        <FloatCard className="bottom-[16%] left-[12%] hidden rotate-[4deg] lg:block" label="Lek · Milprazon" value="dziś 18:00" tone="brand" delay={1.2} />
        <FloatCard className="bottom-[14%] right-[10%] hidden rotate-[-5deg] lg:block" label="Wizyta kontrolna" value="zsynchronizowano" tone="ok" delay={1.35} />
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <span className="flex flex-col items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
          Scroll
          <motion.span
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="block h-8 w-px bg-ink/30"
          />
        </span>
      </div>
    </section>
  );
}

function FloatCard({
  className,
  label,
  value,
  tone,
  delay
}: {
  className: string;
  label: string;
  value: string;
  tone: "ok" | "warn" | "brand";
  delay: number;
}) {
  const reduce = useReducedMotion();
  const dot = { ok: "bg-ok", warn: "bg-warn", brand: "bg-brand" }[tone];
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.9, ease: [0.65, 0.05, 0, 1] }}
      className={`absolute rounded-card bg-white px-5 py-4 shadow-xl shadow-ink/10 ${className}`}
    >
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/50">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        {label}
      </p>
      <p className="mt-1 font-display text-xl font-bold">{value}</p>
    </motion.div>
  );
}
