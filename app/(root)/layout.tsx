import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "../globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: "Nextgen Advisors",
    template: "%s | Nextgen Advisors",
  },
  description:
    "Your trusted partner for global education opportunities. We guide students to study in Canada, Australia, USA, UK, and New Zealand.",
  keywords: [
    "study abroad",
    "consutancy in kumaripati",
    "education consultancy",
    "study in Canada ",
    "study in USA",
    "study in New Zealand",
    "study in Australia",
    "study in UK",
    "IELTS preparation",
    "visa assistance",
  ],
  authors: [{ name: "Nextgen Advisors" }],
  metadataBase: new URL("https://www.nextgenadvisors.com.np"),
  openGraph: {
    title: "Nextgen Advisors | Study Abroad Consultants",
    description: "Your trusted partner for global education opportunities",
    url: "https://www.nextgenadvisors.com.np",
    siteName: "NextGen Advisors",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
