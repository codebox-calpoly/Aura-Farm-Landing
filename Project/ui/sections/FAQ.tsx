"use client";

import { useState } from "react";

const faq = [
  {
    q: "Who can use Aura Farm?",
    a: "For now, only Cal Poly San Luis Obispo students with a valid @calpoly.edu email. We're going deep on one campus first — more schools are on the roadmap.",
  },
  {
    q: "How do you stop people from faking challenges?",
    a: "Two layers: every post requires a real photo, and every post is reviewed before it hits the feed. Once it's live, the community gets 5 flags per week to call out anything that slipped through. Repeat offenders get yeeted.",
  },
  {
    q: "What do I actually win?",
    a: "Aura points, tier glow-ups, leaderboard placement, and cred. Rewards (real ones — local merch, food spots, etc.) are on the roadmap once we launch.",
  },
  {
    q: "How do I add friends?",
    a: "Search by name inside the app and send a request. Once they accept, you'll see each other's posts in a private friends-only feed and a friends leaderboard.",
  },
  {
    q: "Is it free?",
    a: "Yes. Forever for the core experience. No ads. No premium tier-buying. Aura is earned, not bought.",
  },
  {
    q: "Where do I get the app?",
    a: "On the iOS App Store. Scroll up and tap Download on the App Store, or use the Get the app buttons in the nav — that opens our listing. You will need a @calpoly.edu email to sign up for the Cal Poly campus.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
        <div className="text-center" data-reveal>
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-aura-black/50">
            FAQ
          </p>
          <h2 className="reveal mt-4 text-balance text-4xl font-black leading-tight tracking-tight text-aura-black sm:text-5xl">
            Things people actually ask.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faq.map((item, i) => (
            <div
              key={item.q}
              className="reveal overflow-hidden rounded-2xl border border-black/10 bg-white/85 backdrop-blur transition-colors"
              data-reveal
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                aria-expanded={open === i}
              >
                <span className="text-base font-extrabold text-aura-black sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aura-black/5 transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <span className="absolute h-0.5 w-3.5 bg-aura-black" />
                  <span className="absolute h-3.5 w-0.5 bg-aura-black" />
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-base leading-relaxed text-aura-black/70 sm:px-6">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
