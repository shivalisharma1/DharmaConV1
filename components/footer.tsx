import { Heart, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center mb-4">
              <img src="/cnch-logo.png" alt="CNCH Logo" className="h-8 w-auto mr-3" />
              <h3 className="text-xl font-bold text-amber-400">DharmaCon</h3>
            </div>
            <p className="text-gray-300 mb-4">
              CNCH Hindu Youth Conference - September 27, 2025 in Toronto. Empowering dharmic leadership for the next
              generation across Canada.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <Heart className="h-4 w-4 mr-2 text-orange-500" />
              Powered by Canadian National Council of Hindus
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-orange-500" />
                info@dharmacon.ca
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-orange-500" />
                www.dharmacon.ca
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Mission</h4>
            <p className="text-gray-300 text-sm">
              To unite, educate, and empower young Hindu voices across Canada, fostering leadership rooted in dharmic
              values and principles.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DharmaCon - Canadian National Council of Hindus. All rights reserved. | www.dharmacon.ca</p>
        </div>
      </div>
    </footer>
  )
}
