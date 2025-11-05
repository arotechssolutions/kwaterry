// Components
import Hero from "@/components/landingPage/hero/hero"
import SocialProof from "@/components/landingPage/socialProof/socialProof"
import Accommodation from "@/components/landingPage/accommodation/accommodation"
import Menu from "@/components/landingPage/menu/menu"
import Activities from "@/components/landingPage/activities/activities"
import Footer from "@/components/landingPage/footer/footer"
import About from "@/components/landingPage/about/about"
import SP from "@/components/landingPage/transformedSP/transformedSP"

const Index = () => {
  return (
    <main>
      <Hero />
      <About />
      <Accommodation />
      <SP />
      <Menu />
      <Activities />
      <Footer />
    </main>
  )
}

export default Index