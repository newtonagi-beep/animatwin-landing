"use client";

import { stats } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const num = parseInt(target.replace(/\s/g, ""), 10);
  const [val, setVal] = useState(reduce ? num : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const dur = 1400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setVal(Math.round(num * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, num, reduce]);

  return <span ref={ref}>{val.toLocaleString("pl-PL")}</span>;
}

export default function Stats() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-j">
        <Reveal>
          <h2 className="text-center text-4xl font-extrabold md:text-5xl">
            197 karm. 354 rasy. 7 248 klinik. <span className="text-brand">Jedna aplikacja.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.65, 0.05, 0, 1] }}
                className="rounded-card border border-ink/10 p-8 text-center"
              >
                <p className="font-display text-5xl font-extrabold text-brand md:text-6xl">
                  <Counter target={s.value} />
                </p>
                <p className="mt-3 text-sm font-medium text-ink/60">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
