export default function CalPolyCallout() {
  return (
    <section className="relative z-10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div
          className="reveal relative overflow-hidden rounded-3xl border border-black/10 bg-aura-black p-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.25)] sm:p-12 md:p-16"
          data-reveal
        >
          <div
            className="absolute inset-0 opacity-60"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(45% 70% at 0% 100%, rgba(var(--aura-green-rgb), 0.45), transparent 60%), radial-gradient(45% 70% at 100% 0%, rgba(var(--aura-red-rgb), 0.45), transparent 60%)",
            }}
          />

          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-aura-green" />
                Cal Poly exclusive
              </span>
              <h2 className="mt-5 text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Built for SLO.{" "}
                <span className="aura-gradient-text-light">
                  Mustangs only.
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/75 sm:text-lg">
                Aura Farm starts at one campus. We&apos;re hand-crafting every
                challenge with a real student crew so the experience feels alive
                from day one. Sign up with your{" "}
                <span className="font-semibold text-white">@calpoly.edu</span>{" "}
                email to join the launch.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-aura-black transition hover:bg-white/90"
                >
                  Reserve your spot
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Read the FAQ
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <CalloutStat number="100%" label="photo proof" />
                <CalloutStat number="500+" label="aura at red tier" />
                <CalloutStat number="7" label="aura tiers" />
                <CalloutStat number="0" label="ads, ever" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalloutStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">
        {number}
      </p>
      <p className="mt-1 text-sm font-medium text-white/65">{label}</p>
    </div>
  );
}
