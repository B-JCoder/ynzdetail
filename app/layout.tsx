import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YNZ Detail - Premium Car Detailing Services in Canada",
  description:
    "Professional car detailing, paint correction, ceramic coating, and auto care services across Canada. Transform your vehicle with YNZ Detail.",
  keywords: "car detailing, auto care, paint correction, ceramic coating, car wash, Canada, professional detailing",
  authors: [{ name: "YNZ Detail" }],
  creator: "YNZ Detail",
  publisher: "YNZ Detail",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ynzdetail.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "YNZ Detail - Premium Car Detailing Services",
    description:
      "Transform your vehicle with our professional car detailing services. Premium quality, attention to detail.",
    url: "https://ynzdetail.ca",
    siteName: "YNZ Detail",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YNZ Detail - Professional Car Detailing",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YNZ Detail - Premium Car Detailing Services",
    description: "Professional car detailing services across Canada. Transform your vehicle today.",
    images: ["/og-image.jpg"],
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
