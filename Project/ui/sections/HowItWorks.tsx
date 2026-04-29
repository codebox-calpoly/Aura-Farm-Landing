const steps = [
  {
    number: "01",
    title: "Pick a challenge",
    description:
      "Browse a feed of hand-crafted campus challenges — from hiking the P to finding the secret library bookshelf.",
    color: "var(--aura-red)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Snap proof. Post it.",
    description:
      "Show up, hit the camera, write a caption, and submit. Every post is reviewed before it lands on the feed — no fakes, no bots.",
    color: "var(--aura-orange)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Farm aura. Climb ranks.",
    description:
      "Stack aura points and watch your tier glow up from gray to red across the global and friends-only leaderboards.",
    color: "var(--aura-purple)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-aura-black/50">
            How it works
          </p>
          <h2 className="reveal mt-4 text-balance text-4xl font-black leading-tight tracking-tight text-aura-black sm:text-5xl md:text-6xl">
            Three steps. Real campus.{" "}
            <span className="aura-gradient-text">Infinite aura.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal step-card group relative overflow-hidden rounded-3xl border border-black/10 bg-white/85 p-7 shadow-[0_18px_36px_rgba(0,0,0,0.06)] backdrop-blur transition-transform hover:-translate-y-1"
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1.5"
                style={{ background: step.color }}
                aria-hidden="true"
              />
              <div className="flex items-center justify-between">
                <span
                  className="rounded-2xl p-3 text-white"
                  style={{ background: step.color }}
                >
                  <span className="block h-7 w-7" aria-hidden="true">
                    {step.icon}
                  </span>
                </span>
                <span
                  className="text-5xl font-black tracking-tight"
                  style={{ color: step.color, opacity: 0.18 }}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-extrabold leading-tight text-aura-black">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-aura-black/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
