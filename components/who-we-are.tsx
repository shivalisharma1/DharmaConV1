import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Award, MapIcon as Maple } from "lucide-react"

export function WhoWeAre() {
  const highlights = [
    {
      icon: Users,
      title: "1.4 Million Strong",
      description: "Representing the vibrant Hindu community across Canada",
    },
    {
      icon: Shield,
      title: "Religious Freedom",
      description: "Protecting and advocating for Hindu religious rights and freedoms",
    },
    {
      icon: Award,
      title: "Community Recognition",
      description: "Celebrating Hindu contributions to Canadian society and culture",
    },
    {
      icon: Maple,
      title: "Policy Advocacy",
      description: "Advancing equality and inclusive policies at all levels of government",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center">
              <img src="/cnch-logo.png" alt="CNCH Logo" className="h-16 w-auto mr-4" />
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">CNCH</h2>
                <p className="text-lg text-blue-600 font-medium">Canadian National Council of Hindus</p>
              </div>
            </div>
          </div>

          <Card className="mb-12 border-orange-200 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                At CNCH, we believe in creating a future where the{" "}
                <span className="font-bold text-blue-600">1.4 million Hindus across Canada</span> are not just heard but
                actively contribute to Canadian society. With a dedicated leadership team and strong community
                partnerships, we advocate for policies that advance equality, protect religious freedoms, and celebrate
                Hindu contributions to Canada.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg">
              <img src="/cnch-logo.png" alt="CNCH Logo" className="h-6 w-6 mr-3" />
              <span className="font-medium">DharmaCon 2025 is proudly powered by CNCH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
