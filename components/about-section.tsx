import { Award, Users, Clock, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Master Craftsmanship",
      description: "Decades of expertise in luxury automotive care",
    },
    {
      icon: Users,
      title: "Client Excellence",
      description: "Personalized service for discerning customers",
    },
    {
      icon: Clock,
      title: "Precision Timing",
      description: "Meticulous attention without compromise",
    },
    {
      icon: Shield,
      title: "Luxury Guarantee",
      description: "Uncompromising quality assurance",
    },
  ]

  return (
    <section id="about" className="section-padding bg-luxury-charcoal relative">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-slide-up">
            <h2 className="heading-lg text-luxury-gold mb-8 tracking-wide">ABOUT CARLUX</h2>
            <div className="w-20 h-1 bg-luxury-gold mb-10"></div>

            <p className="text-white text-xl mb-8 leading-relaxed">
              At <span className="text-luxury-gold font-semibold">Carlux Montréal</span>, we redefine automotive
              excellence. Our passion lies in transforming vehicles into masterpieces through meticulous attention to
              detail and uncompromising quality standards.
            </p>

            <p className="text-white text-xl mb-12 leading-relaxed">
              Every service is a testament to our commitment to luxury, precision, and the art of automotive perfection.
              We don't just detail cars – we craft experiences that match the sophistication of Montréal's luxury
              automotive scene.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 hover-lift">
                  <div className="flex-shrink-0 p-3 diamond-clip bg-luxury-gold">
                    <feature.icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-luxury-gold font-heading font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-white leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <Card className="glass-luxury border-luxury-gold hover-lift">
              <CardContent className="p-10">
                <img
                  src="/images/team-detailing.jpg"
                  alt="Carlux Montréal professional team at work"
                  className="w-full h-80 object-cover rounded-lg mb-8"
                />
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="p-6 glass-luxury rounded-lg">
                    <div className="text-3xl font-heading font-bold text-luxury-gold">10+</div>
                    <div className="text-white text-sm mt-1">Years Excellence</div>
                  </div>
                  <div className="p-6 glass-luxury rounded-lg">
                    <div className="text-3xl font-heading font-bold text-luxury-gold">500+</div>
                    <div className="text-white text-sm mt-1">Luxury Cars</div>
                  </div>
                  <div className="p-6 glass-luxury rounded-lg">
                    <div className="text-3xl font-heading font-bold text-luxury-gold">100%</div>
                    <div className="text-white text-sm mt-1">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
