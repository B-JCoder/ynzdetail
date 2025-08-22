import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Carlux - Premium Car Detailing Services in Canada",
//   description:
//     "Professional car detailing, paint correction, ceramic coating, and auto care services across Canada. Transform your vehicle with Carlux.",
//   keywords: "car detailing, auto care, paint correction, ceramic coating, car wash, Canada, professional detailing",
//   authors: [{ name: "Carlux" }],
//   creator: "Carlux",
//   publisher: "Carlux",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL("https://carlux.ca"),
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     title: "Carlux - Premium Car Detailing Services",
//     description:
//       "Transform your vehicle with our professional car detailing services. Premium quality, attention to detail.",
//     url: "https://carlux.ca",
//     siteName: "Carlux",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Carlux - Professional Car Detailing",
//       },
//     ],
//     locale: "en_CA",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Carlux - Premium Car Detailing Services",
//     description: "Professional car detailing services across Canada. Transform your vehicle today.",
//     images: ["/og-image.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// }

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
