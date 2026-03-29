import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://zyroth.com'),
  title: {
    default: "Zyroth | Run AI Agents Smarter, Faster, Cheaper",
    template: "%s | Zyroth"
  },
  description: "Zyroth enables you to build, deploy, and scale AI autonomous agents. The most powerful AI agent infrastructure for developers.",
  keywords: ["AI Agents", "Autonomous Agents", "AI Infrastructure", "Machine Learning", "LLM", "Zyroth", "AI Automation", "Developer Tools"],
  authors: [{ name: "Zyroth" }],
  creator: "Zyroth",
  publisher: "Zyroth",
  icons: {
    icon: "/logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zyroth | Run AI Agents Smarter, Faster, Cheaper",
    description: "Build, deploy, and scale AI autonomous agents effortlessly. Join the platform built for future AI workloads.",
    url: "https://zyroth.com",
    siteName: "Zyroth",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Zyroth AI Agents Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyroth | Future of AI Agents",
    description: "Run AI Agents Smarter, Faster, Cheaper.",
    images: ["/og.png"],
    creator: "@zyroth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head />
      <body className="font-body min-h-full flex flex-col">{children}</body>
    </html>
  );
}
