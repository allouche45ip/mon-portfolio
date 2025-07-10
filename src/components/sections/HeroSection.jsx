"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Phone, Download,HelpCircle  } from "lucide-react"

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const roles = ["Frontend Developer", "Backend Developer", "Web Developer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsVisible(true)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl text-gray-300 mb-2">Hello, It's Me</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 whitespace-nowrap">
                Allouche Mohamed
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-6">
                And I'm a{" "}
                <span
                  className={`
                  bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold
                  transition-all duration-300 inline-block
                  ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"}
                `}
                >
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              I'm a web developer with extensive experience for over 2 years, expertise is to create web design,
              frontend design, and many more...
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/allouche45ip"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
            <a
  href="https://linkedin.com/in/mohamed-allouche-a4ba572b3"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"
>
  <Linkedin className="w-6 h-6 text-white" />
</a>

              <a
  href="mailto:mouhamedallouche900@gmail.com"
  className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"
>
  <Mail className="w-6 h-6 text-white" />
</a>

<a
  href="tel:+213698009982"
  className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"
>
  <Phone className="w-6 h-6 text-white" />
</a>

            </div>

          <button
  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto lg:mx-0"
  onClick={() => {
    // par exemple ouvrir un chat, ou scroller vers la section aide :
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <HelpCircle className="w-5 h-5" />
  <span>Get Help</span>
</button>
          </div>

          {/* Enhanced Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Animated Background Rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin-slow opacity-75"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-spin-reverse opacity-50"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></div>
              </div>

              {/* Main Image Container */}
              <div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 transform transition-all duration-500 group-hover:scale-105"
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(${1 + (mousePosition.x + mousePosition.y) * 0.0001})`,
                }}
              >
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden relative">
                  <img
                    src="../../../public/images/computer-2788918_1280.jpg"
                    alt="Allouche Mohamed"
                    className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Overlay Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute -top-8 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-80"></div>
              <div className="absolute -top-12 right-12 w-2 h-2 bg-purple-500 rounded-full animate-float-delay-1 opacity-60"></div>
              <div className="absolute top-8 -right-12 w-3 h-3 bg-pink-500 rounded-full animate-float-delay-2 opacity-70"></div>

              <div className="absolute -bottom-8 -left-8 w-4 h-4 bg-purple-500 rounded-full animate-float-delay-3 opacity-80"></div>
              <div className="absolute -bottom-12 left-12 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
              <div className="absolute bottom-8 -left-12 w-3 h-3 bg-pink-500 rounded-full animate-float-delay-1 opacity-70"></div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-orbit">
                <div className="absolute -top-6 left-1/2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform -translate-x-1/2"></div>
              </div>
              <div className="absolute inset-0 animate-orbit-reverse">
                <div className="absolute -bottom-6 left-1/2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2"></div>
              </div>

              {/* Pulsing Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
              <div className="absolute inset-8 rounded-full border border-purple-500/20 animate-ping animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay-1 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-delay-3 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-orbit {
          animation: orbit 15s linear infinite;
        }
        
        .animate-orbit-reverse {
          animation: orbit 20s linear infinite reverse;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
