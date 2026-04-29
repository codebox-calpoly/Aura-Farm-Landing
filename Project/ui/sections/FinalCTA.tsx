"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="download"
      className="relative z-10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
        <h2
          className="reveal text-balance text-5xl font-black leading-[0.95] tracking-tight text-aura-black sm:text-6xl md:text-7xl"
          data-reveal
        >
          Ready to{" "}
          <span className="aura-gradient-text">accept the challenge?</span>
        </h2>
        <p
          className="reveal mx-auto mt-6 max-w-xl text-lg text-aura-black/65 sm:text-xl"
          data-reveal
        >
          Drop your Cal Poly email and we&apos;ll text you the moment Aura Farm
          hits the App Store.
        </p>

        <form
          onSubmit={onSubmit}
          className="reveal mx-auto mt-10 flex w-full max-w-lg flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          data-reveal
        >
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@calpoly.edu"
            className="h-14 flex-1 rounded-full border border-black/10 bg-white/90 px-6 text-base font-medium text-aura-black placeholder:text-aura-black/40 backdrop-blur focus:border-aura-green focus:outline-none focus:ring-4 focus:ring-aura-green/20"
          />
          <button
            type="submit"
            disabled={submitted}
            className="inline-flex h-14 items-center justify-center rounded-full bg-aura-green px-7 text-base font-bold text-white shadow-[0_10px_30px_rgba(79,185,72,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(79,185,72,0.5)] disabled:cursor-not-allowed disabled:opacity-80"
          >
            {submitted ? "You're on the list ✓" : "Hell yeah!"}
          </button>
        </form>

        <div
          className="reveal mt-10 flex flex-wrap items-center justify-center gap-4"
          data-reveal
        >
          <StoreBadge platform="ios" />
          <StoreBadge platform="android" />
        </div>
      </div>
    </section>
  );
}

function StoreBadge({ platform }: { platform: "ios" | "android" }) {
  const isIos = platform === "ios";
  return (
    <div className="inline-flex h-14 items-center gap-3 rounded-2xl border border-black/10 bg-white/85 px-5 backdrop-blur">
      <span className="text-2xl" aria-hidden="true">
        {isIos ? "" : ""}
      </span>
      <span className="flex items-baseline gap-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-aura-black/60">
          Coming soon to
        </span>
        <span className="text-base font-extrabold text-aura-black">
          {isIos ? "App Store" : "Play Store"}
        </span>
      </span>
    </div>
  );
}
