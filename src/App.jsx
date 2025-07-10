import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import ServicesSection from "./components/sections/ServicesSection"
import SkillsSection from "./components/sections/SkillsSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import ContactSection from "./components/sections/ContactSection"
import "./styles/globals.css"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
