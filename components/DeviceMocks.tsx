/** Mocki UI aplikacji — czysty CSS, zero obrazków zewnętrznych. */

export function BrowserMock({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-card bg-white shadow-2xl shadow-ink/15 ring-1 ring-ink/10 ${className}`}>
      {/* pasek przeglądarki */}
      <div className="flex items-center gap-3 border-b border-ink/5 bg-cream/70 px-5 py-3">
        <span className="flex gap-1.5">
          <i className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <i className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <i className="h-3 w-3 rounded-full bg-[#28C840]" />
        </span>
        <span className="mx-auto rounded-full bg-white px-4 py-1 text-xs font-medium text-ink/50">
          app.animatwin.com/dashboard
        </span>
      </div>

      <div className="grid grid-cols-[64px_1fr] md:grid-cols-[180px_1fr]">
        {/* sidebar */}
        <aside className="border-r border-ink/5 bg-cream/40 p-3 md:p-4">
          <p className="hidden items-center gap-2 font-display text-sm font-extrabold md:flex">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-xs text-white">🐾</span>
            AnimaTwin
          </p>
          <p className="grid h-8 w-8 place-items-center rounded-full bg-brand text-xs text-white md:hidden">🐾</p>
          <div className="mt-4 space-y-2">
            {["Pulpit", "Medical Hub", "Health Map", "Food Finder", "Kliniki"].map((l, i) => (
              <div
                key={l}
                className={`flex items-center gap-2 rounded-xl px-2.5 py-2 text-xs font-semibold ${
                  i === 0 ? "bg-brand text-white" : "text-ink/60"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-ink/25"}`} />
                <span className="hidden md:inline">{l}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* główny panel */}
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-base font-extrabold md:text-lg">Cześć, tu Bruno 🐕</p>
              <p className="text-[11px] text-ink/50">Labrador · 4 lata · 31,2 kg</p>
            </div>
            <span className="rounded-full bg-ok/10 px-3 py-1 text-[11px] font-bold text-ok">
              Wszystko pod kontrolą
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-[auto_1fr]">
            {/* Health Score ring */}
            <div className="grid place-items-center rounded-2xl bg-cream/70 p-4">
              <div
                className="grid h-24 w-24 place-items-center rounded-full md:h-28 md:w-28"
                style={{ background: "conic-gradient(#FF4800 0 87%, #EAE4DC 87% 100%)" }}
              >
                <div className="grid h-[76%] w-[76%] place-items-center rounded-full bg-white text-center">
                  <span>
                    <span className="block font-display text-xl font-extrabold leading-none md:text-2xl">87</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-ink/45">Score</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-brand-soft px-4 py-3">
                <span className="text-xs font-semibold">💉 Szczepienie przypominające</span>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold text-brand">za 12 dni</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-cream/70 px-4 py-3">
                <span className="text-xs font-semibold">💊 Milprazon 12,5 mg</span>
                <span className="text-[10px] font-bold text-ink/50">dziś · 18:00</span>
              </div>
              <div className="flex items-end gap-1.5 rounded-2xl bg-cream/70 px-4 pb-3 pt-2">
                <span className="mr-2 text-[10px] font-bold uppercase tracking-wider text-ink/45">Waga</span>
                {[40, 55, 48, 62, 70, 64, 78].map((h, i) => (
                  <i
                    key={i}
                    style={{ height: `${h * 0.45}px` }}
                    className={`w-3 rounded-t-md ${i === 6 ? "bg-brand" : "bg-ink/15"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[230px] overflow-hidden rounded-[2.4rem] bg-ink p-2 shadow-2xl shadow-ink/25 ${className}`}>
      <div className="overflow-hidden rounded-[2rem] bg-white">
        {/* notch + status */}
        <div className="relative flex items-center justify-between px-5 pb-1 pt-3 text-[10px] font-bold">
          <span>9:41</span>
          <span className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" />
          <span>📶 🔋</span>
        </div>

        <div className="px-4 pb-4 pt-2">
          <p className="font-display text-sm font-extrabold">Bruno 🐕</p>
          <div className="mt-2 rounded-2xl bg-brand p-3 text-white">
            <p className="text-[9px] font-bold uppercase tracking-wider text-white/70">Health Score</p>
            <p className="font-display text-2xl font-extrabold leading-none">87/100</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/25">
              <i className="block h-full w-[87%] rounded-full bg-white" />
            </div>
          </div>

          <div className="mt-2.5 grid grid-cols-3 gap-1.5">
            {[
              { n: "Stawy", c: "bg-brand" },
              { n: "Nerki", c: "bg-warn" },
              { n: "Serce", c: "bg-ok" }
            ].map((o) => (
              <span key={o.n} className="rounded-xl bg-cream/80 px-1 py-2 text-center text-[9px] font-bold">
                <i className={`mx-auto mb-1 block h-1.5 w-1.5 rounded-full ${o.c}`} />
                {o.n}
              </span>
            ))}
          </div>

          <div className="mt-2.5 space-y-1.5">
            <div className="flex items-center justify-between rounded-xl bg-brand-soft px-3 py-2">
              <span className="text-[10px] font-semibold">💉 Szczepienie</span>
              <span className="text-[9px] font-bold text-brand">za 12 dni</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-cream/80 px-3 py-2">
              <span className="text-[10px] font-semibold">💊 Lek</span>
              <span className="text-[9px] font-bold text-ink/50">18:00</span>
            </div>
          </div>

          {/* tab bar */}
          <div className="mt-3 flex justify-between rounded-2xl bg-ink px-5 py-2.5 text-sm">
            <span>🏠</span><span className="opacity-40">🩺</span><span className="opacity-40">🍖</span><span className="opacity-40">💬</span>
          </div>
        </div>
      </div>
    </div>
  );
}
