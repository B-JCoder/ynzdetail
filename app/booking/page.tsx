"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Car, User, Phone, Mail } from "lucide-react"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    vehicleType: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    notes: "",
  })

  const services = [
    { value: "exterior", label: "Exterior Cleaning - $80+" },
    { value: "interior", label: "Interior Detailing - $120+" },
    { value: "paint", label: "Paint Correction - $300+" },
    { value: "ceramic", label: "Ceramic Coating - $800+" },
    { value: "full", label: "Full Detail Package - $400+" },
    { value: "maintenance", label: "Premium Maintenance - $150+" },
  ]

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    // Handle booking submission
  }

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Book Your Appointment with Carlux</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Schedule your premium car detailing service with Carlux. Fill out the form below and we'll confirm your
            appointment within 24 hours.
          </p>
        </div>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center">
              <Calendar className="mr-2 h-6 w-6 text-blue-400" />
              Appointment Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-white font-semibold flex items-center">
                    <User className="mr-2 h-5 w-5 text-blue-400" />
                    Personal Information
                  </h3>

                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    required
                  />

                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    required
                  />

                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold flex items-center">
                    <Car className="mr-2 h-5 w-5 text-blue-400" />
                    Vehicle Information
                  </h3>

                  <Select onValueChange={(value) => handleChange("vehicleType", value)}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Vehicle Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="coupe">Coupe</SelectItem>
                      <SelectItem value="convertible">Convertible</SelectItem>
                      <SelectItem value="luxury">Luxury Vehicle</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    placeholder="Year (e.g., 2020)"
                    value={formData.vehicleYear}
                    onChange={(e) => handleChange("vehicleYear", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      placeholder="Make (e.g., BMW)"
                      value={formData.vehicleMake}
                      onChange={(e) => handleChange("vehicleMake", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Input
                      placeholder="Model (e.g., X5)"
                      value={formData.vehicleModel}
                      onChange={(e) => handleChange("vehicleModel", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Service Selection</h3>
                <Select onValueChange={(value) => handleChange("service", value)} required>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-white font-semibold flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-blue-400" />
                    Preferred Date
                  </h3>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-400" />
                    Preferred Time
                  </h3>
                  <Select onValueChange={(value) => handleChange("time", value)} required>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Additional Notes</h3>
                <Textarea
                  placeholder="Any special requests or notes about your vehicle's condition..."
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  rows={4}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                Book Appointment with Carlux
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-4">
                Have questions about our services or need to discuss a custom package? Contact Carlux directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+14384087454">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Button>
                </a>
                <a href="mailto:yanislaroche@gmail.com">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
