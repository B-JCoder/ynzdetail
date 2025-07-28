"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 15, 28, 0.7), rgba(11, 13, 23, 0.5)), url('/images/hero-car.jpg')`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 hexagon-clip bg-blue-500 opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 hexagon-clip bg-green-500 opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="ynz-yellow drop-shadow-lg">PREMIUM</span>
            <br />
            <span className="text-white">CAR DETAILING</span>
            <br />
            <span className="ynz-cyan animate-glow">EXCELLENCE</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your vehicle with our professional detailing services.
            <span className="ynz-cyan font-semibold"> Precision, quality, and attention to every detail.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-ynz-yellow hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 text-lg border-2 border-ynz-cyan transition-all duration-300 water-ripple"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-ynz-cyan ynz-cyan hover:bg-blue-500 hover:text-white px-8 py-4 text-lg bg-transparent font-bold transition-all duration-300"
            >
              View Services
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-4 text-gray-200">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 ynz-yellow fill-current" />
              ))}
            </div>
            <span className="text-lg">
              <span className="ynz-yellow font-bold">5.0 Rating</span> •
              <span className="ynz-cyan font-semibold"> 200+ Happy Customers</span>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ynz-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ynz-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
