"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-luxury-charcoal">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="heading-lg text-luxury-gold mb-6 tracking-wide">GET IN TOUCH</h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to experience luxury automotive care? Contact Carlux Montréal today to schedule your premium detailing
            service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="glass-luxury border-luxury-gold hover-lift">
            <CardHeader>
              <CardTitle className="text-luxury-gold text-2xl font-heading">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black/50 border-luxury-gold/30 text-white placeholder-gray-400 h-14 text-lg focus:border-luxury-gold"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black/50 border-luxury-gold/30 text-white placeholder-gray-400 h-14 text-lg focus:border-luxury-gold"
                    required
                  />
                </div>

                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-black/50 border-luxury-gold/30 text-white placeholder-gray-400 h-14 text-lg focus:border-luxury-gold"
                />

                <Textarea
                  name="message"
                  placeholder="Tell us about your vehicle and desired services..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-black/50 border-luxury-gold/30 text-white placeholder-gray-400 text-lg focus:border-luxury-gold"
                  required
                />

                <Button type="submit" className="w-full btn-luxury text-lg py-4">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-10">
            <Card className="glass-luxury border-luxury-gold hover-lift">
              <CardContent className="p-8">
                <h3 className="text-luxury-gold text-2xl font-heading font-bold mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-luxury-gold mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">Location</p>
                      <p className="text-white">Montréal, Quebec</p>
                      <p className="text-white">Mobile luxury detailing available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-luxury-gold mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">Phone</p>
                      <a href="tel:+14384087454" className="text-luxury-gold hover:text-yellow-400 text-lg">
                        +1 438-408-7454
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-luxury-gold mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">Email</p>
                      <a
                        href="mailto:yanislaroche@gmail.com"
                        className="text-luxury-gold hover:text-yellow-400 text-lg"
                      >
                        yanislaroche@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-luxury-gold mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">Hours</p>
                      <p className="text-white">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-white">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-white">Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
    <Card className="glass-luxury border-luxury-gold hover-lift">
  <CardContent className="p-8">
    <h3 className="text-luxury-gold text-2xl font-heading font-bold mb-8">Connect With Us</h3>

    <div className="flex space-x-6 mb-8">
      <a
        href="https://www.facebook.com/CarLuxMobile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-luxury-gold hover:bg-yellow-400 rounded-lg transition-colors duration-300"
      >
        <Facebook className="h-7 w-7 text-black" />
      </a>
      <a
        href="https://instagram.com/carlux"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg transition-colors duration-300"
      >
        <Instagram className="h-7 w-7 text-white" />
      </a>
    </div>

    {/* Horizontal Buttons */}
    <div className="flex flex-wrap gap-4">
      <a href="https://wa.me/14384087454" target="_blank" rel="noopener noreferrer" className="flex-1">
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg">
          WhatsApp Us
        </Button>
      </a>
      <a href="tel:+14384087454" className="flex-1">
        <Button className="w-full btn-luxury-outline py-4 text-lg">
          Call Now
        </Button>
      </a>
      <a href="mailto:yanislaroche@gmail.com" className="flex-1">
        <Button className="w-full btn-luxury-outline py-4 text-lg">
          Email Us
        </Button>
      </a>
    </div>
  </CardContent>
</Card>

          </div>
        </div>
      </div>
    </section>
  )
}
