export default function Marquee() {
  const items = [
    "+195 karm",
    "+350 ras",
    "+7 tys. klinik",
    "Health Map 3D",
    "AI Asystent",
    "QR dla weterynarza",
    "OCR dokumentów",
    "Health Score 0–100"
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-cream py-5">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg font-bold uppercase tracking-wide text-ink/70">
            {t}
            <span className="text-brand">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
