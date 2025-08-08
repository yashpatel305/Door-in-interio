import AboutSection from "./components/AboutSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ServiceSection from "./components/ServiceSection"

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ServiceSection/>
    <AboutSection/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App