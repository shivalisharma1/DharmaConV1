import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Sparkles } from "lucide-react"

export function ConferenceStats() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Expected Attendees",
      description: "Young Hindu leaders from across Canada",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Award,
      number: "12+",
      label: "Expert Speakers",
      description: "Industry leaders and spiritual guides",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Globe,
      number: "10+",
      label: "Provinces Represented",
      description: "Coast to coast participation",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Sparkles,
      number: "1st",
      label: "Of Its Kind",
      description: "First Hindu youth leadership conference in Canada",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference by the Numbers</h2>
          <p className="text-xl text-gray-600">Join Canada's largest gathering of young Hindu leaders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  )
}
