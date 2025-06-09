import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ConferenceStats } from "@/components/conference-stats"
import { About } from "@/components/about"
import { MeetTheTeam } from "@/components/meet-the-team"
import { Registration } from "@/components/registration"
import { Footer } from "@/components/footer"
import { WhoWeAre } from "@/components/who-we-are"
import { Speakers } from "@/components/speakers"
import { Venue } from "@/components/venue"
import { EventBreakdown } from "@/components/event-breakdown"
import { DeityQuiz } from "@/components/deity-quiz"
import { RecommendedReading } from "@/components/recommended-reading"
import { MusicPlayer } from "@/components/music-player"
import { DharmaOracle } from "@/components/dharma-oracle"
import { ArtGallery } from "@/components/art-gallery"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="music">
        <MusicPlayer />
      </section>
      <section id="stats">
        <ConferenceStats />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="team">
        <MeetTheTeam />
      </section>
      <section id="art">
        <ArtGallery />
      </section>
      <section id="who-we-are">
        <WhoWeAre />
      </section>
      <section id="quiz">
        <DeityQuiz />
      </section>
      <section id="speakers">
        <Speakers />
      </section>
      <section id="schedule">
        <EventBreakdown />
      </section>
      <section id="venue">
        <Venue />
      </section>
      <section id="reading">
        <RecommendedReading />
      </section>
      <section id="register">
        <Registration />
      </section>
      <Footer />
      <DharmaOracle />
    </main>
  )
}
