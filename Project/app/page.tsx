import Image from "next/image";
import challenges from "./data/challenges.json";

export default function Home() {
  const marqueeItems = Array.from({ length: 5 }, () => challenges).flat();

  return (
    <div className="min-h-screen bg-white text-black">
      <main>
        <section className="relative h-[180vh]">
          <div className="sticky top-0">
            <div className="flex min-h-screen w-full flex-col px-4 sm:px-6 lg:px-10">
              <header className="flex items-center justify-between py-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.svg"
                    alt="Aura Farm logo"
                    width={32}
                    height={32}
                  />
                </div>
                <button className="rounded-full bg-[#4FB948] px-6 py-3 text-white transition hover:bg-[#43a43f]">
                  Download
                </button>
              </header>

              <div className="flex flex-1 flex-col justify-center pb-12">
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
                <p className="mt-6 text-center">
                  Accept challenges, earn points, gain aura.
                </p>
                <div className="mt-10">
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
          </div>
        </section>

        <section className="relative h-[160vh]">
          <div className="sticky top-0">
            <div className="flex min-h-screen w-full flex-col justify-center gap-10 px-4 py-12 sm:px-6 lg:px-10">
              <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div className="text-center md:text-left">
                  <h2>
                    Accept weekly challenges
                  </h2>
                </div>
                <div className="flex items-center justify-center">
                  <div className="aspect-[3/4] w-full max-w-sm rounded-2xl border-2 border-black bg-white/70" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[160vh]">
          <div className="sticky top-0">
            <div className="flex min-h-screen w-full flex-col justify-center gap-10 px-4 py-12 sm:px-6 lg:px-10">
              <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
                <div className="order-2 flex items-center justify-center md:order-1">
                  <div className="aspect-[3/4] w-full max-w-sm rounded-2xl border-2 border-black bg-white/70" />
                </div>
                <div className="order-1 text-center md:order-2 md:text-left">
                  <h2>Submit for points</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[160vh]">
          <div className="sticky top-0">
            <div className="flex min-h-screen w-full flex-col justify-center gap-10 px-4 py-12 sm:px-6 lg:px-10">
              <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div className="text-center md:text-left">
                  <h2>
                    Climb the leaderboard and compete with friends
                  </h2>
                </div>
                <div className="flex items-center justify-center">
                  <div className="aspect-[3/4] w-full max-w-sm rounded-2xl border-2 border-black bg-white/70" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative h-[140vh]">
          <div className="sticky top-0">
            <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-10">
              <h2>
                Ready to accept the challenge?
              </h2>
              <button className="mt-6 rounded-full bg-[#4FB948] px-6 py-3 text-white transition hover:bg-[#43a43f]">
                Hell yeah!
              </button>
              <p className="mt-8">
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
          </div>
        </section>
      </main>
    </div>
  );
}
