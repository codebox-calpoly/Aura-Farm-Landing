import challenges from "../../app/data/challenges.json";

const accentColors = [
  "var(--aura-red)",
  "var(--aura-orange)",
  "var(--aura-yellow)",
  "var(--aura-green)",
  "var(--aura-blue)",
  "var(--aura-purple)",
];

export default function ChallengeMarquee() {
  const items = Array.from({ length: 4 }, () => challenges).flat();
  return (
    <section className="relative z-10 py-10">
      <div className="mx-auto mb-6 flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-aura-black/50">
          Live challenge feed
        </p>
      </div>
      <div className="marquee" aria-hidden="false">
        <div className="marquee__track">
          <Group items={items} />
          <Group items={items} aria-hidden />
        </div>
      </div>
    </section>
  );
}

function Group({
  items,
  ...rest
}: {
  items: typeof challenges;
  "aria-hidden"?: boolean;
}) {
  return (
    <div className="marquee__group" {...rest}>
      {items.map((c, i) => {
        const accent = accentColors[i % accentColors.length];
        return (
          <div
            key={`${c.title}-${i}`}
            className="marquee__card group relative overflow-hidden rounded-2xl border border-black/10 bg-white/80 px-5 py-4 backdrop-blur-md transition-transform hover:-translate-y-1"
          >
            <span
              className="absolute inset-x-0 top-0 h-1 rounded-t-2xl"
              style={{ background: accent }}
              aria-hidden="true"
            />
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-extrabold text-aura-black">{c.title}</p>
                <p className="mt-1 text-sm text-aura-black/65">
                  {c.description}
                </p>
              </div>
              <span
                className="shrink-0 rounded-full px-2.5 py-1 text-xs font-extrabold text-white"
                style={{ background: accent }}
              >
                +{c.points}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
