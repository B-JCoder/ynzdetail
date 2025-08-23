import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 diamond-clip bg-luxury-gold"></div>
              <span className="text-3xl font-heading font-bold text-luxury-gold">Carlux</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium automotive detailing services across Canada. Where luxury meets perfection.
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
            <h3 className="text-luxury-gold font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                  Premium Wash
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                  Interior Luxury
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                  Paint Perfection
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                  Ceramic Shield
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-luxury-gold font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-luxury-gold transition-colors duration-300">
                  Book Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-luxury-gold font-heading font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold" />
                <span className="text-gray-300">Canada Wide</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-luxury-gold" />
                <a
                  href="tel:+14384087454"
                  className="text-gray-300 hover:text-luxury-gold transition-colors duration-300"
                >
                  +1 438-408-7454
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-luxury-gold" />
                <a
                  href="mailto:yanislaroche@gmail.com"
                  className="text-gray-300 hover:text-luxury-gold transition-colors duration-300"
                >
                  yanislaroche@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-gold/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Carlux. All rights reserved. | Luxury Automotive Detailing Services</p>
        </div>
      </div>
    </footer>
  )
}
