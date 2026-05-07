/**
 * Google Form waitlist link. Replace GOOGLE_FORM_URL with the real URL once available.
 */
export const GOOGLE_FORM_URL =
  process.env.NEXT_PUBLIC_WAITLIST_URL?.trim() || "https://forms.gle/DVpnUcju76tDMZQeA";

export const appStoreLinkProps = {
  href: GOOGLE_FORM_URL,
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
