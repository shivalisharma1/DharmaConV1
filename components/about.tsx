import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Lightbulb, Network, Heart, Star } from "lucide-react"

export function About() {
  const features = [
    {
      icon: BookOpen,
      title: "Dharmic Education",
      description: "Deep dive into Hindu philosophy, values, and their application in modern leadership",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect with like-minded young Hindus across Canada and build lasting networks",
    },
    {
      icon: Lightbulb,
      title: "Leadership Skills",
      description: "Develop practical leadership abilities rooted in dharmic principles",
    },
    {
      icon: Network,
      title: "Mentorship",
      description: "Learn from established Hindu leaders and community builders",
    },
  ]

  const objectives = [
    {
      icon: Heart,
      title: "Unite",
      description: "Bring together young Hindus from across Canada to share experiences and build connections",
    },
    {
      icon: Star,
      title: "Inspire",
      description: "Motivate participants to become active leaders in their communities and professional lives",
    },
    {
      icon: BookOpen,
      title: "Educate",
      description: "Provide knowledge about Hindu values, Canadian civic engagement, and leadership principles",
    },
    {
      icon: Users,
      title: "Empower",
      description: "Equip attendees with tools and networks to make meaningful contributions to society",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">About DharmaCon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            DharmaCon is the first-ever Canadian National Council of Hindus Youth Conference, designed to unite,
            educate, and empower the next generation of Hindu leaders across Canada. This pioneering initiative brings
            together young Hindus aged 16-30 to explore their dharmic heritage while developing modern leadership
            skills.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create a generation of confident, dharma-rooted leaders who actively contribute to Canadian society
              while preserving and celebrating their Hindu heritage. We envision young Hindus who are proud of their
              identity, engaged in their communities, and equipped to lead positive change.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Conference Objectives</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {objectives.map((objective, index) => (
              <Card key={index} className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <objective.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{objective.title}</h4>
                  <p className="text-gray-600">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What You'll Experience</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why DharmaCon Matters</h3>
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">For Young Hindus:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Connect with peers who share your values and heritage</li>
                  <li>• Gain confidence in your Hindu identity</li>
                  <li>• Develop leadership skills rooted in dharmic principles</li>
                  <li>• Build a network of like-minded individuals across Canada</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">For the Community:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Strengthen the next generation of Hindu leaders</li>
                  <li>• Promote active civic engagement</li>
                  <li>• Preserve and celebrate Hindu culture in Canada</li>
                  <li>• Build bridges between communities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
