import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurafarm.app"),
  title: "Aura Farm — Touch grass. Earn aura.",
  description:
    "Aura Farm turns your campus into a real-life game. Take on real-world challenges with friends, post photo proof, climb the leaderboard, and farm your aura. Available on the App Store at Cal Poly.",
  keywords: [
    "Aura Farm",
    "Cal Poly",
    "campus app",
    "challenges",
    "gamification",
    "college app",
    "leaderboard",
    "photo challenges",
    "SLO",
  ],
  authors: [{ name: "codebox" }],
  openGraph: {
    title: "Aura Farm — Touch grass. Earn aura.",
    description:
      "Real-life challenges. Real campus. Real aura. On the App Store at Cal Poly SLO.",
    url: "https://aurafarm.app",
    siteName: "Aura Farm",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Farm — Touch grass. Earn aura.",
    description:
      "Real-life challenges. Real campus. Real aura. On the App Store at Cal Poly SLO.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-aura-black">
        {children}
      </body>
    </html>
  );
}
