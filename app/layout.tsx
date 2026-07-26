import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://decksmithhq.com"),
  title: "DeckSmith | Control surfaces for smarter work",
  description: "Precision-built Stream Deck profiles for AI users, developers and creative professionals.",
  openGraph: {
    title: "DeckSmith | Control surfaces for smarter work",
    description: "A precision-built Stream Deck + control profile for ChatGPT on macOS.",
    url: "https://decksmithhq.com",
    siteName: "DeckSmith",
    images: [{ url: "/images/hero-profile.png", width: 1920, height: 1080, alt: "DeckSmith Control Profile for ChatGPT" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "DeckSmith", description: "Control surfaces for smarter work.", images: ["/images/hero-profile.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
