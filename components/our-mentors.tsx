import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, Award, TrendingUp } from "lucide-react"

export function OurMentors() {
  const companies = [
    {
      name: "Google",
      logo: "/logos/google-logo.webp",
      category: "Technology",
    },
    {
      name: "Microsoft",
      logo: "/logos/microsoft-logo.webp",
      category: "Technology",
    },
    {
      name: "Amazon",
      logo: "/logos/amazon-logo.png",
      category: "Technology",
    },
    {
      name: "IBM",
      logo: "/logos/ibm-logo.png",
      category: "Technology",
    },
    {
      name: "BCG",
      logo: "/logos/bcg-logo.png",
      category: "Consulting",
    },
    {
      name: "TD Bank",
      logo: "/logos/td-logo.png",
      category: "Financial Services",
    },
    {
      name: "RBC",
      logo: "/logos/rbc-logo.jpeg",
      category: "Financial Services",
    },
    {
      name: "Canadian Medical Association",
      logo: "/logos/cma-logo.png",
      category: "Healthcare",
    },
    {
      name: "University of Toronto - Temerty Faculty of Medicine",
      logo: "/logos/uoft-medicine-logo.png",
      category: "Medical School",
    },
    {
      name: "Schulich Medicine & Dentistry",
      logo: "/logos/schulich-medicine-logo.jpeg",
      category: "Medical School",
    },
  ]

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Industry Mentors",
      description: "Experienced professionals ready to guide you",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Building,
      number: "25+",
      label: "Top Companies",
      description: "Leading organizations across Canada",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      number: "10+",
      label: "Industries",
      description: "Tech, Finance, Consulting, Healthcare & more",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Career Growth",
      description: "Focused on your professional development",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mentors Work At</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with Hindu professionals from Canada's most prestigious companies and institutions
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-24 flex items-center justify-center group border border-gray-100"
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="max-h-12 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${stat.color} p-8 text-white text-center`}>
                  <stat.icon className="h-12 w-12 mx-auto mb-4" />
                  <div className="text-4xl font-black mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold">{stat.label}</div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 max-w-4xl mx-auto border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Meet Your Future Mentor?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our mentors are successful Hindu professionals who understand your journey and are committed to helping
              you succeed. They've walked the path you're on and are ready to share their insights, connections, and
              guidance.
            </p>
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-orange-600 mb-2">1:1 Mentoring</div>
                <p className="text-gray-600 text-sm">Personal guidance tailored to your goals</p>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-orange-600 mb-2">Industry Insights</div>
                <p className="text-gray-600 text-sm">Real-world knowledge from top companies</p>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-orange-600 mb-2">Network Access</div>
                <p className="text-gray-600 text-sm">Connect with their professional networks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
