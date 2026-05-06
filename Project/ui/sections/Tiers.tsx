const tiers = [
  { name: "Gray", range: "0", color: "#4A4A4A", glowRgb: "74, 74, 74" },
  { name: "Purple", range: "1–24", color: "var(--aura-purple)", glowRgb: "var(--aura-purple-rgb)" },
  { name: "Blue", range: "25–74", color: "var(--aura-blue)", glowRgb: "var(--aura-blue-rgb)" },
  { name: "Green", range: "75–149", color: "var(--aura-green)", glowRgb: "var(--aura-green-rgb)" },
  { name: "Yellow", range: "150–299", color: "var(--aura-yellow)", glowRgb: "var(--aura-yellow-rgb)" },
  { name: "Orange", range: "300–499", color: "var(--aura-orange)", glowRgb: "var(--aura-orange-rgb)" },
  { name: "Red", range: "500+", color: "var(--aura-red)", glowRgb: "var(--aura-red-rgb)" },
];

export default function Tiers() {
  return (
    <section id="tiers" className="relative z-10 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-aura-black/50">
            Aura tiers
          </p>
          <h2 className="reveal mt-4 text-balance text-4xl font-black leading-tight tracking-tight text-aura-black sm:text-5xl md:text-6xl">
            Climb the rainbow.
          </h2>
          <p className="reveal mt-4 text-lg text-aura-black/65">
            Every challenge you complete bumps you up the ladder. Higher tier =
            harder to fake = louder flex.
          </p>
        </div>

        <div className="mt-10">
          <div className="rounded-3xl border border-black/10 bg-white/85 p-3 backdrop-blur sm:p-4 lg:p-6 shadow-[0_18px_36px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:gap-3">
              {tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className="reveal flex flex-1 min-w-[120px] flex-col items-center"
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className="relative aspect-square w-full max-w-[110px] rounded-2xl border border-white/40 transition-transform hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${tier.color}, color-mix(in srgb, ${tier.color} 70%, white))`,
                      boxShadow: `0 12px 28px rgba(${tier.glowRgb}, 0.45), inset 0 0 28px rgba(255,255,255,0.18)`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] sm:text-4xl">
                        {i + 1}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-extrabold text-aura-black sm:text-base">
                    {tier.name}
                  </p>
                  <p className="text-xs font-medium text-aura-black/55">
                    {tier.range} aura
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
