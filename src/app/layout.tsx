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
  title: "18fifty3 Hire Now - Professional Equipment Rental Solutions",
  description: "Premium equipment hire for construction, events, and landscaping. Quality machinery, reliable service, competitive rates. Get a quote today!",
  keywords: "equipment hire, equipment rental, construction equipment, event equipment, tool hire, machinery rental, excavator hire, 18fifty3 hire",
  authors: [{ name: "18fifty3 Hire Now" }],
  creator: "18fifty3 Hire Now",
  publisher: "18fifty3 Hire Now",
  openGraph: {
    title: "18fifty3 Hire Now - Professional Equipment Rental Solutions",
    description: "Premium equipment hire for construction, events, and landscaping. Quality machinery, reliable service, competitive rates.",
    url: "https://18fifty3hirenow.com.au",
    siteName: "18fifty3 Hire Now",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2940&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "18fifty3 Hire Now - Professional Equipment"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "18fifty3 Hire Now - Professional Equipment Rental",
    description: "Premium equipment hire for construction, events, and landscaping. Get a quote today!",
    images: ["https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2940&auto=format&fit=crop"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
