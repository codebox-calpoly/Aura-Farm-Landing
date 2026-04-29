"use client";

import { appStoreLinkProps } from "@/lib/app-links";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 pt-10 pb-16 md:pt-16 md:pb-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span
            className="reveal inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-aura-black backdrop-blur"
            data-reveal
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aura-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aura-green" />
            </span>
            On the App Store at Cal Poly
          </span>

          <h1
            className="reveal mt-6 text-balance text-5xl font-black leading-[0.95] tracking-tight text-aura-black sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            data-reveal
          >
            Touch grass.{" "}
            <span className="aura-gradient-text">Earn aura.</span>
          </h1>

          <p
            className="reveal mt-6 max-w-xl text-balance text-lg text-aura-black/70 sm:text-xl"
            data-reveal
          >
            Aura Farm turns your campus into a real-life game. Take on
            real-world challenges with friends, post the proof, climb the
            leaderboard, and farm your aura — one post at a time.
          </p>

          <div
            className="reveal mt-8 flex flex-col items-center gap-3 sm:flex-row"
            data-reveal
          >
            <a
              {...appStoreLinkProps}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-aura-green px-7 py-4 text-base font-bold text-white shadow-[0_10px_30px_rgba(79,185,72,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(79,185,72,0.5)]"
            >
              Get the app
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L11.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 1 1-1.04-1.08l3.158-2.96H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 text-base font-semibold text-aura-black backdrop-blur transition hover:bg-white"
            >
              See how it works
            </a>
          </div>

          <div
            className="reveal mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start"
            data-reveal
          >
            <Stat number="50+" label="campus challenges" />
            <Divider />
            <Stat number="7" label="aura tiers" />
            <Divider />
            <Stat number="100%" label="photo-proof" />
          </div>
        </div>

        <div className="reveal relative flex items-center justify-center" data-reveal>
          <PhoneMockup />
          <FloatingTag
            className="floating-tag-1"
            color="var(--aura-red)"
            label="+50 aura"
            sublabel="Hike the P"
          />
          <FloatingTag
            className="floating-tag-2"
            color="var(--aura-blue)"
            label="+30 aura"
            sublabel="Find Waldo"
          />
          <FloatingTag
            className="floating-tag-3"
            color="var(--aura-purple)"
            label="rank #3"
            sublabel="climbed +2 spots"
          />
        </div>
      </div>

    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-black tracking-tight text-aura-black sm:text-3xl">
        {number}
      </span>
      <span className="text-sm font-medium text-aura-black/60">{label}</span>
    </div>
  );
}

function Divider() {
  return <span className="h-6 w-px bg-black/10" aria-hidden="true" />;
}

function FloatingTag({
  className,
  color,
  label,
  sublabel,
}: {
  className: string;
  color: string;
  label: string;
  sublabel: string;
}) {
  return (
    <div
      className={`absolute hidden md:flex flex-col items-start gap-0.5 rounded-2xl border border-black/5 bg-white/95 px-4 py-3 shadow-[0_18px_36px_rgba(0,0,0,0.12)] backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-2">
        <span
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ background: color }}
        />
        <span className="text-sm font-extrabold text-aura-black">{label}</span>
      </div>
      <span className="text-[11px] font-medium text-aura-black/60">
        {sublabel}
      </span>
    </div>
  );
}
