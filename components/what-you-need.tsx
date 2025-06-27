import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, Notebook, Target, Briefcase, UserCheck } from "lucide-react"

export function WhatYouNeed() {
  const essentials = [
    {
      icon: FileText,
      title: "Bring Your Resume",
      description: "Come prepared with printed copies of your resume for networking and mentorship matching",
      highlight: true,
    },
    {
      icon: Target,
      title: "Career Goals",
      description: "Have a clear idea of your career aspirations and what you want to achieve",
      highlight: false,
    },
    {
      icon: Users,
      title: "Open Mindset",
      description: "Be ready to meet new people and build meaningful professional relationships",
      highlight: false,
    },
    {
      icon: Notebook,
      title: "Note-Taking Materials",
      description: "Bring a notebook or device to capture insights and contact information",
      highlight: false,
    },
    {
      icon: Briefcase,
      title: "Professional Attire",
      description: "Dress professionally as you'll be meeting industry leaders and potential mentors",
      highlight: false,
    },
    {
      icon: UserCheck,
      title: "Questions Ready",
      description: "Prepare thoughtful questions about career paths, industry insights, and professional growth",
      highlight: false,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What You Need to Bring</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Come prepared to make the most of Canada's first Hindu networking and mentorship conference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essentials.map((item, index) => (
            <Card
              key={index}
              className={`border-0 shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300 ${
                item.highlight ? "ring-4 ring-orange-200" : ""
              }`}
            >
              <CardContent className="p-0">
                <div
                  className={`${
                    item.highlight
                      ? "bg-gradient-to-br from-orange-500 to-red-500"
                      : "bg-gradient-to-br from-blue-500 to-purple-500"
                  } p-8 text-white text-center`}
                >
                  <item.icon className="h-12 w-12 mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">{item.title}</div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-600">{item.description}</p>
                  {item.highlight && (
                    <div className="mt-4 px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      Essential for Networking
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📄 Resume Tips for Success</h3>
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What to Include:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Contact information and LinkedIn profile</li>
                  <li>• Education, internships, and work experience</li>
                  <li>• Leadership roles and community involvement</li>
                  <li>• Technical skills and certifications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pro Tips:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Bring 10-15 printed copies</li>
                  <li>• Keep it to 1-2 pages maximum</li>
                  <li>• Tailor it for the industries you're interested in</li>
                  <li>• Have a digital copy ready to share</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
