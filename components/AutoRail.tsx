"use client";

import { ReactNode, useEffect, useRef } from "react";

/**
 * Wolna, automatyczna karuzela (marquee). Zawartość duplikowana dla pętli.
 * Pauza na hover / dotyk. Respektuje prefers-reduced-motion.
 */
export default function AutoRail({
  children,
  speed = 0.5,
  className = ""
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const x = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const tick = () => {
      if (!paused.current) {
        x.current -= speed;
        const half = track.scrollWidth / 2;
        if (half > 0 && -x.current >= half) x.current += half;
        track.style.transform = `translateX(${x.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const pause = () => (paused.current = true);
  const play = () => (paused.current = false);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={pause}
      onMouseLeave={play}
      onTouchStart={pause}
      onTouchEnd={play}
    >
      <div ref={trackRef} className="flex w-max gap-5 will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
}
