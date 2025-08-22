"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 15, 28, 0.7), rgba(11, 13, 23, 0.5)), url('/images/hero-car.jpg')`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 hexagon-clip bg-blue-500 opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 sm:w-24 sm:h-24 hexagon-clip bg-green-500 opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
            <span className="ynz-yellow drop-shadow-lg">PREMIUM</span>
            <br />
            <span className="text-white">CAR DETAILING</span>
            <br />
            <span className="ynz-cyan animate-glow">EXCELLENCE</span>
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Transform your vehicle with Carlux professional detailing services.
            <span className="ynz-cyan font-semibold"> Precision, quality, and attention to every detail.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <Link href="/booking" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-ynz-yellow hover:bg-yellow-400 text-gray-900 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-ynz-cyan transition-all duration-300 water-ripple"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-ynz-cyan ynz-cyan hover:bg-blue-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent font-bold transition-all duration-300"
              >
                View Services
              </Button>
            </Link>
          </div>

          {/* Ratings */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-200">
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 ynz-yellow fill-current" />
              ))}
            </div>
            <span className="text-sm sm:text-lg text-center sm:text-left">
              <span className="ynz-yellow font-bold">5.0 Rating</span> •
              <span className="ynz-cyan font-semibold"> 200+ Happy Customers</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
