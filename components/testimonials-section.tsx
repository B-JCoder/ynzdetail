import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael Chen",
      location: "Toronto, ON",
      rating: 5,
      text: "Absolutely exceptional service! My BMW has never looked better. Carlux's attention to detail is unmatched in the luxury detailing industry.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sarah Johnson",
      location: "Vancouver, BC",
      rating: 5,
      text: "The ceramic coating service exceeded all expectations. Six months later, my car still looks showroom perfect. True luxury service.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Rodriguez",
      location: "Calgary, AB",
      rating: 5,
      text: "Professional excellence from start to finish. They treated my luxury vehicle with the respect it deserves. Outstanding results.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Watson",
      location: "Montreal, QC",
      rating: 5,
      text: "The interior detailing was phenomenal. They restored my leather seats to better than new condition. Impeccable customer service.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "James Thompson",
      location: "Ottawa, ON",
      rating: 5,
      text: "Best luxury detailing service in Canada. Premium quality work, fair pricing, and they always exceed expectations. Highly recommended.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Lisa Park",
      location: "Edmonton, AB",
      rating: 5,
      text: "My Porsche has never looked more stunning. The paint correction work was flawless. Carlux truly understands luxury automotive care.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="section-padding bg-luxury-charcoal">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="heading-lg text-luxury-gold mb-6 tracking-wide">CLIENT TESTIMONIALS</h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-luxury text-xl max-w-3xl mx-auto leading-relaxed">
            Discover why discerning clients choose Carlux for their luxury automotive detailing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-luxury hover:border-luxury-gold transition-all duration-500 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-luxury-gold"
                  />
                  <div>
                    <h3 className="text-white font-heading font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-luxury-gold fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-luxury-gold mb-4 opacity-50" />
                  <p className="text-gray-300 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 glass-luxury rounded-lg p-8 border border-luxury-gold">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-luxury-gold fill-current" />
              ))}
            </div>
            <div className="text-left sm:text-center md:text-left">
  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-luxury-gold">
    5.0 Rating
  </div>
  <div className="text-sm sm:text-base md:text-lg text-gray-300 mt-1">
    Based on 200+ luxury clients
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  )
}
