import { appStoreLinkProps } from "@/lib/app-links";
import Image from "next/image";

const colsClass = "flex flex-col gap-3";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Aura Farm"
                width={40}
                height={40}
              />
              <span className="text-xl font-extrabold tracking-tight text-aura-black">
                Aura Farm
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-aura-black/65">
              Real-life challenges. Real campus. Real aura. Built by Cal Poly
              students, for Cal Poly students.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialLink href="https://www.codeboxorg.com/" label="Codebox">
                <span className="text-sm font-bold">cb</span>
              </SocialLink>
              <SocialLink
                href="https://github.com/codebox-calpoly/AuraFarm"
                label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.55v-1.95c-3.21.7-3.89-1.55-3.89-1.55-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.94 10.94 0 0 1 5.74 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5Z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="mailto:hello@aurafarm.app"
                label="Email"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <div className={colsClass}>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-aura-black/45">
              Product
            </h4>
            <FooterLink href="#how-it-works">How it works</FooterLink>
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#tiers">Aura tiers</FooterLink>
            <a
              {...appStoreLinkProps}
              className="text-sm font-medium text-aura-black/70 transition-colors hover:text-aura-black"
            >
              Get the app
            </a>
          </div>

          <div className={colsClass}>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-aura-black/45">
              Company
            </h4>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/support">Support</FooterLink>
          </div>

          <div className={colsClass}>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-aura-black/45">
              The team
            </h4>
            <FooterLink href="https://www.codeboxorg.com/">codebox</FooterLink>
            <span className="text-sm text-aura-black/55">Cal Poly SLO</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-black/10 pt-6 text-sm text-aura-black/55 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Aura Farm. Touch grass responsibly.</span>
          <span>
            brought to you by{" "}
            <a
              href="https://www.codeboxorg.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-aura-black underline-offset-4 hover:underline"
            >
              codebox
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-aura-black/70 transition-colors hover:text-aura-black"
    >
      {children}
    </a>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-aura-black/70 transition hover:border-black/20 hover:text-aura-black"
    >
      {children}
    </a>
  );
}
