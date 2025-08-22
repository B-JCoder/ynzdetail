import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael Chen",
      location: "Toronto, ON",
      rating: 5,
      text: "Absolutely incredible work! My BMW looks better than when I first bought it. Carlux's attention to detail is unmatched.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sarah Johnson",
      location: "Vancouver, BC",
      rating: 5,
      text: "Carlux transformed my car completely. The ceramic coating has kept it looking pristine for months. Highly recommend!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Rodriguez",
      location: "Calgary, AB",
      rating: 5,
      text: "Professional service from start to finish. They treated my car like it was their own. The results speak for themselves.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Watson",
      location: "Montreal, QC",
      rating: 5,
      text: "The interior detailing was amazing. They removed stains I thought were permanent. Excellent customer service too!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "James Thompson",
      location: "Ottawa, ON",
      rating: 5,
      text: "Best car detailing service in the area. Fair pricing, quality work, and they always deliver on time. Will definitely return.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Lisa Park",
      location: "Edmonton, AB",
      rating: 5,
      text: "My luxury sedan has never looked better. The paint correction work was flawless. Carlux are true professionals.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about Carlux premium
            detailing services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-6 w-6 text-blue-400 mb-2" />
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">5.0 Average Rating</div>
              <div className="text-gray-300">Based on 200+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
