/**
 * iOS App Store listing. Set NEXT_PUBLIC_APP_STORE_URL in `.env.local`
 * (e.g. https://apps.apple.com/us/app/aura-farm/id1234567890).
 */
export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() ||
  "https://apps.apple.com/us/search?term=Aura%20Farm";

export const appStoreLinkProps = {
  href: APP_STORE_URL,
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
