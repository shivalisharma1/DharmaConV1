"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ageGroup: "",
    province: "",
    affiliation: "",
    interests: [] as string[],
    experience: "",
    expectations: "",
  })

  const ageGroups = ["16-18", "19-22", "23-26", "27-30"]

  const canadianProvinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ]

  const affiliations = [
    "HSC (Hindu Students Council)",
    "HSA (Hindu Students Association)",
    "Yuva",
    "Bhakti Yoga",
    "Chinmaya Mission",
    "Ananda Marga Yoga and Meditation Club",
    "Other",
    "Not affiliated with any organization",
  ]

  const interestAreas = [
    "Leadership Development",
    "Community Service",
    "Cultural Studies",
    "Volunteer Opportunities",
    "Networking",
    "Mentorship",
  ]

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Register for DharmaCon</h2>
            <p className="text-lg text-gray-700">
              Join us in Toronto on September 27, 2025. We're keeping registration simple initially - more details will
              be collected closer to the event.
            </p>
          </div>

          <Card className="shadow-xl border-orange-100">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Conference Registration</CardTitle>
              <CardDescription className="text-amber-100">September 27, 2025 • Toronto, Ontario</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="ageGroup">Age Group *</Label>
                    <Select
                      value={formData.ageGroup}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, ageGroup: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                      <SelectContent>
                        {ageGroups.map((age) => (
                          <SelectItem key={age} value={age}>
                            {age}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="province">Province/Territory *</Label>
                    <Select
                      value={formData.province}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, province: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select province" />
                      </SelectTrigger>
                      <SelectContent>
                        {canadianProvinces.map((province) => (
                          <SelectItem key={province} value={province}>
                            {province}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="affiliation">Organization Affiliation</Label>
                  <Select
                    value={formData.affiliation}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, affiliation: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your organization (if any)" />
                    </SelectTrigger>
                    <SelectContent>
                      {affiliations.map((affiliation) => (
                        <SelectItem key={affiliation} value={affiliation}>
                          {affiliation}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-medium">Areas of Interest (Select all that apply)</Label>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {interestAreas.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <Label htmlFor={interest} className="text-sm font-normal">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Previous Leadership Experience (Optional)</Label>
                  <Textarea
                    id="experience"
                    placeholder="Briefly describe any leadership roles or community involvement..."
                    value={formData.experience}
                    onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="expectations">What do you hope to gain from DharmaCon? (Optional)</Label>
                  <Textarea
                    id="expectations"
                    placeholder="Share your expectations and goals for the conference..."
                    value={formData.expectations}
                    onChange={(e) => setFormData((prev) => ({ ...prev, expectations: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                    Register for DharmaCon
                  </Button>
                  <p className="mt-3 text-sm text-gray-500 text-center">
                    Additional details and requirements will be shared with registered participants closer to the event
                    date.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
