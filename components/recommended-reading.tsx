import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, ExternalLink } from "lucide-react"

export function RecommendedReading() {
  const books = [
    {
      title: "Think Like a Monk",
      author: "Jay Shetty",
      description:
        "Jay Shetty draws on his time as a monk to show us how we can clear roadblocks to our potential and power. He transforms abstract lessons into advice and exercises we can all apply to reduce stress, improve relationships, and give the gifts we find in ourselves to the world.",
      coverImage: "/think-like-a-monk-cover.jpg",
      tags: ["Mindfulness", "Wisdom", "Purpose"],
      resources: [
        {
          label: "Free Book Summary",
          icon: Download,
          link: "#",
          type: "primary",
        },
        {
          label: "Author's Website",
          icon: ExternalLink,
          link: "https://jayshetty.me/",
          type: "outline",
        },
      ],
    },
    {
      title: "The Bhagavad Gita",
      author: "Translated by Eknath Easwaran",
      description:
        "The Bhagavad Gita is an ancient Indian text that became an important work of Hindu tradition in terms of both literature and philosophy. The Gita is the sixth book of the Mahabharata, one of India's most famous epic poems.",
      coverImage: "/bhagavad-gita-cover.jpg",
      tags: ["Scripture", "Philosophy", "Dharma"],
      resources: [
        {
          label: "Free Online Version",
          icon: ExternalLink,
          link: "https://www.holy-bhagavad-gita.org/",
          type: "primary",
        },
      ],
    },
    {
      title: "Autobiography of a Yogi",
      author: "Paramahansa Yogananda",
      description:
        "Autobiography of a Yogi introduces the reader to the life of Paramahansa Yogananda and his encounters with spiritual figures of both the Eastern and Western traditions.",
      coverImage: "/autobiography-yogi-cover.jpg",
      tags: ["Spirituality", "Yoga", "Meditation"],
      resources: [
        {
          label: "Learn More",
          icon: ExternalLink,
          link: "https://www.yogananda.org/autobiography-of-a-yogi",
          type: "outline",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6">
            <BookOpen className="mr-2 h-4 w-4" />
            Expand Your Knowledge
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recommended Reading</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore these transformative books to deepen your understanding of dharmic principles and leadership before
            the conference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="aspect-[2/3] relative overflow-hidden bg-orange-100">
                <img
                  src={book.coverImage || "/placeholder.svg"}
                  alt={`${book.title} cover`}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{book.title}</CardTitle>
                <CardDescription>by {book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3">
                {book.resources.map((resource, i) => (
                  <Button
                    key={i}
                    variant={resource.type === "primary" ? "default" : "outline"}
                    className={
                      resource.type === "primary"
                        ? "bg-orange-600 hover:bg-orange-700 w-full sm:w-auto"
                        : "border-orange-600 text-orange-600 hover:bg-orange-50 w-full sm:w-auto"
                    }
                    asChild
                  >
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      <resource.icon className="mr-2 h-4 w-4" />
                      {resource.label}
                    </a>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Conference Resource</h3>
            <p className="text-gray-600 mb-6">
              We're excited to offer conference attendees a special resource package including book summaries,
              reflection guides, and exclusive content from dharmic thought leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Download className="mr-2 h-4 w-4" />
                Get Free Preview
              </Button>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Register to Access Full Package
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
