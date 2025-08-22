import { Award, Users, Clock, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Years of experience in premium auto detailing",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our top priority",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Efficient service without compromising quality",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all services",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0B0D17] to-[#0A0F1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F0E14A] mb-6 tracking-wider">ABOUT CARLUX</h2>
            <div className="w-24 h-1 bg-[#00BFFF] mb-6"></div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At <span className="text-[#00BFFF] font-semibold">Carlux</span>, we're passionate about transforming your
              vehicle into a masterpiece. With years of experience in the automotive detailing industry, we've built our
              reputation on delivering exceptional results that exceed expectations.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Our team of skilled professionals uses only the finest products and cutting-edge techniques to ensure your
              vehicle receives the care it deserves. From paint correction to ceramic coating, we treat every car as if
              it were our own.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 glass-morphism rounded-lg">
                  <div className="flex-shrink-0 p-2 hexagon-clip bg-[#00BFFF]">
                    <feature.icon className="h-5 w-5 text-[#0A0F1C]" />
                  </div>
                  <div>
                    <h3 className="text-[#F0E14A] font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="glass-morphism border-[#00BFFF]">
              <CardContent className="p-8">
                <img
                  src="/images/team-detailing.jpg"
                  alt="Professional car detailing team at work"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 glass-morphism rounded-lg">
                    <div className="text-2xl font-bold text-[#00BFFF]">5+</div>
                    <div className="text-gray-300 text-sm">Years Experience</div>
                  </div>
                  <div className="p-4 glass-morphism rounded-lg">
                    <div className="text-2xl font-bold text-[#8CC63F]">200+</div>
                    <div className="text-gray-300 text-sm">Cars Detailed</div>
                  </div>
                  <div className="p-4 glass-morphism rounded-lg">
                    <div className="text-2xl font-bold text-[#F0E14A]">100%</div>
                    <div className="text-gray-300 text-sm">Satisfaction</div>
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
