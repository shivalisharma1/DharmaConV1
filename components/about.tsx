import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Lightbulb, Network, Handshake, UserCheck } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Network,
      title: "Professional Networking",
      description: "Connect with Hindu professionals, entrepreneurs, and leaders across diverse industries",
    },
    {
      icon: UserCheck,
      title: "Mentorship Matching",
      description: "Get paired with experienced mentors who share your values and career aspirations",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Build lasting relationships with like-minded young Hindus across Canada",
    },
    {
      icon: Lightbulb,
      title: "Leadership Development",
      description: "Develop practical leadership abilities rooted in dharmic principles and modern practices",
    },
  ]

  const objectives = [
    {
      icon: Handshake,
      title: "Network",
      description: "Create Canada's largest professional network of young Hindu leaders and mentors",
    },
    {
      icon: UserCheck,
      title: "Mentor",
      description: "Launch comprehensive mentorship programs connecting youth with established professionals",
    },
    {
      icon: BookOpen,
      title: "Learn",
      description: "Gain knowledge about career advancement, entrepreneurship, and leadership excellence",
    },
    {
      icon: Users,
      title: "Connect",
      description: "Build meaningful relationships that will support your professional and personal growth",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">About DharmaCon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            DharmaCon is Canada's{" "}
            <span className="font-bold text-orange-600">first-ever Hindu networking and mentorship conference</span>,
            designed to unite, educate, and empower the next generation of Hindu leaders across Canada. This pioneering
            initiative brings together young Hindus aged 16-30 to build professional networks while exploring their
            dharmic heritage.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Historic First</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              This is the{" "}
              <span className="font-bold text-orange-600">
                first networking conference specifically for Hindu youth in Canada
              </span>
              . We're creating unprecedented opportunities for mentorship, professional connections, and community
              building that have never existed before in our community.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Conference Focus Areas</h3>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why This Matters Now</h3>
            <div className="grid gap-8 md:grid-cols-2 text-left max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Network className="h-5 w-5 text-orange-600 mr-2" />
                  Breaking New Ground
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• First professional networking event for Hindu youth in Canada</li>
                  <li>• Unprecedented access to established Hindu professionals</li>
                  <li>• Creating pathways that didn't exist before</li>
                  <li>• Building Canada's first Hindu professional network</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <UserCheck className="h-5 w-5 text-orange-600 mr-2" />
                  Mentorship Revolution
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Launch of structured mentorship programs</li>
                  <li>• Connect with mentors who share your values</li>
                  <li>• Career guidance rooted in dharmic principles</li>
                  <li>• Long-term professional relationships</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-orange-600 text-white rounded-lg">
              <h4 className="text-xl font-bold mb-3">Historic Opportunity</h4>
              <p className="text-lg">
                Be part of history. Join Canada's first Hindu networking and mentorship conference. The connections you
                make here will shape your career and our community's future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
