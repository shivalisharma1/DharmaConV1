import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  Users,
  Coffee,
  Award,
  BookOpen,
  SpaceIcon as Yoga,
  MessageSquare,
  Utensils,
  Network,
  Play,
  HeartHandshake,
} from "lucide-react"

export function EventBreakdown() {
  const schedule = [
    {
      time: "9:00 AM - 9:05 AM",
      title: "Opening Prayers",
      description: "Led by Students and Pt. Yogesh Sharma",
      icon: BookOpen,
      duration: "5 mins",
    },
    {
      time: "9:10 AM - 9:30 AM",
      title: "Introductory Opening Remarks",
      description: "Welcome address by students and CNCH representatives",
      icon: Users,
      duration: "20 mins",
    },
    {
      time: "9:30 AM - 9:45 AM",
      title: "Yoga and Breathing Exercise",
      description: "Led by Chinmaya Mission",
      icon: Yoga,
      duration: "15 mins",
    },
    {
      time: "9:45 AM - 10:45 AM",
      title: "SESSION 1: Campus Life Experience",
      description: "Discussing student experiences - the good, bad, ugly, and how to bring change",
      icon: MessageSquare,
      duration: "60 mins",
    },
    {
      time: "10:45 AM - 11:00 AM",
      title: "Snacks/Coffee Break",
      description: "Refreshments and networking opportunity",
      icon: Coffee,
      duration: "15 mins",
    },
    {
      time: "11:00 AM - 11:45 AM",
      title: "SESSION 2: Ramayan - Katha",
      description: "Hinduism play, discussions and cultural exploration",
      icon: Play,
      duration: "45 mins",
    },
    {
      time: "11:45 AM - 12:30 PM",
      title: "PANEL: Professional Development",
      description: "Career paths, startups, networking for jobs, and launch of mentoring program",
      icon: Network,
      duration: "45 mins",
    },
    {
      time: "12:30 PM - 1:30 PM",
      title: "LUNCH with Mentoring Tables",
      description: "Enjoy lunch while connecting with mentors in your field of interest",
      icon: Utensils,
      duration: "60 mins",
    },
    {
      time: "1:30 PM - 1:45 PM",
      title: "Post-Lunch Stretching + Yoga",
      description: "Energizing activities to refresh after lunch",
      icon: Yoga,
      duration: "15 mins",
    },
    {
      time: "1:45 PM - 2:45 PM",
      title: "SESSION 3: Advocacy",
      description: "Campus advocacy, post-graduation opportunities, politics, policy, and fellowships",
      icon: Award,
      duration: "60 mins",
    },
    {
      time: "2:45 PM - 3:00 PM",
      title: "Bio Break",
      description: "Short refreshment break",
      icon: Coffee,
      duration: "15 mins",
    },
    {
      time: "3:00 PM - 4:00 PM",
      title: "SESSION 4: Professional Networking",
      description: "Mentoring sign-up and professional connections",
      icon: HeartHandshake,
      duration: "60 mins",
    },
    {
      time: "4:00 PM - 5:30 PM",
      title: "After Party & Games",
      description: "Stretching, games, continued networking, and social activities",
      icon: Users,
      duration: "90 mins",
    },
    {
      time: "5:30 PM",
      title: "Closing Ceremony",
      description: "Final remarks and conclusion of DharmaCon 2025",
      icon: Clock,
      duration: "",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Event Schedule</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A full day of learning, networking, and community building designed to empower the next generation of Hindu
            leaders in Canada.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <Card key={index} className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <item.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <div className="flex flex-col sm:items-end">
                          <span className="text-orange-600 font-medium text-sm sm:text-base">{item.time}</span>
                          {item.duration && <span className="text-gray-500 text-xs">{item.duration}</span>}
                        </div>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-800 rounded-lg">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium">Please arrive by 8:45 AM for registration and check-in</span>
          </div>
        </div>
      </div>
    </section>
  )
}
