import type { Metadata } from "next";
import { Geist, Geist_Mono, Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnnouncementModal from "@/components/announcement-modal";
import { siteConfig } from "../../config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  // title: "Aviation Hub (AVH)",
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  publisher: "BloobPoint",
  description: "Your premier destination for aviation excellence",
  openGraph: {
    title: siteConfig.siteName,
    description: "Your premier destination for aviation excellence",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.siteName,
    images: [
      {
        secureUrl: `https://${siteConfig.domain}/socials/og.jpg`,
        url: `https://${siteConfig.domain}/socials/og.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    creator: "@bloompoint",
    images: [`https://${siteConfig.domain}/socials/twitter-card.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
    // shortcut: "/favicon-32x32.png"
  },
  keywords: ["AVH", "Aviation Hub", "Aviation Community"],
  authors: [
    {
      name: "BloomPoint",
      url: `https://${siteConfig.domain}`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titilliumWeb.variable} antialiased`}
      >
        <AnnouncementModal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
