"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sparkles, RotateCcw } from "lucide-react"

interface Question {
  id: number
  question: string
  options: {
    text: string
    deity: string
  }[]
}

interface DeityResult {
  name: string
  description: string
  qualities: string[]
  color: string
  emoji: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your ideal way to spend a weekend?",
    options: [
      { text: "Playing music or dancing with friends", deity: "krishna" },
      { text: "Reading spiritual texts and meditating", deity: "shiva" },
      { text: "Helping others and volunteering", deity: "rama" },
      { text: "Learning new skills and solving problems", deity: "ganesha" },
      { text: "Leading a community project", deity: "durga" },
      { text: "Exploring nature and seeking adventure", deity: "hanuman" },
    ],
  },
  {
    id: 2,
    question: "Which quality do you value most?",
    options: [
      { text: "Wisdom and knowledge", deity: "ganesha" },
      { text: "Courage and strength", deity: "durga" },
      { text: "Compassion and love", deity: "krishna" },
      { text: "Duty and righteousness", deity: "rama" },
      { text: "Devotion and loyalty", deity: "hanuman" },
      { text: "Inner peace and detachment", deity: "shiva" },
    ],
  },
  {
    id: 3,
    question: "How do you handle challenges?",
    options: [
      { text: "With creative solutions and playfulness", deity: "krishna" },
      { text: "Through meditation and inner strength", deity: "shiva" },
      { text: "By following dharma and doing what's right", deity: "rama" },
      { text: "With careful planning and wisdom", deity: "ganesha" },
      { text: "By taking charge and fighting for justice", deity: "durga" },
      { text: "With unwavering dedication and service", deity: "hanuman" },
    ],
  },
  {
    id: 4,
    question: "What motivates you most?",
    options: [
      { text: "Spreading joy and love", deity: "krishna" },
      { text: "Seeking truth and enlightenment", deity: "shiva" },
      { text: "Protecting and serving others", deity: "rama" },
      { text: "Removing obstacles for people", deity: "ganesha" },
      { text: "Fighting injustice and empowering others", deity: "durga" },
      { text: "Serving a higher purpose", deity: "hanuman" },
    ],
  },
  {
    id: 5,
    question: "Your friends would describe you as:",
    options: [
      { text: "Charming and fun-loving", deity: "krishna" },
      { text: "Deep and contemplative", deity: "shiva" },
      { text: "Noble and trustworthy", deity: "rama" },
      { text: "Smart and helpful", deity: "ganesha" },
      { text: "Strong and protective", deity: "durga" },
      { text: "Loyal and dependable", deity: "hanuman" },
    ],
  },
]

const deityResults: Record<string, DeityResult> = {
  krishna: {
    name: "Lord Krishna",
    description:
      "You embody divine love, joy, and wisdom! Like Krishna, you bring happiness to others through your playful nature and deep spiritual insights. You're a natural leader who guides through love rather than force.",
    qualities: ["Compassionate", "Playful", "Wise", "Charismatic", "Loving"],
    color: "from-blue-500 to-purple-600",
    emoji: "🦚",
  },
  shiva: {
    name: "Lord Shiva",
    description:
      "You are the embodiment of inner peace and transformation! Like Shiva, you seek deeper truths and aren't afraid of change. Your calm exterior hides immense strength and wisdom.",
    qualities: ["Peaceful", "Transformative", "Wise", "Meditative", "Powerful"],
    color: "from-indigo-500 to-blue-600",
    emoji: "🔱",
  },
  rama: {
    name: "Lord Rama",
    description:
      "You are the ideal of righteousness and duty! Like Rama, you always strive to do what's right, even when it's difficult. Your integrity and moral compass inspire others.",
    qualities: ["Righteous", "Dutiful", "Noble", "Just", "Inspiring"],
    color: "from-green-500 to-emerald-600",
    emoji: "🏹",
  },
  ganesha: {
    name: "Lord Ganesha",
    description:
      "You are the remover of obstacles and bringer of wisdom! Like Ganesha, you help others overcome challenges with your intelligence and positive energy. New beginnings flourish around you.",
    qualities: ["Wise", "Problem-solver", "Optimistic", "Helpful", "Intelligent"],
    color: "from-orange-500 to-red-500",
    emoji: "🐘",
  },
  durga: {
    name: "Goddess Durga",
    description:
      "You are a fierce protector and champion of justice! Like Durga, you stand up for what's right and aren't afraid to fight for those who can't fight for themselves. Your strength empowers others.",
    qualities: ["Courageous", "Protective", "Strong", "Just", "Empowering"],
    color: "from-red-500 to-pink-600",
    emoji: "⚔️",
  },
  hanuman: {
    name: "Lord Hanuman",
    description:
      "You embody devotion, strength, and selfless service! Like Hanuman, your loyalty knows no bounds and you're always ready to help others. Your dedication inspires everyone around you.",
    qualities: ["Devoted", "Strong", "Loyal", "Selfless", "Inspiring"],
    color: "from-yellow-500 to-orange-500",
    emoji: "🐒",
  },
}

export function DeityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<DeityResult | null>(null)

  const handleAnswer = (deity: string) => {
    const newAnswers = [...answers, deity]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate result
      const deityCount: Record<string, number> = {}
      newAnswers.forEach((answer) => {
        deityCount[answer] = (deityCount[answer] || 0) + 1
      })

      const topDeity = Object.entries(deityCount).reduce((a, b) => (deityCount[a[0]] > deityCount[b[0]] ? a : b))[0]

      setResult(deityResults[topDeity])
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setResult(null)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResult && result) {
    return (
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${result.color} text-white p-8`}>
                <div className="text-6xl mb-4">{result.emoji}</div>
                <CardTitle className="text-3xl font-bold mb-2">You are like {result.name}!</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{result.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Divine Qualities:</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {result.qualities.map((quality, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-full text-white bg-gradient-to-r ${result.color} text-sm font-medium`}
                      >
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 mb-6">
                  <p className="text-orange-800 text-sm">
                    <strong>Remember:</strong> Every deity represents different aspects of the divine within us all.
                    Embrace these qualities as you grow in your dharmic journey at DharmaCon!
                  </p>
                </div>

                <Button onClick={resetQuiz} className="bg-orange-600 hover:bg-orange-700" size="lg">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Take Quiz Again
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6">
              <Sparkles className="mr-2 h-4 w-4" />
              Fun Dharmic Discovery
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Which Bhagwan Are You Like?</h2>
            <p className="text-lg text-gray-600">
              Discover which Hindu deity's qualities resonate most with your personality and dharmic path!
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
              <div className="flex justify-between items-center mb-4">
                <CardTitle className="text-xl">
                  Question {currentQuestion + 1} of {questions.length}
                </CardTitle>
                <span className="text-sm opacity-90">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="bg-white/20" />
            </CardHeader>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option.deity)}
                    variant="outline"
                    className="w-full p-4 h-auto text-left justify-start hover:bg-orange-50 hover:border-orange-300 transition-all duration-200"
                  >
                    <span className="text-base">{option.text}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
