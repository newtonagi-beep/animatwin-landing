"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BtnLink } from "./Buttons";
import { RevealWords, Reveal } from "./Reveal";
import { BrowserMock } from "./DeviceMocks";

const easeJet = [0.65, 0.05, 0, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden pb-10 pt-36 md:pt-44">
      {/* tło: delikatny gradient + siatka */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px]"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 0%, rgba(255,72,0,0.10), transparent 70%)"
        }}
      />

      <div className="container-j relative z-10 text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeJet }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.14em] backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Pet Digital Twin &amp; AI Guardian
        </motion.p>

        <h1 className="mx-auto max-w-5xl text-[12vw] font-extrabold leading-[0.95] md:text-[6.2rem]">
          <RevealWords text="Jedna aplikacja" />
          <span className="block text-brand">
            <RevealWords text="dla zdrowia psa" />
          </span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: easeJet }}
          className="mx-auto mt-6 max-w-xl text-lg text-ink/70"
        >
          Pełna historia medyczna, ostrzeżenia zanim pojawi się problem i przypomnienia, które
          pilnują terminów. Wirtualna kopia zdrowia, która ewoluuje razem z Twoim psem.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: easeJet }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <BtnLink href="/pricing" variant="primary">
            Rozpocznij bezpłatnie
          </BtnLink>
          <BtnLink href="/features" variant="outline">
            Sprawdź, jak działa
          </BtnLink>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-5 text-sm text-ink/50"
        >
          Plan Free na zawsze za 0 zł · bez karty płatniczej
        </motion.p>

        {/* grafika hero: mock dashboardu + pływające karty */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          <Reveal delay={0.2} y={60}>
            <BrowserMock />
          </Reveal>

          <FloatCard className="-left-6 top-10 hidden rotate-[-6deg] lg:block" label="Health Score" value="87/100" tone="ok" delay={1.0} />
          <FloatCard className="-right-8 top-24 hidden rotate-[5deg] lg:block" label="Szczepienie" value="za 12 dni" tone="warn" delay={1.15} />
          <FloatCard className="-bottom-6 -right-4 hidden rotate-[-4deg] lg:block" label="Wizyta kontrolna" value="zsynchronizowano" tone="brand" delay={1.3} />
        </div>
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
      transition={{ delay, duration: 0.9, ease: easeJet }}
      className={`absolute z-10 rounded-card bg-white px-5 py-4 shadow-xl shadow-ink/10 ${className}`}
    >
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/50">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        {label}
      </p>
      <p className="mt-1 font-display text-xl font-bold">{value}</p>
    </motion.div>
  );
}
