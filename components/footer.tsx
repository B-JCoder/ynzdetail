import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        
        {/* Top Row: Logo + Headings in one line */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          
          {/* Logo + Description */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Carlux Montréal Logo"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-heading font-bold text-white tracking-wider leading-none">
                  CARLUX
                </span>
                <span className="text-base text-luxury-gold tracking-widest leading-none">
                  MONTRÉAL
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium automotive detailing services across Canada. <br />
              Where luxury meets perfection.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/carlux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-luxury-gold transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/carlux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-luxury-gold transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-luxury-gold font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-300 hover:text-luxury-gold">Premium Wash</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-luxury-gold">Interior Luxury</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-luxury-gold">Paint Perfection</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-luxury-gold">Ceramic Shield</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-luxury-gold font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-300 hover:text-luxury-gold">Home</Link></li>
              <li><Link href="#about" className="text-gray-300 hover:text-luxury-gold">About</Link></li>
              <li><Link href="#gallery" className="text-gray-300 hover:text-luxury-gold">Gallery</Link></li>
              <li><Link href="/booking" className="text-gray-300 hover:text-luxury-gold">Book Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-luxury-gold font-heading font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold" />
                <span className="text-gray-300">Canada Wide</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-luxury-gold" />
                <a href="tel:+14384087454" className="text-gray-300 hover:text-luxury-gold">
                  +1 438-408-7454
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-luxury-gold" />
                <a href="mailto:yanislaroche@gmail.com" className="text-gray-300 hover:text-luxury-gold">
                  yanislaroche@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Carlux. All rights reserved. | Luxury Automotive Detailing Services
          </p>
        </div>
      </div>
    </footer>
  )
}
