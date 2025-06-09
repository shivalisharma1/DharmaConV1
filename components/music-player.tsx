"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX, Music, ExternalLink } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime)
      const updateDuration = () => setDuration(audio.duration)

      audio.addEventListener("timeupdate", updateTime)
      audio.addEventListener("loadedmetadata", updateDuration)
      audio.addEventListener("ended", () => setIsPlaying(false))

      return () => {
        audio.removeEventListener("timeupdate", updateTime)
        audio.removeEventListener("loadedmetadata", updateDuration)
        audio.removeEventListener("ended", () => setIsPlaying(false))
      }
    }
  }, [])

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
              <Music className="mr-2 h-4 w-4" />
              Conference Inspiration
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Current Favorite</h3>
            <p className="text-gray-600">Music that inspires our journey</p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600">
            <CardContent className="p-0">
              <div className="bg-white/10 backdrop-blur-sm p-6 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <Music className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold">Sapphire</h4>
                    <p className="text-blue-100">Ed Sheeran</p>
                  </div>
                </div>

                {/* Audio element - Note: This would need an actual audio file */}
                <audio ref={audioRef} src="/placeholder-audio.mp3" preload="metadata" />

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-blue-100 mb-2">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-300"
                      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={togglePlay}
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 text-white border-0 rounded-full w-12 h-12 p-0"
                    >
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                    </Button>
                    <Button
                      onClick={toggleMute}
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-0"
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                  </div>

                  <div className="flex space-x-2">
                    <Button asChild size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                      <a
                        href="https://open.spotify.com/search/sapphire%20ed%20sheeran"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Spotify
                      </a>
                    </Button>
                    <Button asChild size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                      <a
                        href="https://music.youtube.com/search?q=sapphire+ed+sheeran"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        YouTube Music
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              🎵 This song inspires our team as we work to bring DharmaCon to life
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
