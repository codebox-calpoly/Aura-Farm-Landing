"use client";

import { appStoreLinkProps } from "@/lib/app-links";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#tiers", label: "Aura tiers" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--top-bar-height)] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Aura Farm"
            width={44}
            height={44}
            className="drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]"
            priority
          />
          <span className="hidden text-lg font-extrabold tracking-tight text-aura-black sm:inline">
            Aura Farm
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-aura-black/70 transition-colors hover:text-aura-black"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            {...appStoreLinkProps}
            className="hidden rounded-full bg-aura-black px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-transform hover:scale-105 hover:bg-aura-black/90 sm:inline-flex"
          >
            Get notified
          </a>
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 backdrop-blur"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-0.5 w-5 bg-aura-black before:absolute before:left-0 before:-top-1.5 before:block before:h-0.5 before:w-5 before:bg-aura-black after:absolute after:left-0 after:top-1.5 after:block after:h-0.5 after:w-5 after:bg-aura-black" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-aura-black/80 hover:bg-black/5"
              >
                {l.label}
              </a>
            ))}
            <a
              {...appStoreLinkProps}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-aura-black px-5 py-3 text-center text-base font-semibold text-white"
            >
              Get notified
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
