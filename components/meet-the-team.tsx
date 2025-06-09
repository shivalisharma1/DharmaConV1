import { Card, CardContent } from "@/components/ui/card"
import { Users, Star, Award, Network, Megaphone, Shield, Settings } from "lucide-react"

export function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Vijay S.",
      role: "CNCH Advisor & Manager",
      responsibilities: ["Logistics", "Funding", "Networking"],
      icon: Network,
      image: "/team-placeholder.jpg",
      color: "from-red-500 to-pink-500",
      bio: "Serial entrepreneur and CEO of Ela Capital with global investments in health & wellness. Founder of Sappani Foundation focused on rare genetic diseases. Active on multiple community boards and enjoys polo in his free time.",
    },
    {
      name: "Bhanu Priya Sharma",
      role: "Senior Conference Coordinator",
      responsibilities: ["Project Manager", "Administrative"],
      icon: Star,
      image: "/bhanupriya-sharma.jpg",
      color: "from-purple-500 to-pink-500",
      bio: "Honours BA in Health and Urban Studies from University of Toronto, completing Project Management certification. Interdisciplinary learner passionate about health, equity and leadership. Started a custom cake business during COVID-19 and recently traveled across Europe.",
    },
    {
      name: "Khushi Jetley",
      role: "Outreach and Conference Coordinator",
      responsibilities: [
        "Outreach to External Stakeholders",
        "Social Media, Design, Marketing",
        "Conference Coordination between HSC, CYAN, and CNCH",
      ],
      icon: Megaphone,
      image: "/khushi-jetley.jpg",
      color: "from-orange-500 to-red-500",
      bio: "BFA Integrated Media graduate from OCAD University and Co-Founder of Dharma in the 6iX. Led crowdfunding campaigns raising $10K+ for Hindu prayer space at OCAD. Expert in digital marketing, UX design, and cultural event coordination with 15+ successful initiatives.",
    },
    {
      name: "Shekhar Sharma",
      role: "HSC Advisor",
      responsibilities: ["Review Conference flows and ensure positive relations"],
      icon: Shield,
      image: "/shekhar-sharma.jpg",
      color: "from-blue-500 to-indigo-500",
      bio: "JD Graduate 2024 from University of Windsor Faculty of Law and Canada HSC Head. Shekhar loves playing with his dog Appu and is passionate about guiding and mentoring Hindu leaders for the future and present.",
    },
    {
      name: "Shivali Sharma",
      role: "Conference Recruitment & Ontario Chapter Coordinator",
      responsibilities: ["Ontario Chapter liaison", "Attendee recruitment via chapters & mandirs"],
      icon: Users,
      image: "/shivali-sharma.jpg",
      color: "from-green-500 to-emerald-500",
      bio: "Fourth-year Computer Science student at Western University with a passion for aerospace. HSC President for Western and established a mandir on campus. Enjoys software developments in aerospace and following space exploration.",
    },
    {
      name: "Vishwa Patel",
      role: "Operations Coordinator",
      responsibilities: [
        "Managing conference operations",
        "Following up with internal and external stakeholders",
        "Supply coordination",
        "Design & Marketing",
      ],
      icon: Settings,
      image: "/khushi-art-dancer.jpg",
      color: "from-yellow-500 to-orange-500",
      bio: "Recent OCAD University graduate, artist, curator, and community organizer with six years of experience in event planning and mentorship. Featured in Khushi's classical dance artwork celebrating traditional Indian dance. Experience with Friends of South Asia, student groups, and Royal Canadian Army Cadets. Thrives in public-facing roles and values inclusivity.",
    },
    {
      name: "Devnash Jetley",
      role: "Volunteer Coordinator",
      responsibilities: [
        "Managing Day-Of volunteers",
        "High School Volunteer Recruitment",
        "Delegation of Volunteer Tasks",
      ],
      icon: Users,
      image: "/devnash-jetley.jpg",
      color: "from-teal-500 to-cyan-500",
      bio: "High school HSC Leader currently graduating and planning to pursue law at Toronto Metropolitan University. Passionate about cricket and plays for his local league. Brings youthful energy and leadership to volunteer coordination.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6">
            <Users className="mr-2 h-4 w-4" />
            Our Leadership Team
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The dedicated individuals working tirelessly to bring you Canada's first Hindu youth leadership conference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className={`bg-gradient-to-br ${member.color} p-6 text-white text-center relative`}>
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm opacity-90 font-medium">{member.role}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-20">
                  <member.icon className="h-12 w-12" />
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-orange-600" />
                  About
                </h4>
                {member.bio && (
                  <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-orange-800 text-sm font-medium">{member.bio}</p>
                  </div>
                )}
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Users className="h-4 w-4 mr-2 text-orange-600" />
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {member.responsibilities.map((responsibility, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Our diverse team brings together expertise from student organizations, community leadership, and
              professional backgrounds to create an unforgettable conference experience. We're united by our commitment
              to empowering young Hindu leaders across Canada.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
                <p className="text-gray-600 font-medium">Dedicated Team Members</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <p className="text-gray-600 font-medium">Partner Organizations</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <p className="text-gray-600 font-medium">Expected Attendees</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full shadow-lg">
            <Users className="h-5 w-5 mr-2" />
            <span className="font-medium">Powered by passionate volunteers and CNCH leadership</span>
          </div>
        </div>
      </div>
    </section>
  )
}
