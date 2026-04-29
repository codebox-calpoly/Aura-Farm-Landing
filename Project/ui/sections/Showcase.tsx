const blocks = [
  {
    eyebrow: "Live feed",
    title: "Watch your campus play in real time.",
    description:
      "Every approved post lands in the feed with a photo, caption, and aura points. Like it, flag it, or just hype your friends — it's a campus-wide highlight reel.",
    bullet: ["Photo + caption proof", "Likes and reactions", "5 weekly community flags"],
    color: "var(--aura-red)",
  },
  {
    eyebrow: "Profile + tier",
    title: "Your aura, on display.",
    description:
      "Personal profile with your tier glow, post history, friends, and aura total. The cleaner your run, the louder your shine.",
    bullet: ["Animated tier badge", "Post history", "Friends list"],
    color: "var(--aura-orange)",
  },
  {
    eyebrow: "Leaderboard",
    title: "Top of campus or bust.",
    description:
      "Tier-based and global leaderboards update in real time. Slip a spot? You'll feel it. Pass a friend? You'll hear it.",
    bullet: ["All-tier global ranking", "Friends-only board", "Live updates"],
    color: "var(--aura-blue)",
  },
];

export default function Showcase() {
  return (
    <section className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 sm:px-6 lg:px-10">
        {blocks.map((b, i) => (
          <div
            key={b.title}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="reveal" data-reveal>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wide backdrop-blur"
                style={{ color: b.color }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: b.color }}
                />
                {b.eyebrow}
              </span>
              <h3 className="mt-5 text-balance text-3xl font-black leading-tight tracking-tight text-aura-black sm:text-4xl md:text-5xl">
                {b.title}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-aura-black/65 sm:text-lg">
                {b.description}
              </p>
              <ul className="mt-6 space-y-3">
                {b.bullet.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base font-medium text-aura-black/80"
                  >
                    <span
                      className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: b.color }}
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m2.5 6 2.5 2.5L9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal" data-reveal>
              <ShowcaseVisual variant={i} color={b.color} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShowcaseVisual({ variant, color }: { variant: number; color: string }) {
  return (
    <div
      className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-black/10 bg-white/85 p-6 shadow-[0_24px_48px_rgba(0,0,0,0.08)] backdrop-blur"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, ${color} 8%, white), white 60%)`,
      }}
    >
      {variant === 0 && <FeedVisual color={color} />}
      {variant === 1 && <ProfileVisual color={color} />}
      {variant === 2 && <LeaderboardVisual color={color} />}
    </div>
  );
}

function FeedVisual({ color }: { color: string }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-extrabold text-aura-black">Hike the P</p>
            <p className="text-xs text-aura-black/55">@rkota · just now</p>
          </div>
          <span
            className="rounded-full px-2.5 py-1 text-xs font-extrabold text-white"
            style={{ background: color }}
          >
            +50
          </span>
        </div>
        <div
          className="mt-3 aspect-[16/10] rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${color}, color-mix(in srgb, ${color} 30%, white))`,
          }}
        />
      </div>
      <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-extrabold text-aura-black">Find Waldo</p>
          <span
            className="rounded-full px-2.5 py-1 text-xs font-extrabold text-white"
            style={{ background: "var(--aura-purple)" }}
          >
            +30
          </span>
        </div>
      </div>
      <div className="rounded-2xl border border-black/5 bg-white/70 p-4 opacity-80">
        <div className="flex items-center justify-between">
          <p className="text-sm font-extrabold text-aura-black/80">Sunrise w/ friends</p>
          <span
            className="rounded-full px-2.5 py-1 text-xs font-extrabold text-white"
            style={{ background: "var(--aura-yellow)" }}
          >
            +25
          </span>
        </div>
      </div>
    </div>
  );
}

function ProfileVisual({ color }: { color: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div
        className="flex h-32 w-32 items-center justify-center rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, color-mix(in srgb, ${color} 70%, white), ${color})`,
          boxShadow: `0 18px 36px color-mix(in srgb, ${color} 45%, transparent)`,
        }}
      >
        <span className="text-5xl font-black text-white">R</span>
      </div>
      <div className="text-center">
        <p className="text-xl font-extrabold text-aura-black">@rkota</p>
        <p className="text-sm text-aura-black/60">Orange tier · 322 aura</p>
      </div>
      <div className="flex w-full max-w-sm items-center justify-around rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-sm">
        <Stat label="aura" value="322" color={color} />
        <span className="h-8 w-px bg-black/10" />
        <Stat label="posts" value="14" color={color} />
        <span className="h-8 w-px bg-black/10" />
        <Stat label="rank" value="#3" color={color} />
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-black tracking-tight" style={{ color }}>
        {value}
      </p>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-aura-black/50">
        {label}
      </p>
    </div>
  );
}

function LeaderboardVisual({ color }: { color: string }) {
  const rows = [
    { rank: 1, name: "alex.h", points: 612, c: "var(--aura-red)" },
    { rank: 2, name: "kira.m", points: 547, c: "var(--aura-orange)" },
    { rank: 3, name: "rkota", points: 481, c: "var(--aura-yellow)" },
    { rank: 4, name: "trace", points: 322, c: "var(--aura-green)" },
    { rank: 5, name: "drew", points: 248, c: color },
  ];
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="mb-1 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-aura-black/60">
        <span>Top this week</span>
        <span>aura</span>
      </div>
      {rows.map((r) => (
        <div
          key={r.rank}
          className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm"
        >
          <span
            className="w-6 text-center text-sm font-black"
            style={{ color: r.c }}
          >
            #{r.rank}
          </span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold text-white"
            style={{ background: r.c }}
          >
            {r.name[0].toUpperCase()}
          </span>
          <span className="flex-1 text-sm font-extrabold text-aura-black">
            @{r.name}
          </span>
          <span className="text-sm font-extrabold text-aura-black">
            {r.points}
          </span>
        </div>
      ))}
    </div>
  );
}
