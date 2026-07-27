import type { Metadata, Viewport } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { BackgroundLayer } from "@/components/layout/BackgroundLayer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { JsonLd } from "@/components/seo/JsonLd";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://northpeakdigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NorthPeak Digital — Digital Growth Partner & Web Agency",
    template: "%s | NorthPeak Digital",
  },
  description:
    "We help ambitious brands scale with strategy, UI/UX design, web development, and digital marketing that delivers measurable growth.",
  keywords: [
    "Digital Agency",
    "Web Development",
    "UI UX Design",
    "Next.js Agency",
    "Brand Strategy",
    "SEO Optimization",
    "Digital Marketing",
    "SaaS Development",
  ],
  authors: [{ name: "NorthPeak Digital Team", url: siteUrl }],
  creator: "NorthPeak Digital",
  publisher: "NorthPeak Digital",
  applicationName: "NorthPeak Digital",
  category: "technology",
  referrer: "origin-when-cross-origin",

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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "NorthPeak Digital — Digital Growth Partner & Web Agency",
    description:
      "We combine strategy, design, and technology to build digital products that drive real business results.",
    siteName: "NorthPeak Digital",
    images: [
      {
        url: "/images/hero-mountain.png",
        width: 1200,
        height: 630,
        alt: "NorthPeak Digital — Digital Growth Partner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NorthPeak Digital — Digital Growth Partner & Web Agency",
    description:
      "Strategy, design, and engineering into a unified practice. We deliver measurable business impact.",
    creator: "@northpeakdigital",
    images: ["/images/hero-mountain.png"],
  },

  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#6d5ef9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full">
        <AppProviders>
          <BackgroundLayer />
          <PageWrapper>{children}</PageWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
