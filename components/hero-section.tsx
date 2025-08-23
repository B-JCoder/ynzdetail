"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(26, 26, 26, 0.5)), url('/images/hero-car.jpg')`,
        }}
      />

      {/* Geometric Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 diamond-clip bg-luxury-gold opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 sm:w-16 sm:h-16 hexagon-clip bg-luxury-gold opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-10 h-10 sm:w-12 sm:h-12 diamond-clip bg-luxury-gold opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-snug sm:leading-tight">
            <span className="text-luxury-gold">LUXURY</span>
            <br />
            <span className="text-white">CAR DETAILING</span>
            <br />
            <span className="text-luxury-gold animate-gold-glow">MONTRÉAL</span>
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-white mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-body">
            Experience the pinnacle of automotive care with Carlux Montréal.
            <span className="text-luxury-gold font-semibold"> Where precision meets luxury.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-16">
            <Link href="/booking" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto btn-luxury text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6">
                Book Service
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
            <Link href="#services" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto btn-luxury-outline text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6">
                View Services
              </Button>
            </Link>
          </div>

          {/* Ratings */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-white">
            <div className="flex items-center space-x-1 sm:space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-6 sm:w-6 text-luxury-gold fill-current" />
              ))}
            </div>
            <div className="text-sm sm:text-lg">
              <span className="text-luxury-gold font-bold">5.0 Rating</span>
              <span className="mx-1 sm:mx-2 text-luxury-gold">•</span>
              <span className="text-white font-semibold">200+ Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
