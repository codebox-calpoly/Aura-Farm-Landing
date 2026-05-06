import { appStoreLinkProps } from "@/lib/app-links";

export default function FinalCTA() {
  return (
    <section id="download" className="relative z-10 py-12 sm:py-16">
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
          Aura Farm is live on the App Store. If you&apos;re interested, grab
          it there — sign up with your{" "}
          <span className="font-semibold text-aura-black/80">@calpoly.edu</span>{" "}
          email in the app to play at Cal Poly.
        </p>

        <div
          className="reveal mx-auto mt-10 flex flex-col items-center gap-4"
          data-reveal
        >
          <a
            {...appStoreLinkProps}
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-aura-green px-8 text-base font-bold text-white shadow-[0_10px_30px_rgba(79,185,72,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(79,185,72,0.5)]"
          >
            <AppleMark className="h-5 w-5 shrink-0" />
            Download on the App Store
          </a>
        </div>
      </div>
    </section>
  );
}

function AppleMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
