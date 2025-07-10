"use client"

import { useState, useEffect, useRef } from "react"

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const skills = [
    {
      name: "HTML",
      level: 95,
      color: "from-orange-400 to-red-500",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      description: "Markup ",
    },
    {
      name: "JavaScript",
      level: 90,
      color: "from-yellow-400 to-orange-500",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "Dynamic Programming",
    },
    {
      name: "React",
      level: 85,
      color: "from-blue-400 to-cyan-500",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Frontend Framework",
    },
    {
      name: "Node.js",
      level: 60,
      color: "from-green-400 to-emerald-500",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "Backend Runtime",
    },
    {
      name: "Django",
      level: 60,
      color: "from-purple-400 to-pink-500",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      description: "Python Framework",
    },
{
  name: "Tailwind CSS",
  level: 95,
  color: "bg-gradient-to-r from-pink-400 to-rose-500",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  description: "Utility‑First CSS Framework",
  link: "https://tailwindcss.com"
},

  ]

  const otherTechnologies = [
    {
      name: "MongoDB",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Figma",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "CSS3",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",    },
    {
      name: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Bootstrap",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "VS Code",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
      {
    name: "GitHub",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const CircularProgress = ({ skill, index, isVisible }) => {
    const [progress, setProgress] = useState(0)
    const radius = 45
    const circumference = 2 * Math.PI * radius

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setProgress(skill.level)
        }, index * 200)
        return () => clearTimeout(timer)
      }
    }, [isVisible, skill.level, index])

    return (
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-gray-700"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#gradient-${index})"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            className="transition-all duration-2000 ease-out drop-shadow-lg"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-cyan-400" stopColor="currentColor" />
              <stop offset="100%" className="text-purple-500" stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="p-2 bg-white rounded-full mb-1 shadow-lg">
            <img
              src={skill.image || "/placeholder.svg"}
              alt={skill.name}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.target.style.display = "none"
              }}
            />
          </div>
          <span className="text-white font-bold text-sm">{progress}%</span>
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Technologies and tools I work with to create amazing experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group relative ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Circular Progress */}
              <CircularProgress skill={skill} index={index} isVisible={isVisible} />

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-white text-center mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Skill Description */}
              <p className="text-gray-400 text-sm text-center mb-4">{skill.description}</p>

              {/* Linear Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div
                  className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-2000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 200}ms`,
                  }}
                ></div>
              </div>

              {/* Skill Level Text */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Proficiency</span>
                <span className="text-cyan-400 font-semibold">{isVisible ? skill.level : 0}%</span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherTechnologies.map((tech, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-full text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 cursor-default group ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="w-5 h-5 bg-white rounded-full p-0.5 flex items-center justify-center">
                  <img
                    src={tech.image || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-4 h-4 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none"
                    }}
                  />
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
