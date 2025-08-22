"use client"

// import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+14384087454"
    const message = encodeURIComponent("Hi! I'm interested in your Carlux car detailing services.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
  <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Contact Carlux on WhatsApp"
    >
      {/* Official WhatsApp SVG Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M16 .4C7.2.4 0 7.6 0 16.4c0 2.9.8 5.6 2.3 8L0 32l8.2-2.1c2.3 1.3 4.9 2 7.8 2 8.8 0 16-7.2 16-16S24.8.4 16 .4zm0 28.9c-2.4 0-4.6-.6-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.4 6-13.4 13.4-13.4S29.4 9 29.4 16.4 23.4 29.3 16 29.3zm7.4-10.1c-.4-.2-2.3-1.1-2.6-1.2s-.6-.2-.8.2-.9 1.2-1.1 1.4-.4.3-.8.1c-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6s-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.6 1.1 3 1.3 3.2c.2.2 2.1 3.3 5.1 4.6.7.3 1.2.5 1.6.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.7-.5z"/>
      </svg>
    </button>
  )
}
