/**
 * iOS App Store listing. Override with NEXT_PUBLIC_APP_STORE_URL in `.env.local`.
 */
export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() ||
  "https://apps.apple.com/us/app/aura-farm-cb/id6762101902";

export const appStoreLinkProps = {
  href: APP_STORE_URL,
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
