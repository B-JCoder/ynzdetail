import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Car, Paintbrush, Shield, Droplets, Zap } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      icon: Droplets,
      title: "Premium Wash",
      description: "Meticulous hand washing with luxury products for pristine results.",
      features: ["Hand wash", "Premium products", "Paint-safe techniques", "Tire detailing"],
      price: "From $120",
      image: "/images/car-washing-1.jpg",
    },
    {
      icon: Sparkles,
      title: "Interior Luxury",
      description: "Complete interior restoration using finest materials and techniques.",
      features: ["Deep cleaning", "Leather conditioning", "Premium protection", "Odor elimination"],
      price: "From $180",
      image: "/images/interior-detailing-1.jpg",
    },
    {
      icon: Paintbrush,
      title: "Paint Perfection",
      description: "Master-level paint correction for showroom-quality finish.",
      features: ["Swirl removal", "Scratch correction", "Paint polishing", "Clear coat restoration"],
      price: "From $450",
      image: "/images/paint-correction.jpg",
    },
    {
      icon: Shield,
      title: "Ceramic Shield",
      description: "Ultimate protection with premium ceramic coating technology.",
      features: ["9H hardness", "5-year protection", "Hydrophobic coating", "UV resistance"],
      price: "From $1200",
      image: "/images/bmw-detailing.jpg",
    },
    {
      icon: Car,
      title: "Complete Luxury",
      description: "Full-service transformation for the ultimate automotive experience.",
      features: ["Everything included", "Paint correction", "Interior luxury", "Ceramic protection"],
      price: "From $800",
      image: "/images/team-detailing.jpg",
    },
    {
      icon: Zap,
      title: "Maintenance Elite",
      description: "Regular luxury maintenance to keep your vehicle pristine.",
      features: ["Monthly service", "Quick detailing", "Interior refresh", "Paint maintenance"],
      price: "From $250",
      image: "/images/interior-cleaning.jpg",
    },
  ]

  return (
    <section id="services" className="section-padding bg-black relative geometric-bg">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="heading-lg text-luxury-gold mb-6 tracking-wide">LUXURY SERVICES</h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-luxury text-xl max-w-3xl mx-auto leading-relaxed">
            Experience automotive perfection through our curated selection of premium detailing services, each crafted
            to exceed the highest standards of luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-luxury hover:border-luxury-gold transition-all duration-500 group overflow-hidden hover-lift"
            >
              <CardHeader className="pb-6">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 diamond-clip bg-luxury-gold">
                    <service.icon className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-luxury-gold text-xl font-heading">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 diamond-clip bg-luxury-gold mr-4"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-luxury-gold font-heading font-bold text-xl">{service.price}</span>
                  <Link href="/booking">
                    <Button size="sm" className="bg-luxury-gold hover:bg-yellow-400 text-black font-bold px-6">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
