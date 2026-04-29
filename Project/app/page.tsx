"use client";

import { useEffect } from "react";
import BubbleBackground from "../ui/bubble-background";
import Nav from "../ui/sections/Nav";
import Hero from "../ui/sections/Hero";
import ChallengeMarquee from "../ui/sections/ChallengeMarquee";
import HowItWorks from "../ui/sections/HowItWorks";
import Features from "../ui/sections/Features";
import Showcase from "../ui/sections/Showcase";
import Tiers from "../ui/sections/Tiers";
import CalPolyCallout from "../ui/sections/CalPolyCallout";
import FAQ from "../ui/sections/FAQ";
import FinalCTA from "../ui/sections/FinalCTA";
import Footer from "../ui/sections/Footer";

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    /** Only force-scroll to top on a fresh load with no hash. */
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (elements.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
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
      { threshold: 0.05, rootMargin: "0px 0px -2% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    /**
     * Belt-and-suspenders: if the observer hasn't fired for an element after
     * a beat (e.g., because the user landed mid-page or the section was
     * already in view at hydration), force-reveal anything within view.
     */
    const sweep = () => {
      const vh = window.innerHeight;
      elements.forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      });
    };
    const sweepId = window.setTimeout(sweep, 80);

    /** Final fallback: after 2.5s reveal everything regardless. */
    const fallbackId = window.setTimeout(() => {
      document.documentElement.classList.add("reveal-fallback");
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(sweepId);
      window.clearTimeout(fallbackId);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <div className="relative isolate min-h-screen text-aura-black">
      <BubbleBackground
        className="bubble-background--fixed"
        bgGradient="radial-gradient(55% 55% at 30% 25%, rgba(var(--aura-red-rgb), 0.32) 0%, rgba(var(--aura-white-rgb), 0) 70%), radial-gradient(55% 55% at 75% 25%, rgba(var(--aura-orange-rgb), 0.30) 0%, rgba(var(--aura-white-rgb), 0) 70%), radial-gradient(55% 55% at 30% 75%, rgba(var(--aura-green-rgb), 0.28) 0%, rgba(var(--aura-white-rgb), 0) 70%), radial-gradient(55% 55% at 75% 75%, rgba(var(--aura-blue-rgb), 0.28) 0%, rgba(var(--aura-white-rgb), 0) 70%), radial-gradient(60% 60% at 50% 50%, rgba(var(--aura-purple-rgb), 0.22) 0%, rgba(var(--aura-white-rgb), 0) 75%)"
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

      <Nav />

      <main className="relative z-10">
        <Hero />
        <ChallengeMarquee />
        <HowItWorks />
        <Showcase />
        <Features />
        <Tiers />
        <CalPolyCallout />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
