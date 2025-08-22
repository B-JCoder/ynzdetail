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
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to transform your vehicle? Contact Carlux today to schedule your appointment or get a custom quote for
            your detailing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-700/50 border-gray-600">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />

                <Textarea
                  name="message"
                  placeholder="Tell us about your vehicle and what services you're interested in..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  required
                />

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-700/50 border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-white text-xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-300">Serving all of Canada</p>
                      <p className="text-gray-300">Mobile service available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <a href="tel:+14384087454" className="text-blue-400 hover:text-blue-300">
                        +1 438-408-7454
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:yanislaroche@gmail.com" className="text-blue-400 hover:text-blue-300">
                        yanislaroche@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Sat: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-300">Sun: By appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media & Quick Actions */}
            <Card className="bg-gray-700/50 border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-white text-xl font-semibold mb-6">Connect With Us</h3>

                <div className="flex space-x-4 mb-6">
                  <a
                    href="https://facebook.com/carlux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://instagram.com/carlux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                </div>

                <div className="space-y-3">
                  <a href="https://wa.me/14384087454" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">WhatsApp Us</Button>
                  </a>
                  <a href="tel:+14384087454">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Call Us</Button>
                  </a>
                  <a href="mailto:yanislaroche@gmail.com">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Email Us</Button>
                  </a>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book Appointment</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
