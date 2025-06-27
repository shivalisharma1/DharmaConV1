import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhatYouNeed } from "@/components/what-you-need"
import { OurMentors } from "@/components/our-mentors"
import { Registration } from "@/components/registration"
import { Footer } from "@/components/footer"
import { WhoWeAre } from "@/components/who-we-are"
import { Speakers } from "@/components/speakers"
import { Venue } from "@/components/venue"
import { EventBreakdown } from "@/components/event-breakdown"
import { DeityQuiz } from "@/components/deity-quiz"
import { RecommendedReading } from "@/components/recommended-reading"
import { DharmaOracle } from "@/components/dharma-oracle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="what-you-need">
        <WhatYouNeed />
      </section>
      <section id="mentors">
        <OurMentors />
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
