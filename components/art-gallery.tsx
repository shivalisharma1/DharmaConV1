import { Card, CardContent } from "@/components/ui/card"
import { Palette, Heart, Star } from "lucide-react"

export function ArtGallery() {
  const artworks = [
    {
      title: "India te Bharat",
      description:
        "A vibrant celebration of Indian heritage, culture, and progress featuring traditional and modern elements of Bharat.",
      image: "/khushi-art-india-bharat.jpg",
      artist: "Khushi Jetley",
      medium: "Mixed Media",
      theme: "Cultural Heritage",
    },
    {
      title: "Ram Ram",
      description:
        "A beautiful watercolor depicting a squirrel with the sacred chant 'Ram Ram', symbolizing devotion in nature.",
      image: "/khushi-art-squirrel.jpg",
      artist: "Khushi Jetley",
      medium: "Watercolor",
      theme: "Devotional Art",
    },
    {
      title: "Hanuman Devotion",
      description:
        "A powerful watercolor portrayal of Lord Hanuman in meditation, surrounded by the divine name 'Ram'.",
      image: "/khushi-art-hanuman.jpg",
      artist: "Khushi Jetley",
      medium: "Watercolor",
      theme: "Spiritual Art",
    },
    {
      title: "Classical Dance",
      description:
        "A graceful representation of traditional Indian dance, capturing the beauty and elegance of our cultural expressions.",
      image: "/khushi-art-dancer.jpg",
      artist: "Vishwa Patel",
      medium: "Traditional Art",
      theme: "Cultural Dance",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6">
            <Palette className="mr-2 h-4 w-4" />
            Featured Artwork
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leaders' Art</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beautiful artwork created by our talented leadership team, celebrating Hindu culture, spirituality, and
            heritage through vibrant artistic expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.map((artwork, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{artwork.title}</h3>
                  <div className="flex items-center text-sm text-orange-600 mb-2">
                    <Star className="h-4 w-4 mr-1" />
                    <span className="font-medium">{artwork.artist}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{artwork.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Medium:</span>
                    <span className="font-medium text-gray-700">{artwork.medium}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Theme:</span>
                    <span className="font-medium text-gray-700">{artwork.theme}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-orange-100">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">About Our Artists</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Our talented team member Khushi Jetley, Outreach and Conference Coordinator, is also a gifted artist who
              brings the beauty of Hindu culture and spirituality to life through her artwork. Her pieces reflect deep
              devotion, cultural pride, and artistic excellence. The classical dance artwork beautifully represents our
              team member Vishwa Patel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">4+</div>
                <p className="text-gray-600 font-medium">Featured Artworks</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <p className="text-gray-600 font-medium">Art Mediums</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <p className="text-gray-600 font-medium">Cultural Inspiration</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-full shadow-lg">
            <Palette className="h-5 w-5 mr-2" />
            <span className="font-medium">Art that celebrates our dharmic heritage</span>
          </div>
        </div>
      </div>
    </section>
  )
}
