"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: "About", id: "about" },
    { label: "What to Bring", id: "what-you-need" },
    { label: "Mentors", id: "mentors" },
    { label: "CNCH", id: "who-we-are" },
    { label: "Quiz", id: "quiz" },
    { label: "Speakers", id: "speakers" },
    { label: "Schedule", id: "schedule" },
    { label: "Venue", id: "venue" },
    { label: "Resources", id: "reading" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img src="/cnch-logo.png" alt="CNCH Logo" className="h-8 w-auto" />
            <div className="text-xl font-bold text-gray-900 whitespace-nowrap">DharmaCon</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors whitespace-nowrap text-sm"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("register")}
              className="bg-orange-600 hover:bg-orange-700 text-sm px-4 py-2"
            >
              Register Now
            </Button>
          </div>

          {/* Tablet Navigation - Simplified */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <button
              onClick={() => scrollToSection("mentors")}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-sm"
            >
              Mentors
            </button>
            <button
              onClick={() => scrollToSection("quiz")}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-sm"
            >
              Quiz
            </button>
            <button
              onClick={() => scrollToSection("reading")}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-sm"
            >
              <BookOpen className="h-4 w-4" />
            </button>
            <Button
              onClick={() => scrollToSection("register")}
              className="bg-orange-600 hover:bg-orange-700 text-sm px-3 py-2"
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-orange-600 p-2">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100 bg-white">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-orange-600 font-medium py-2 px-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("register")}
                className="bg-orange-600 hover:bg-orange-700 mt-4 mx-2"
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
