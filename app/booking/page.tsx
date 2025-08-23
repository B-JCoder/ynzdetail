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
    { value: "premium-wash", label: "Premium Wash - From $120" },
    { value: "interior-luxury", label: "Interior Luxury - From $180" },
    { value: "paint-perfection", label: "Paint Perfection - From $450" },
    { value: "ceramic-shield", label: "Ceramic Shield - From $1200" },
    { value: "complete-luxury", label: "Complete Luxury - From $800" },
    { value: "maintenance-elite", label: "Maintenance Elite - From $250" },
  ]

  const timeSlots = ["8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Luxury booking submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="min-h-screen bg-black pt-20 sm:pt-24 geometric-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h1 className="heading-lg text-luxury-gold mb-4 sm:mb-6 tracking-wide text-2xl sm:text-3xl md:text-4xl">
            BOOK LUXURY SERVICE
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-luxury-gold mx-auto mb-6 sm:mb-8"></div>
          <p className="text-luxury text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Schedule your premium automotive detailing experience with Carlux. We'll confirm your appointment within 24 hours.
          </p>
        </div>

        {/* Booking Card */}
        <Card className="glass-luxury border-luxury-gold hover-lift">
          <CardHeader className="pb-6 sm:pb-8">
            <CardTitle className="text-luxury-gold text-2xl sm:text-3xl font-heading flex items-center justify-center">
              <Calendar className="mr-3 sm:mr-4 h-6 w-6 sm:h-8 sm:w-8" />
              Appointment Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
              
              {/* Personal + Vehicle */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                {/* Personal Info */}
                <div className="space-y-5 sm:space-y-6">
                  <h3 className="text-luxury-gold font-heading font-bold text-lg sm:text-xl flex items-center">
                    <User className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    Personal Information
                  </h3>
                  <Input placeholder="Full Name" value={formData.name} 
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="bg-luxury-charcoal border-gray-600 text-white placeholder-gray-400 h-12 sm:h-14 text-base sm:text-lg" required />
                  <Input type="email" placeholder="Email Address" value={formData.email} 
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-luxury-charcoal border-gray-600 text-white placeholder-gray-400 h-12 sm:h-14 text-base sm:text-lg" required />
                  <Input type="tel" placeholder="Phone Number" value={formData.phone} 
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-luxury-charcoal border-gray-600 text-white placeholder-gray-400 h-12 sm:h-14 text-base sm:text-lg" required />
                </div>

                {/* Vehicle Info */}
                <div className="space-y-5 sm:space-y-6">
                  <h3 className="text-luxury-gold font-heading font-bold text-lg sm:text-xl flex items-center">
                    <Car className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    Vehicle Information
                  </h3>
                  <Select onValueChange={(value) => handleChange("vehicleType", value)}>
                    <SelectTrigger className="bg-luxury-charcoal border-gray-600 text-white h-12 sm:h-14 text-base sm:text-lg">
                      <SelectValue placeholder="Vehicle Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-luxury-charcoal border-gray-600">
                      <SelectItem value="luxury-sedan">Luxury Sedan</SelectItem>
                      <SelectItem value="luxury-suv">Luxury SUV</SelectItem>
                      <SelectItem value="sports-car">Sports Car</SelectItem>
                      <SelectItem value="luxury-coupe">Luxury Coupe</SelectItem>
                      <SelectItem value="convertible">Convertible</SelectItem>
                      <SelectItem value="exotic">Exotic Vehicle</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Year (e.g., 2023)" value={formData.vehicleYear}
                    onChange={(e) => handleChange("vehicleYear", e.target.value)}
                    className="bg-luxury-charcoal border-gray-600 text-white placeholder-gray-400 h-12 sm:h-14 text-base sm:text-lg" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Make (e.g., BMW)" value={formData.vehicleMake}
                      onChange={(e) => handleChange("vehicleMake", e.target.value)}
                      className="bg-luxury-charcoal border-gray-600 text-white placeholder-gray-400 h-12 sm:h-14 text-base sm:text-lg" />
                    <Input placeholder="Model (e.g., X5)" value={formData.vehicleModel}
                      onChange={(e) => handleChange("vehicleModel", e.target.value)}
                      className="bg-luxury-charcoal border-gray-600 text-white placeholder-gray-400 h-12 sm:h-14 text-base sm:text-lg" />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-5 sm:space-y-6">
                <h3 className="text-luxury-gold font-heading font-bold text-lg sm:text-xl">Luxury Service Selection</h3>
                <Select onValueChange={(value) => handleChange("service", value)} required>
                  <SelectTrigger className="bg-luxury-charcoal border-gray-600 text-white h-12 sm:h-14 text-base sm:text-lg">
                    <SelectValue placeholder="Select your premium service" />
                  </SelectTrigger>
                  <SelectContent className="bg-luxury-charcoal border-gray-600">
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>{service.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                <div className="space-y-5 sm:space-y-6">
                  <h3 className="text-luxury-gold font-heading font-bold text-lg sm:text-xl flex items-center">
                    <Calendar className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" /> Preferred Date
                  </h3>
                  <Input type="date" value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="bg-luxury-charcoal border-gray-600 text-white h-12 sm:h-14 text-base sm:text-lg" required />
                </div>
                <div className="space-y-5 sm:space-y-6">
                  <h3 className="text-luxury-gold font-heading font-bold text-lg sm:text-xl flex items-center">
                    <Clock className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" /> Preferred Time
                  </h3>
                  <Select onValueChange={(value) => handleChange("time", value)} required>
                    <SelectTrigger className="bg-luxury-charcoal border-gray-600 text-white h-12 sm:h-14 text-base sm:text-lg">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="bg-luxury-charcoal border-gray-600">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-5 sm:space-y-6">
                <h3 className="text-luxury-gold font-heading font-bold text-lg sm:text-xl">Special Requests</h3>
                <Textarea placeholder="Any special requests or notes about your luxury vehicle's condition..."
                  value={formData.notes} onChange={(e) => handleChange("notes", e.target.value)}
                  rows={5}
                  className="bg-luxury-charcoal border-gray-600 text-white placeholder-gray-400 text-base sm:text-lg" />
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full btn-luxury text-lg sm:text-xl py-4 sm:py-6 animate-gold-glow">
                Book Luxury Service with Carlux
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="glass-luxury border-luxury-gold hover-lift">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <h3 className="text-luxury-gold font-heading font-bold text-xl sm:text-2xl mb-4 sm:mb-6">
                Need Assistance?
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Have questions about our luxury services or need to discuss a custom package? Contact Carlux directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a href="tel:+14384087454">
                  <Button className="btn-luxury-outline px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                    <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" /> Call Us
                  </Button>
                </a>
                <a href="mailto:yanislaroche@gmail.com">
                  <Button className="btn-luxury-outline px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                    <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" /> Email Us
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
