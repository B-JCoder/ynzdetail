"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+14384087454"
    const message = encodeURIComponent("Hi! I'm interested in your Carlux car detailing services.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact Carlux on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
