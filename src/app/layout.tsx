import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationEnhanced } from "@/components/navigation-enhanced";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mad Emu | Indigenous Renewables, Infrastructure & Project Management",
  description:
    "Mad Emu is a proudly Indigenous-owned partner delivering renewables, heavy infrastructure, and project management with cultural integrity and audit-ready compliance.",
  keywords:
    "Mad Emu, Indigenous business, renewables, heavy infrastructure, project management, civil works, equipment hire, cultural integrity",
  authors: [{ name: "Mad Emu" }],
  creator: "Mad Emu",
  publisher: "Mad Emu",
  openGraph: {
    title: "Mad Emu | Indigenous Renewables, Infrastructure & Project Management",
    description:
      "Renewables, heavy infrastructure and project management backed by Indigenous ownership, verified compliance, and accountable delivery.",
    url: "https://mad-emu.com.au",
    siteName: "Mad Emu",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Mad Emu Indigenous-led field team delivering infrastructure services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mad Emu | Indigenous Renewables, Infrastructure & Project Management",
    description:
      "Indigenous-owned renewables, heavy infrastructure and project management specialists delivering accountable outcomes across complex projects.",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop",
    ],
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
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "icon", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <NavigationEnhanced />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
