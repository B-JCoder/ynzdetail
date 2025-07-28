"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const galleryItems = [
    {
      id: 1,
      category: "exterior",
      beforeImage: "/images/bmw-detailing.jpg",
      afterImage: "/images/hero-car.jpg",
      title: "Exterior Transformation",
      description: "Complete exterior detail with paint correction",
    },
    {
      id: 2,
      category: "interior",
      beforeImage: "/images/interior-cleaning.jpg",
      afterImage: "/images/interior-detailing-1.jpg",
      title: "Interior Revival",
      description: "Deep interior cleaning and conditioning",
    },
    {
      id: 3,
      category: "paint",
      beforeImage: "/images/car-washing-1.jpg",
      afterImage: "/images/paint-correction.jpg",
      title: "Paint Correction",
      description: "Scratch and swirl removal",
    },
    {
      id: 4,
      category: "ceramic",
      beforeImage: "/images/car-washing-2.jpg",
      afterImage: "/images/hero-car.jpg",
      title: "Ceramic Coating",
      description: "Long-lasting protection applied",
    },
    {
      id: 5,
      category: "exterior",
      beforeImage: "/images/bmw-detailing.jpg",
      afterImage: "/images/team-detailing.jpg",
      title: "Paint Restoration",
      description: "Professional team detailing",
    },
    {
      id: 6,
      category: "interior",
      beforeImage: "/images/interior-cleaning.jpg",
      afterImage: "/images/interior-detailing-2.jpg",
      title: "Interior Detailing",
      description: "Steam cleaning and conditioning",
    },
  ]

  const filters = [
    { id: "all", label: "All Work" },
    { id: "exterior", label: "Exterior" },
    { id: "interior", label: "Interior" },
    { id: "paint", label: "Paint Correction" },
    { id: "ceramic", label: "Ceramic Coating" },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#0B0D17] to-[#0A0F1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0E14A] mb-4 tracking-wider">OUR WORK GALLERY</h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            See the incredible transformations we've achieved for our clients. Every project showcases our commitment to
            excellence.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={
                  activeFilter === filter.id
                    ? "bg-[#00BFFF] hover:bg-[#1F75FE] text-[#0A0F1C] font-bold"
                    : "border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#0A0F1C] bg-transparent font-bold"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="glass-morphism overflow-hidden group hover:border-[#00BFFF] transition-all duration-300"
            >
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.beforeImage || "/placeholder.svg"}
                      alt={`${item.title} - Before`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-[#FF3C38] text-white px-2 py-1 text-xs rounded font-bold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.afterImage || "/placeholder.svg"}
                      alt={`${item.title} - After`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-[#8CC63F] text-[#0A0F1C] px-2 py-1 text-xs rounded font-bold">
                      AFTER
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[#F0E14A] font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
