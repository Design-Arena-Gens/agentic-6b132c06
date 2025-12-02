import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Aura | Coming Soon Film",
  description:
    "An immersive teaser film unveiling the new Maison Aura jewellery articles. Experience the atmosphere before the grand reveal.",
  alternates: {
    canonical: "https://agentic-6b132c06.vercel.app",
  },
  openGraph: {
    title: "Maison Aura | New Articles Coming Soon",
    description:
      "Step inside the cinematic teaser for Maison Aura's forthcoming jewellery drop.",
    url: "https://agentic-6b132c06.vercel.app",
    siteName: "Maison Aura",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
