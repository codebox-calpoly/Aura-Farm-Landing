 "use client";

import Image from "next/image";
import { useEffect } from "react";
import challenges from "./data/challenges.json";

export default function Home() {
  const marqueeItems = Array.from({ length: 5 }, () => challenges).flat();

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur">
        <div className="flex h-[var(--top-bar-height)] items-center justify-between px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Aura Farm logo"
              width={50}
              height={50}
            />
          </div>
          <button className="rounded-full bg-[#4FB948] px-6 py-3 text-white transition hover:bg-[#43a43f]">
            Download
          </button>
        </div>
      </header>
      <main>
        <section className="relative min-h-[calc(100vh-var(--top-bar-height))] py-20 md:py-28 box-border flex items-center">
          <div className="flex w-full flex-col px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col justify-center pb-6 md:pb-10">
              <div className="flex flex-col items-center">
                <Image
                  src="/aura-farm.svg"
                  alt="Aura Farm mark"
                  width={420}
                  height={120}
                  className="h-auto w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px]"
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

        <section className="relative py-20 md:py-28">
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

        <section className="relative py-20 md:py-28">
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

        <section className="relative py-20 md:py-28">
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

        <section className="relative min-h-[calc(100vh-var(--top-bar-height))] py-20 md:py-28 box-border flex items-center">
          <div className="flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-10">
            <h2 className="reveal" data-reveal>
              Ready to accept the challenge?
            </h2>
            <button
              className="reveal mt-6 rounded-full bg-[#4FB948] px-6 py-3 text-white transition hover:bg-[#43a43f]"
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
