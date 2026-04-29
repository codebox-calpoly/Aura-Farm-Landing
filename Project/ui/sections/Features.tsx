const features = [
  {
    title: "Photo-proof posts",
    description:
      "Every challenge submission ships with a real photo and caption. No location-spoofing, no AI slop — just receipts.",
    color: "var(--aura-red)",
    glow: "var(--aura-red-rgb)",
    badge: "PROOF",
  },
  {
    title: "Reviewed before it lands",
    description:
      "Posts go through a quick moderation pass before they hit the feed. Your aura only counts after it's verified.",
    color: "var(--aura-orange)",
    glow: "var(--aura-orange-rgb)",
    badge: "REVIEW",
  },
  {
    title: "7 aura tiers, rainbow ladder",
    description:
      "Climb gray → purple → blue → green → yellow → orange → red. Your tier is your reputation.",
    color: "var(--aura-green)",
    glow: "var(--aura-green-rgb)",
    badge: "TIER",
  },
  {
    title: "Friend leaderboards",
    description:
      "Add your crew, watch your friends' aura totals climb in real time. Talk smack. Beat them. Repeat.",
    color: "var(--aura-blue)",
    glow: "var(--aura-blue-rgb)",
    badge: "VS",
  },
  {
    title: "Community flags",
    description:
      "Spotted something sketchy in the feed? Flag it. Five flags per user per week — use them wisely.",
    color: "var(--aura-purple)",
    glow: "var(--aura-purple-rgb)",
    badge: "FLAG",
  },
  {
    title: "Cal Poly only. For now.",
    description:
      "@calpoly.edu emails only. We're starting with one campus to build something real before going wide.",
    color: "var(--aura-yellow)",
    glow: "var(--aura-yellow-rgb)",
    badge: "SLO",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-aura-black/50">
            Features
          </p>
          <h2 className="reveal mt-4 text-balance text-4xl font-black leading-tight tracking-tight text-aura-black sm:text-5xl md:text-6xl">
            Built for people who actually leave their dorm.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-black/10 bg-white/85 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-black/20"
              data-reveal
              style={{
                transitionDelay: `${i * 60}ms`,
                boxShadow: `0 16px 30px -12px rgba(${f.glow}, 0.18)`,
              }}
            >
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20 transition-opacity group-hover:opacity-40"
                style={{
                  background: `radial-gradient(circle, rgba(${f.glow}, 0.55), rgba(${f.glow}, 0) 70%)`,
                }}
                aria-hidden="true"
              />
              <span
                className="inline-flex h-9 items-center rounded-full px-3 text-xs font-extrabold tracking-wide text-white"
                style={{ background: f.color }}
              >
                {f.badge}
              </span>
              <h3 className="relative mt-5 text-2xl font-extrabold leading-tight text-aura-black">
                {f.title}
              </h3>
              <p className="relative mt-3 text-base leading-relaxed text-aura-black/65">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
