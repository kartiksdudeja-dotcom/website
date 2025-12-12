import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StripBanner from '../components/StripBanner'
import Overview from '../components/Overview'
import Highlights from '../components/Highlights'
import PriceCards from '../components/PriceCards'
import Amenities from '../components/Amenities'
import FloorPlans from '../components/FloorPlans'
import Gallery from '../components/Gallery'
import Location from '../components/Location'
import DecisionCorner from '../components/DecisionCorner'
import AboutBuilder from '../components/AboutBuilder'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <StripBanner />
      <Overview />
      <Highlights />
      <PriceCards />
      <Amenities />
      <FloorPlans />
      <Gallery />
      <Location />
      <DecisionCorner />
      <AboutBuilder />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
