"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-luxury shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-16 h-16">
              <Image
                src="/images/carlux-logo.png"
                alt="Carlux Montréal Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-bold text-white tracking-wider">CARLUX</span>
              <span className="text-sm text-luxury-gold font-medium tracking-widest">MONTRÉAL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-luxury-gold transition-colors duration-300 font-medium text-lg"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/booking">
              <Button className="btn-luxury animate-gold-glow">Book Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-luxury-gold transition-colors duration-300"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass-luxury mt-4 rounded-lg">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-luxury-gold transition-colors duration-300 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/booking">
                <Button className="w-full btn-luxury mt-4">Book Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
