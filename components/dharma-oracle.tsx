"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Minimize2, Maximize2, X, Sparkles } from "lucide-react"

interface Message {
  id: string
  type: "user" | "oracle"
  content: string
  timestamp: Date
}

export function DharmaOracle() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "oracle",
      content: `🕉️ **Namaskar, Dear Soul**

I am Narada Muni, the customized chatbox for DharmaCon 2025 - see you at the conference!

Feel free to ask questions about anything - life, love, struggle, destiny, dharma, purpose, or any topic that interests you.

*Narayan Narayan!* 🙏`,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getOracleResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()

    if (lowerQuestion.includes("purpose") || lowerQuestion.includes("dharma")) {
      return `🕉️ **Verse (Sanskrit)**  
स्वधर्मे निधनं श्रेयः परधर्मो भयावहः  
*Svadharme nidhanam shreyah paradharmo bhayavahah*

✨ **Translation**  
"Better is one's own dharma, though imperfectly performed, than the dharma of another well performed. Better is death in one's own dharma; the dharma of another is fraught with danger."

📖 **Interpretation**  
Your true purpose lies not in imitating others, but in discovering and following your own unique path. Like a river that finds its way to the ocean, your soul knows its destined course. Trust in your inner calling, for it is the voice of the Divine guiding you home.

📚 *– Bhagavad Gita, Chapter 3, Verse 35*

*Narayan Narayan!* 🙏`
    }

    if (lowerQuestion.includes("love") || lowerQuestion.includes("relationship")) {
      return `🕉️ **Verse (Sanskrit)**  
सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि  
*Sarvabhutasthamatmanam sarvabhutani chatmani*

✨ **Translation**  
"One who sees the Self in all beings and all beings in the Self, such a person never feels separated from the Divine."

📖 **Interpretation**  
True love begins with seeing the divine spark in every soul. When you recognize that the same consciousness that dwells in you also resides in others, love becomes not just an emotion, but a sacred recognition. Love with this awareness, and your relationships become pathways to the Divine.

📚 *– Bhagavad Gita, Chapter 6, Verse 29*

*Narayan Narayan!* 🙏`
    }

    if (
      lowerQuestion.includes("struggle") ||
      lowerQuestion.includes("difficulty") ||
      lowerQuestion.includes("problem")
    ) {
      return `🕉️ **Verse (Sanskrit)**  
योगः कर्मसु कौशलम्  
*Yogah karmasu kaushalam*

✨ **Translation**  
"Yoga is skill in action."

📖 **Interpretation**  
Every struggle is a teacher in disguise, dear soul. Like a lotus that blooms most beautifully in muddy waters, your challenges are the very soil from which your wisdom grows. Approach each difficulty with the skill of a yogi - with presence, patience, and surrender to the Divine will.

📚 *– Bhagavad Gita, Chapter 2, Verse 50*

*Narayan Narayan!* 🙏`
    }

    if (lowerQuestion.includes("fear") || lowerQuestion.includes("anxiety") || lowerQuestion.includes("worry")) {
      return `🕉️ **Verse (Sanskrit)**  
अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः  
*Abhayam sattvasamshuddhir jnanayogavyavasthitih*

✨ **Translation**  
"Fearlessness, purity of mind, steadfastness in yoga and knowledge..."

📖 **Interpretation**  
Fear is but a shadow cast by the ego, dear one. When you remember that you are an eternal soul, temporarily wearing this body like a garment, what is there to fear? Root yourself in the knowledge that the Divine protects all who surrender with love. Let courage be your companion on this sacred journey.

📚 *– Bhagavad Gita, Chapter 16, Verse 1*

*Narayan Narayan!* 🙏`
    }

    if (lowerQuestion.includes("success") || lowerQuestion.includes("achievement") || lowerQuestion.includes("goal")) {
      return `🕉️ **Verse (Sanskrit)**  
कर्मण्येवाधिकारस्ते मा फलेषु कदाचन  
*Karmanyevadhikaraste ma phaleshu kadachana*

✨ **Translation**  
"You have the right to perform your actions, but never to the fruits of action."

📖 **Interpretation**  
True success, dear seeker, lies not in the outcome but in the purity of your effort. When you act with devotion and detachment, every action becomes worship. The Divine handles the results; your duty is to give your best with love and surrender.

📚 *– Bhagavad Gita, Chapter 2, Verse 47*

*Narayan Narayan!* 🙏`
    }

    if (lowerQuestion.includes("meditation") || lowerQuestion.includes("peace") || lowerQuestion.includes("calm")) {
      return `🕉️ **Verse (Sanskrit)**  
योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय  
*Yogasthah kuru karmani sangam tyaktva dhananjaya*

✨ **Translation**  
"Established in yoga, perform action, abandoning attachment, O Arjuna."

📖 **Interpretation**  
Peace is not the absence of activity, but the presence of divine consciousness in all that you do. Like the eye of a storm that remains still while winds swirl around it, find that center of stillness within yourself. From this sacred space, all actions flow with grace.

📚 *– Bhagavad Gita, Chapter 2, Verse 48*

*Narayan Narayan!* 🙏`
    }

    if (
      lowerQuestion.includes("conference") ||
      lowerQuestion.includes("dharmacon") ||
      lowerQuestion.includes("event")
    ) {
      return `🕉️ **DharmaCon 2025 Information**

✨ **Event Details**  
DharmaCon 2025 is Canada's first Hindu Youth Leadership Conference, taking place on September 27, 2025 in Toronto, Ontario at the Sringeri Temple in Etobicoke.

📖 **What to Expect**  
A full day of learning, networking, and community building designed to empower the next generation of Hindu leaders in Canada. The conference includes sessions on campus life experiences, professional development, advocacy, and networking opportunities.

📚 *Join us for this transformative experience!*

*Narayan Narayan!* 🙏`
    }

    // Default response
    return `🕉️ **Divine Wisdom**

The scriptures teach us that every question arises from the soul's longing to return to its source. Your inquiry itself is a prayer, a sacred seeking that the Divine honors.

✨ **Guidance**  
"As you think, so you become. As you believe, so you experience. As you surrender, so you are blessed."

📖 **Interpretation**  
Whatever weighs upon your heart, remember that you are never alone. The same Divine consciousness that moves the stars and grows the flowers also beats within your heart. Trust in this eternal presence, and let it guide your steps on this sacred journey of life.

📚 *– Inspired by the eternal wisdom of Sanatana Dharma*

*Narayan Narayan!* 🙏`
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const oracleResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "oracle",
        content: getOracleResponse(inputValue),
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, oracleResponse])
      setIsTyping(false)
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-transparent hover:bg-orange-100/50 p-0 rounded-full w-20 h-20 shadow-xl"
        >
          <div className="text-center">
            <img
              src="/narada-muni-icon.jpg"
              alt="Narada Muni"
              className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-orange-200 shadow-lg"
            />
          </div>
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`w-96 shadow-2xl border-0 bg-gradient-to-br from-orange-50/80 to-red-50/80 transition-all duration-300 ${
          isMinimized ? "h-16" : "h-[600px]"
        }`}
      >
        <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/narada-muni-icon.jpg"
                alt="Narada Muni"
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
              />
              <div>
                <CardTitle className="text-lg">Narada Muni</CardTitle>
                <p className="text-xs text-orange-100">DharmaCon 2025 Guide • नारद मुनि</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[536px]">
            <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === "user"
                          ? "bg-orange-500 text-white"
                          : "bg-white border border-orange-200 text-gray-800"
                      }`}
                    >
                      {message.type === "oracle" ? (
                        <div className="prose prose-sm max-w-none">
                          <div
                            className="whitespace-pre-wrap text-sm"
                            dangerouslySetInnerHTML={{
                              __html: message.content
                                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                                .replace(/\*(.*?)\*/g, "<em>$1</em>")
                                .replace(/🕉️/g, '<span class="text-orange-600">🕉️</span>')
                                .replace(/✨/g, '<span class="text-yellow-500">✨</span>')
                                .replace(/📖/g, '<span class="text-blue-600">📖</span>')
                                .replace(/📚/g, '<span class="text-green-600">📚</span>')
                                .replace(/🙏/g, '<span class="text-orange-500">🙏</span>'),
                            }}
                          />
                        </div>
                      ) : (
                        <p className="text-sm">{message.content}</p>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-orange-200 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="h-4 w-4 text-orange-500 animate-spin" />
                        <span className="text-sm text-gray-600">Narada Muni is channeling wisdom...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-orange-200 bg-white">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Narada Muni anything!"
                  className="flex-1 border-orange-200 focus:border-orange-500"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                *"Reflect on this, and return when your heart seeks again."*
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
