// import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import WhatsAppFloat from "@/components/whatsapp-float"

// export const metadata: Metadata = {
//   title: "Carlux - Premium Car Detailing & Auto Care Services in Canada",
//   description:
//     "Professional car detailing services in Canada. Exterior cleaning, interior detailing, paint correction, ceramic coating, and premium auto care. Book your appointment today!",
//   keywords: "car detailing, auto care, paint correction, ceramic coating, car wash, Canada, Carlux",
//   openGraph: {
//     title: "Carlux - Premium Car Detailing Services",
//     description:
//       "Transform your vehicle with our professional car detailing services. Premium quality, attention to detail.",
//     type: "website",
//     locale: "en_CA",
//   },
// }

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppFloat />
    </main>
  )
}
