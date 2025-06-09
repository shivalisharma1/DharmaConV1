import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Car, Train, Phone, Globe } from "lucide-react"

export function Venue() {
  const venueDetails = [
    {
      icon: MapPin,
      title: "Location",
      description: "Sringeri Temple, Etobicoke, Ontario",
    },
    {
      icon: Clock,
      title: "Date & Time",
      description: "September 27, 2025 - 9:00 AM to 5:00 PM",
    },
    {
      icon: Car,
      title: "Parking",
      description: "Free parking available on temple grounds",
    },
    {
      icon: Train,
      title: "Transit",
      description: "Accessible via TTC bus routes and nearby subway",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Venue Information</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            DharmaCon will be held at the beautiful Sringeri Temple in Etobicoke, providing a sacred and inspiring
            environment for our inaugural conference.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {venueDetails.map((detail, index) => (
            <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <detail.icon className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{detail.title}</h3>
                <p className="text-gray-600 text-sm">{detail.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sringeri Temple</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Address:</p>
                    <p>123 Temple Road, Etobicoke, ON M9W 1A1</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Contact:</p>
                    <p>(416) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Website:</p>
                    <p>www.sringeritemple.ca</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Note:</strong> Please dress modestly and remove shoes before entering the temple premises.
                  Vegetarian meals will be served in accordance with temple guidelines.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Location Map</h3>
              <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1234567890123!2d-79.5234567!3d43.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM3JzI0LjQiTiA3OcKwMzEnMjQuNCJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sringeri Temple Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=Sringeri+Temple+Etobicoke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-orange-200 shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting to Sringeri Temple</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <Car className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">By Car</h4>
                <p className="text-gray-600 text-sm">
                  Free parking available on temple grounds. Take Highway 427 to Rexdale Blvd exit.
                </p>
              </div>
              <div>
                <Train className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">By Transit</h4>
                <p className="text-gray-600 text-sm">
                  Take TTC bus routes 900 or 46 from Kipling Station. 15-minute walk from nearest stop.
                </p>
              </div>
              <div>
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Arrival Time</h4>
                <p className="text-gray-600 text-sm">
                  Please arrive by 8:45 AM for registration. Temple opens at 8:30 AM for early arrivals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
