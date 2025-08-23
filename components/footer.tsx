import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Top Row: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo + Text */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Carlux Montréal Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h2 className="text-xl font-bold text-white">CARLUX</h2>
                <span className="text-sm text-luxury-gold tracking-wide">MONTRÉAL</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Premium automotive detailing services across Canada.  
              Where luxury meets perfection.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-luxury-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-luxury-gold">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-luxury-gold font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#">Premium Wash</Link></li>
              <li><Link href="#">Interior Luxury</Link></li>
              <li><Link href="#">Paint Perfection</Link></li>
              <li><Link href="#">Ceramic Shield</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-luxury-gold font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Gallery</Link></li>
              <li><Link href="#">Book Service</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-luxury-gold font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-luxury-gold" />
                <span>Canada Wide</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-luxury-gold" />
                <a href="tel:+14384087454">+1 438-408-7454</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-luxury-gold" />
                <a href="mailto:yanislaroche@gmail.com">yanislaroche@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Carlux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
