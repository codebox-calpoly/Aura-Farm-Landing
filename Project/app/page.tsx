 "use client";

import Image from "next/image";
import { useEffect } from "react";
import BubbleBackground from "../ui/bubble-background";
import challenges from "./data/challenges.json";

export default function Home() {
  const marqueeItems = Array.from({ length: 5 }, () => challenges).flat();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (elements.length === 0) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);


  return (
    <div className="relative isolate min-h-screen text-black">
      <BubbleBackground
        className="bubble-background--fixed"
        bgGradient="radial-gradient(55% 55% at 30% 35%, rgba(var(--aura-red-rgb), 0.34) 0%, rgba(var(--aura-white-rgb), 0) 70%), radial-gradient(55% 55% at 70% 30%, rgba(var(--aura-orange-rgb), 0.34) 0%, rgba(var(--aura-white-rgb), 0) 70%), radial-gradient(55% 55% at 35% 70%, rgba(var(--aura-green-rgb), 0.3) 0%, rgba(var(--aura-white-rgb), 0) 70%), radial-gradient(55% 55% at 70% 70%, rgba(var(--aura-blue-rgb), 0.3) 0%, rgba(var(--aura-white-rgb), 0) 70%), radial-gradient(60% 60% at 50% 50%, rgba(var(--aura-purple-rgb), 0.28) 0%, rgba(var(--aura-white-rgb), 0) 75%)"
        bubbleColors={{
          colorA: "var(--aura-red-rgb)",
          colorB: "var(--aura-orange-rgb)",
          colorC: "var(--aura-yellow-rgb)",
          colorD: "var(--aura-green-rgb)",
          colorE: "var(--aura-blue-rgb)",
          interactive: "var(--aura-purple-rgb)",
        }}
        bubbleSize="90%"
        blendMode="screen"
      />
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="flex h-[var(--top-bar-height)] items-center justify-between px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Aura Farm logo"
              width={50}
              height={50}
              className="drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]"
            />
          </div>
          <button className="rounded-full bg-[#4FB948] px-6 py-3 text-white shadow-[0_6px_14px_rgba(79,185,72,0.35)] transition hover:bg-[#43a43f]">
            Download
          </button>
        </div>
      </header>
      <main className="relative z-10">
        <section className="relative z-10 min-h-[calc(100vh-var(--top-bar-height))] py-16 md:py-24 box-border flex items-center">
          <div className="flex w-full flex-col px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col justify-center pb-6 md:pb-10">
              <div className="flex flex-col items-center">
                <Image
                  src="/aura-farm.svg"
                  alt="Aura Farm mark"
                  width={420}
                  height={120}
                  className="h-auto w-[220px] drop-shadow-[0_12px_36px_rgba(255,255,255,0.9)] sm:w-[280px] md:w-[360px] lg:w-[420px]"
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 360px, 420px"
                  priority
                />
              </div>
              <p className="reveal mt-6 text-center" data-reveal>
                Accept challenges, earn points, gain aura
              </p>
              <div className="mt-10" data-reveal>
                <div className="marquee">
                  <div className="marquee__track">
                    <div className="marquee__group">
                      {marqueeItems.map((challenge, index) => (
                        <div
                          key={`${challenge.title}-${index}`}
                          className="marquee__card rounded-2xl border-2 border-black bg-white/70 px-4 py-3"
                        >
                          <p className="mt-3">
                            <strong>{challenge.title}</strong>
                          </p>
                          <p className="mt-1">{challenge.description}</p>
                          <p className="mt-2 text-aura-green">
                            +{challenge.points} aura
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="marquee__group" aria-hidden="true">
                      {marqueeItems.map((challenge, index) => (
                        <div
                          key={`${challenge.title}-${index}-clone`}
                          className="marquee__card rounded-2xl border-2 border-black bg-white/70 px-4 py-3"
                        >
                          <p className="mt-3">
                            <strong>{challenge.title}</strong>
                          </p>
                          <p className="mt-1">{challenge.description}</p>
                          <p className="mt-2 text-aura-green">
                            +{challenge.points} aura
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-16 md:py-24">
          <div className="flex w-full flex-col justify-center gap-10 px-4 sm:px-6 lg:px-10">
            <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div className="text-center md:text-left">
                <h2 className="reveal" data-reveal>
                  New challenges every week
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <div
                  className="reveal aspect-[3/4] w-full max-w-sm rounded-2xl border-2 border-black bg-white/70"
                  data-reveal
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-16 md:py-24">
          <div className="flex w-full flex-col justify-center gap-10 px-4 sm:px-6 lg:px-10">
            <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <div className="order-2 flex items-center justify-center md:order-1">
                <div
                  className="reveal aspect-[3/4] w-full max-w-sm rounded-2xl border-2 border-black bg-white/70"
                  data-reveal
                />
              </div>
              <div className="order-1 text-center md:order-2 md:text-left">
                <h2 className="reveal" data-reveal>
                  Complete and submit for points
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-16 md:py-24">
          <div className="flex w-full flex-col justify-center gap-10 px-4 sm:px-6 lg:px-10">
            <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div className="text-center md:text-left">
                <h2 className="reveal" data-reveal>
                  Climb the leaderboard and compete with friends
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <div
                  className="reveal aspect-[3/4] w-full max-w-sm rounded-2xl border-2 border-black bg-white/70"
                  data-reveal
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 min-h-[calc(100vh-var(--top-bar-height))] py-16 md:py-24 box-border flex items-center">
          <div className="flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-10">
            <h2 className="reveal" data-reveal>
              Ready to accept the challenge?
            </h2>
            <button
              className="reveal mt-6 rounded-full bg-[#4FB948] px-6 py-3 text-white shadow-[0_6px_14px_rgba(79,185,72,0.35)] transition hover:bg-[#43a43f]"
              data-reveal
            >
              Hell yeah!
            </button>
            <p className="reveal mt-8" data-reveal>
              brought to you by{" "}
              <a
                href="https://www.codeboxorg.com/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                codebox
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
