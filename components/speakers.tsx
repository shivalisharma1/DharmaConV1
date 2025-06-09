import { Card, CardContent } from "@/components/ui/card"
import { User, Award, BookOpen } from "lucide-react"

export function Speakers() {
  const speakers = [
    {
      name: "Coming Soon",
      title: "Keynote Speaker",
      description: "Renowned Hindu leader and community advocate",
      icon: User,
    },
    {
      name: "Coming Soon",
      title: "Workshop Leader",
      description: "Expert in dharmic leadership principles",
      icon: Award,
    },
    {
      name: "Coming Soon",
      title: "Panel Discussion",
      description: "Young Hindu professionals sharing their journey",
      icon: BookOpen,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Featured Speakers</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join us to hear from inspiring Hindu leaders, mentors, and young professionals who are making a difference
            in their communities across Canada.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {speakers.map((speaker, index) => (
            <Card key={index} className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <speaker.icon className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{speaker.name}</h3>
                <p className="text-orange-600 font-medium mb-3">{speaker.title}</p>
                <p className="text-gray-600">{speaker.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-800 rounded-lg">
            <span className="font-medium">Speaker lineup will be announced soon!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
