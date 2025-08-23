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
      title: "Paint Perfection",
      description: "Scratch and swirl removal mastery",
    },
    {
      id: 4,
      category: "ceramic",
      beforeImage: "/images/car-washing-2.jpg",
      afterImage: "/images/hero-car.jpg",
      title: "Ceramic Shield",
      description: "Ultimate protection applied",
    },
    {
      id: 5,
      category: "exterior",
      beforeImage: "/images/bmw-detailing.jpg",
      afterImage: "/images/team-detailing.jpg",
      title: "Paint Restoration",
      description: "Professional luxury detailing",
    },
    {
      id: 6,
      category: "interior",
      beforeImage: "/images/interior-cleaning.jpg",
      afterImage: "/images/interior-detailing-2.jpg",
      title: "Interior Luxury",
      description: "Premium cleaning and conditioning",
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
    <section id="gallery" className="section-padding bg-black relative geometric-bg">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="heading-lg text-luxury-gold mb-6 tracking-wide">LUXURY GALLERY</h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-luxury text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            Witness the extraordinary transformations achieved through our meticulous craftsmanship and attention to
            detail.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? "btn-luxury" : "btn-luxury-outline"}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="glass-luxury overflow-hidden group hover:border-luxury-gold transition-all duration-500 hover-lift"
            >
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.beforeImage || "/placeholder.svg"}
                      alt={`${item.title} - Before`}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-xs rounded font-bold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.afterImage || "/placeholder.svg"}
                      alt={`${item.title} - After`}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-luxury-gold text-black px-3 py-1 text-xs rounded font-bold">
                      AFTER
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-luxury-gold font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
