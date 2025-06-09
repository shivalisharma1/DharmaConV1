"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Calendar, MapPin, Clock } from "lucide-react"
import { AnimatedLogo } from "./animated-logo"

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-09-27T09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-orange-300 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-12">
        <div className="mx-auto max-w-6xl">
          {/* Main Conference Announcement */}
          <div className="text-center mb-12">
            <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white font-semibold text-sm shadow-lg animate-pulse">
              🎉 ANNOUNCING: Canada's First Hindu Youth Leadership Conference
            </div>

            {/* Animated DharmaCon Logo */}
            <AnimatedLogo />

            <div className="mb-8 inline-block bg-white rounded-2xl p-8 shadow-2xl border border-orange-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="text-xl font-bold text-gray-900">September 27, 2025</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-xl font-bold text-gray-900">Toronto, Ontario</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-6 w-6 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="text-xl font-bold text-gray-900">9:00 AM - 5:30 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-orange-100">
                <p className="text-lg font-semibold text-orange-600">www.dharmacon.ca</p>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Conference Starts In:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-orange-100 text-center">
                  <div className="text-3xl md:text-4xl font-black text-orange-600">{item.value}</div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center shadow-xl">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">500+ Young Leaders</h3>
              <p className="text-orange-100">Connect with Hindu youth across Canada</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl p-6 text-white text-center shadow-xl">
              <Globe className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">National Impact</h3>
              <p className="text-red-100">First-ever conference of its kind in Canada</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl p-6 text-white text-center shadow-xl">
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Full Day Program</h3>
              <p className="text-pink-100">Workshops, panels, networking & more</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Empowering the next generation of Hindu youth leaders across Canada
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => scrollToSection("register")}
              >
                Register Now - FREE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </Button>
            </div>

            <p className="text-sm text-gray-600 mt-4">✨ Limited spots available • Early bird registration open</p>
          </div>

          {/* Conference Poster */}
          <div className="text-center">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur-xl opacity-30 transform scale-105"></div>
              <img
                src="/dharmacon-poster.jpg"
                alt="DharmaCon 2025 Official Conference Poster"
                className="relative max-w-sm md:max-w-md w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Powered by CNCH */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-100">
              <span className="text-gray-700 font-medium">Proudly powered by</span>
              <span className="ml-2 font-bold text-orange-600">CNCH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
