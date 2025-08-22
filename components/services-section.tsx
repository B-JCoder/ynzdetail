import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Car, Paintbrush, Shield, Droplets, Album as Vacuum } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      icon: Droplets,
      title: "Exterior Cleaning",
      description: "Complete exterior wash, wax, and protection for a brilliant shine.",
      features: ["Hand wash", "Clay bar treatment", "Wax application", "Tire shine"],
      price: "Starting at $80",
      image: "/images/car-washing-1.jpg",
    },
    {
      icon: Vacuum,
      title: "Interior Detailing",
      description: "Deep cleaning and conditioning of all interior surfaces.",
      features: ["Vacuum & steam clean", "Leather conditioning", "Dashboard treatment", "Odor elimination"],
      price: "Starting at $120",
      image: "/images/interior-detailing-1.jpg",
    },
    {
      icon: Paintbrush,
      title: "Paint Correction",
      description: "Professional paint restoration to remove swirls and scratches.",
      features: ["Swirl removal", "Scratch repair", "Paint polishing", "Clear coat restoration"],
      price: "Starting at $300",
      image: "/images/paint-correction.jpg",
    },
    {
      icon: Shield,
      title: "Ceramic Coating",
      description: "Long-lasting protection with hydrophobic properties.",
      features: ["9H hardness", "2-5 year protection", "UV resistance", "Easy maintenance"],
      price: "Starting at $800",
      image: "/images/bmw-detailing.jpg",
    },
    {
      icon: Car,
      title: "Full Detail Package",
      description: "Complete interior and exterior detailing service.",
      features: ["Everything included", "Paint correction", "Interior deep clean", "Protection coating"],
      price: "Starting at $400",
      image: "/images/team-detailing.jpg",
    },
    {
      icon: Sparkles,
      title: "Premium Maintenance",
      description: "Regular maintenance packages to keep your car pristine.",
      features: ["Monthly service", "Quick touch-ups", "Interior refresh", "Exterior protection"],
      price: "Starting at $150",
      image: "/images/interior-cleaning.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#0A0F1C] to-[#0B0D17] relative">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0E14A] mb-4 tracking-wider">OUR PREMIUM SERVICES</h2>
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From basic maintenance to complete transformations, we offer comprehensive auto care services tailored to
            your vehicle's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-morphism hover:border-[#00BFFF] transition-all duration-300 group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 to-transparent"></div>
                </div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 hexagon-clip bg-[#00BFFF]">
                    <service.icon className="h-5 w-5 text-[#0A0F1C]" />
                  </div>
                  <CardTitle className="text-[#F0E14A] text-lg">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                      <div className="w-2 h-2 hexagon-clip bg-[#8CC63F] mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-[#00BFFF] font-bold text-lg">{service.price}</span>
                  <Link href="/booking">
                    <Button size="sm" className="bg-[#FF3C38] hover:bg-[#FF5555] text-white font-bold">
                      Book Service
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
