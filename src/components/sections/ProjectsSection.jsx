// // "use client"

// // import { useState, useEffect } from "react"
// // import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

// // const ProjectsSection = () => {
// //   const [currentImageIndex, setCurrentImageIndex] = useState({})

// //   const projects = [
// //     {
// //       title: "Prayer Times",
// //       description:
// //         "Une application pour afficher les heures de prière islamiques avec géolocalisation et notifications",
// //       images: [
// //         "../../../public/images/Capture d'écran 2025-05-09 234948.png",
// //         "../../../public/images/image.png",
        
// //       ],
// //       technologies: ["HTML", "JavaScript", "CSS", "API Geolocation"],
      
// //       githubLink: "https://github.com/allouche45ip/projetTIM.git",
// //     },
// //     {
// //       title: "Portfolio Website",
// //       description: "Un site portfolio responsive construit avec React et Tailwind CSS avec animations fluides",
// //       images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
// //       technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      
// //       githubLink: "#",
// //     },
// //     {
// //       title: "Task Management App",
// //       description:
// //         "Une application collaborative de gestion de tâches avec mises à jour en temps réel et système d'équipes",
// //       images: [
// //         "../../../public/images/Capture d'écran 2025-05-09 235902.png",
// //         "../../../public/images/tttdd.png",
// //         "../../../public/images/eed.png",
// //       ],
// //       technologies: ["React", "Tailwind CSS", "Express", "MySQL", "Socket.io"],
    
// //       githubLink: "#",
// //     },
// //   {
// //   title: "Dental Clinic Management",
// //   description: "A web platform for managing a dental clinic, including appointment scheduling, patient records,",
// //   images: [
// //     "../../../public/images/Capture d'écran 2025-05-09 234433.png",
// //     "../../../public/images/cdsx.png",
// //     "../../../public/images/Capture d'écran 2025-05-09 234647.png",
// //     "../../../public/images/dev.png",
// //   ],
// //   technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],

// //   githubLink: "https://github.com/allouche45ip/projweb.git",
// // },

// // {
// //   title: "Internship Management Platform - Algérie Poste",
// //   description: "A web platform for managing internship requests at Algérie Poste, including application submission, validation workflow, follow-up tracking, and user management.",
// //   images: [
// //     "../../../public/images/Capture d'écran 2025-04-20 135434.png",
// //     "../../../public/images/Capture d'écran 2025-04-27 152339.png",
// //   ],
// //   technologies: ["React", "Tailwind CSS", "Django Rest Framework", "MySQL"],
// //   liveLink: "#",
// //   githubLink: "#",
// //   note: "Due to confidentiality, not all pages of the platform can be displayed, and the source code cannot be shared. This project was specifically developed for internal use at Algérie Poste."
// // }

// //   ]

// //   // Initialiser les index des images pour chaque projet
// //   useEffect(() => {
// //     const initialIndexes = {}
// //     projects.forEach((_, index) => {
// //       initialIndexes[index] = 0
// //     })
// //     setCurrentImageIndex(initialIndexes)
// //   }, [])

// //   // Effet pour le carrousel automatique
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImageIndex((prev) => {
// //         const newIndexes = { ...prev }
// //         projects.forEach((project, projectIndex) => {
// //           if (project.images.length > 1) {
// //             newIndexes[projectIndex] = (prev[projectIndex] + 1) % project.images.length
// //           }
// //         })
// //         return newIndexes
// //       })
// //     }, 4000) // Changement toutes les 4 secondes

// //     return () => clearInterval(interval)
// //   }, [projects])

// //   const nextImage = (projectIndex) => {
// //     setCurrentImageIndex((prev) => ({
// //       ...prev,
// //       [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length,
// //     }))
// //   }

// //   const prevImage = (projectIndex) => {
// //     setCurrentImageIndex((prev) => ({
// //       ...prev,
// //       [projectIndex]: prev[projectIndex] === 0 ? projects[projectIndex].images.length - 1 : prev[projectIndex] - 1,
// //     }))
// //   }

// //   const goToImage = (projectIndex, imageIndex) => {
// //     setCurrentImageIndex((prev) => ({
// //       ...prev,
// //       [projectIndex]: imageIndex,
// //     }))
// //   }

// //   return (
// //     <section id="projects" className="py-20 bg-gray-900 min-h-screen">
// //       <div className="container mx-auto px-6">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
// //             Mes{" "}
// //             <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projets</span>
// //           </h2>
// //           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
// //             Découvrez mes projets récents et mes réalisations techniques
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {projects.map((project, index) => (
// //             <div
// //               key={index}
// //               className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/10"
// //             >
// //               {/* Carrousel d'images */}
// //               <div className="relative h-48 overflow-hidden">
// //                 <img
// //                   src={project.images[currentImageIndex[index] || 0]}
// //                   alt={`${project.title} - Image ${(currentImageIndex[index] || 0) + 1}`}
// //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //                 />

// //                 {/* Contrôles de navigation (visibles au hover) */}
// //                 {project.images.length > 1 && (
// //                   <>
// //                     <button
// //                       onClick={(e) => {
// //                         e.preventDefault()
// //                         prevImage(index)
// //                       }}
// //                       className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
// //                       aria-label="Image précédente"
// //                     >
// //                       <ChevronLeft className="w-4 h-4" />
// //                     </button>

// //                     <button
// //                       onClick={(e) => {
// //                         e.preventDefault()
// //                         nextImage(index)
// //                       }}
// //                       className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
// //                       aria-label="Image suivante"
// //                     >
// //                       <ChevronRight className="w-4 h-4" />
// //                     </button>
// //                   </>
// //                 )}

// //                 {/* Indicateurs de pagination */}
// //                 {project.images.length > 1 && (
// //                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
// //                     {project.images.map((_, imageIndex) => (
// //                       <button
// //                         key={imageIndex}
// //                         onClick={(e) => {
// //                           e.preventDefault()
// //                           goToImage(index, imageIndex)
// //                         }}
// //                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
// //                           (currentImageIndex[index] || 0) === imageIndex
// //                             ? "bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50"
// //                             : "bg-white/50 hover:bg-white/70"
// //                         }`}
// //                         aria-label={`Aller à l'image ${imageIndex + 1}`}
// //                       />
// //                     ))}
// //                   </div>
// //                 )}

// //                 {/* Compteur d'images */}
// //                 {project.images.length > 1 && (
// //                   <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm backdrop-blur-sm">
// //                     {(currentImageIndex[index] || 0) + 1}/{project.images.length}
// //                   </div>
// //                 )}
// //               </div>

// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
// //                   {project.title}
// //                 </h3>
// //                 <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

// //                 <div className="flex flex-wrap gap-2 mb-6">
// //                   {project.technologies.map((tech, techIndex) => (
// //                     <span
// //                       key={techIndex}
// //                       className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-sm rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105"
// //                     >
// //                       {tech}
// //                     </span>
// //                   ))}
// //                 </div>

// //                 <div className="flex space-x-4">
                

// //                   <a
// //                     href={project.githubLink}
// //                     className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 hover:underline"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                   >
// //                     <Github className="w-4 h-4" />
// //                     <span>Code</span>
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default ProjectsSection
   


// "use client"

// import { useState, useEffect } from "react"
// import { ExternalLink, Github, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
// import prayerImg1 from "../../assets/images/Capture d'écran 2025-05-09 234948.png"                       
// import prayerImg2 from "../../assets/images/image.png"
// import portfolioImg1 from "../../assets/images/profolio.png"
// import portfolioImg2 from "../../assets/images/aboiut.png"
// import portfolioImg3 from "../../assets/images/Capture d'écran 2025-07-11 004601.png"
// import taskImg1 from "../../assets/images/Capture d'écran 2025-05-09 235902.png"
// import taskImg2 from "../../assets/images/tttdd.png"
// import taskImg3 from "../../assets/images/eed.png"
// import dentalImg1 from "../../assets/images/Capture d'écran 2025-05-09 234433.png"
// import dentalImg2 from "../../assets/images/cdsx.png"
// import dentalImg3 from "../../assets/images/Capture d'écran 2025-05-09 234647.png"
// import dentalImg4 from "../../assets/images/dev.png"
// import stageImg1 from "../../assets/images/Capture d'écran 2025-04-20 135434.png"
// import stageImg2 from "../../assets/images/Capture d'écran 2025-04-27 152339.png"
// const ProjectsSection = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState({})

//   const projects = [
//      {
//        title: "Prayer Times",
//        description:
//          "Une application pour afficher les heures de prière islamiques avec géolocalisation et notifications",
//        images: [ prayerImg1,prayerImg2   ],
      
        
      
//        technologies: ["HTML", "JavaScript", "CSS",],
      
//        githubLink: "https://github.com/allouche45ip/projetTIM.git",
//      },
//     {
//       title: "Portfolio Website",
//       description: "Un site portfolio responsive construit avec React et Tailwind CSS avec animations fluides",
//       images: [portfolioImg1,portfolioImg2,portfolioImg3
        
//       ],
//       technologies: ["React", "Tailwind CSS",],
//        githubLink: "https://github.com/allouche45ip/projweb.git",
//  },
    
//     {
//        title: "Task Management App",
//        description:
//          "Une application collaborative de gestion de tâches avec mises à jour en temps réel et système d'équipes",
//        images: [taskImg1,taskImg2,taskImg3
        
//        ],
       
    
//        githubLink: "#",
//      },
//    {
//    title: "Dental Clinic Management",
//    description: "A web platform for managing a dental clinic, including appointment scheduling, patient records,",
//    images: [dentalImg1,dentalImg2,dentalImg3,dentalImg4
  
//    ],
   

//    githubLink: "https://github.com/allouche45ip/projweb.git",
//  },

//     {
//       title: "Internship Management Platform - Algérie Poste",
//       description:
//         "A web platform for managing internship requests at Algérie Poste, including application submission, validation workflow, follow-up tracking, and user management.",
//     images: [
//      stageImg1,stageImg2
//    ],
//       technologies: ["React", "Tailwind CSS", "Django Rest Framework", "MySQL"],
    
//       githubLink: "#",
//       note: "Due to confidentiality, not all pages of the platform can be displayed, and the source code cannot be shared. This project was specifically developed for internal use at Algérie Poste.",
//       isConfidential: true,
//     },
//   ]

//   // Initialiser les index des images pour chaque projet
//   useEffect(() => {
//     const initialIndexes = {}
//     projects.forEach((_, index) => {
//       initialIndexes[index] = 0
//     })
//     setCurrentImageIndex(initialIndexes)
//   }, [])

//   // Effet pour le carrousel automatique
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => {
//         const newIndexes = { ...prev }
//         projects.forEach((project, projectIndex) => {
//           if (project.images.length > 1) {
//             newIndexes[projectIndex] = (prev[projectIndex] + 1) % project.images.length
//           }
//         })
//         return newIndexes
//       })
//     }, 4000) // Changement toutes les 4 secondes

//     return () => clearInterval(interval)
//   }, [projects])

//   const nextImage = (projectIndex) => {
//     setCurrentImageIndex((prev) => ({
//       ...prev,
//       [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length,
//     }))
//   }

//   const prevImage = (projectIndex) => {
//     setCurrentImageIndex((prev) => ({
//       ...prev,
//       [projectIndex]: prev[projectIndex] === 0 ? projects[projectIndex].images.length - 1 : prev[projectIndex] - 1,
//     }))
//   }

//   const goToImage = (projectIndex, imageIndex) => {
//     setCurrentImageIndex((prev) => ({
//       ...prev,
//       [projectIndex]: imageIndex,
//     }))
//   }

//   return (
//     <section id="projects" className="py-20 bg-gray-900 min-h-screen">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Mes{" "}
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projets</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Découvrez mes projets récents et mes réalisations techniques
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className={`bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/10 ${
//                 project.isConfidential ? "ring-1 ring-amber-500/30" : ""
//               }`}
//             >
//               {/* Badge confidentiel */}
//               {project.isConfidential && (
//                 <div className="absolute top-2 left-2 z-10 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-3 py-1 flex items-center gap-1">
//                   <AlertCircle className="w-3 h-3 text-amber-400" />
//                   <span className="text-amber-400 text-xs font-medium">Confidentiel</span>
//                 </div>
//               )}

//               {/* Carrousel d'images */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.images[currentImageIndex[index] || 0]}
//                   alt={`${project.title} - Image ${(currentImageIndex[index] || 0) + 1}`}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                 />

//                 {/* Contrôles de navigation (visibles au hover) */}
//                 {project.images.length > 1 && (
//                   <>
//                     <button
//                       onClick={(e) => {
//                         e.preventDefault()
//                         prevImage(index)
//                       }}
//                       className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
//                       aria-label="Image précédente"
//                     >
//                       <ChevronLeft className="w-4 h-4" />
//                     </button>

//                     <button
//                       onClick={(e) => {
//                         e.preventDefault()
//                         nextImage(index)
//                       }}
//                       className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
//                       aria-label="Image suivante"
//                     >
//                       <ChevronRight className="w-4 h-4" />
//                     </button>
//                   </>
//                 )}

//                 {/* Indicateurs de pagination */}
//                 {project.images.length > 1 && (
//                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                     {project.images.map((_, imageIndex) => (
//                       <button
//                         key={imageIndex}
//                         onClick={(e) => {
//                           e.preventDefault()
//                           goToImage(index, imageIndex)
//                         }}
//                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                           (currentImageIndex[index] || 0) === imageIndex
//                             ? "bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50"
//                             : "bg-white/50 hover:bg-white/70"
//                         }`}
//                         aria-label={`Aller à l'image ${imageIndex + 1}`}
//                       />
//                     ))}
//                   </div>
//                 )}

//                 {/* Compteur d'images */}
//                 {project.images.length > 1 && (
//                   <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm backdrop-blur-sm">
//                     {(currentImageIndex[index] || 0) + 1}/{project.images.length}
//                   </div>
//                 )}
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

//                 {/* Note confidentielle */}
//                 {project.note && (
//                   <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
//                     <div className="flex items-start gap-2">
//                       <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
//                       <p className="text-amber-200 text-sm leading-relaxed">
//                         <span className="font-medium">Note:</span> {project.note}
//                       </p>
//                     </div>
//                   </div>
//                 )}

        

//                 <div className="flex space-x-4">
//                   {project.liveLink && !project.isConfidential && (
//                     <a
//                       href={project.liveLink}
//                       className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:underline"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       <span>Demo</span>
//                     </a>
//                   )}

//                   {project.githubLink && project.githubLink !== "#" && !project.isConfidential && (
//                     <a
//                       href={project.githubLink}
//                       className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 hover:underline"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Github className="w-4 h-4" />
//                       <span>Code</span>
//                     </a>
//                   )}

//                   {project.isConfidential && (
//                     <div className="flex items-center space-x-2 text-gray-500">
//                       <Github className="w-4 h-4" />
//                       <span className="text-sm">Code non disponible</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ProjectsSection



"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight, AlertCircle, Video, Server } from "lucide-react"
import prayerImg1 from "../../assets/images/Capture d'écran 2025-05-09 234948.png"                       
import prayerImg2 from "../../assets/images/image.png"
import portfolioImg1 from "../../assets/images/profolio.png"
import portfolioImg2 from "../../assets/images/aboiut.png"
import portfolioImg3 from "../../assets/images/Capture d'écran 2025-07-11 004601.png"
import taskImg1 from "../../assets/images/Capture d'écran 2025-05-09 235902.png"
import taskImg2 from "../../assets/images/tttdd.png"
import taskImg3 from "../../assets/images/eed.png"
import dentalImg1 from "../../assets/images/Capture d'écran 2025-05-09 234433.png"
import dentalImg2 from "../../assets/images/cdsx.png"
import dentalImg3 from "../../assets/images/Capture d'écran 2025-05-09 234647.png"
import dentalImg4 from "../../assets/images/dev.png"
import stageImg1 from "../../assets/images/Capture d'écran 2025-04-20 135434.png"
import stageImg2 from "../../assets/images/Capture d'écran 2025-04-27 152339.png"

// 🟢 New project — architecture diagrams (network topology + system/load-balancing architecture)
import votingNetworkImg from "../../assets/images/photo_2026-06-22_11-13-31.jpg"
import votingSystemImg from "../../assets/images/photo_2026-06-22_11-13-42.jpg"

const ProjectsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const projects = [
    // 🟢 New: Distributed Online Voting Platform — networking/systems project, no GitHub (deployed on local VMs)
    {
      title: "Distributed Online Voting Platform",
      description:
        "A multi-tier distributed online voting system deployed across 8 VMs, designed around client/server communication, high availability, and fault tolerance. Includes a load-balanced frontend/backend tier (HAProxy), master-master replicated databases (ProxySQL), and an automated backup node.",
      images: [votingNetworkImg, votingSystemImg],
      technologies: ["Linux", "VirtualBox", "HAProxy", "ProxySQL", "MySQL (Master-Master)", "Networking"],
      githubLink: "#",
      // 🟢 Set this to your real video URL once hosted (YouTube/Drive/etc.) — button hides automatically if left as "#"
      videoLink: "#",
      isInfraProject: true,
      note: "Built and deployed locally across 8 virtual machines (frontend, backend, database, load balancer, and backup nodes). Not pushed to GitHub — see architecture diagrams and demo video for full process.",
    },

    {
      title: "Prayer Times",
      description:
        "Une application pour afficher les heures de prière islamiques avec géolocalisation et notifications",
      images: [ prayerImg1,prayerImg2   ],
      technologies: ["HTML", "JavaScript", "CSS",],
      githubLink: "https://github.com/allouche45ip/projetTIM.git",
    },
    {
      title: "Portfolio Website",
      description: "Un site portfolio responsive construit avec React et Tailwind CSS avec animations fluides",
      images: [portfolioImg1,portfolioImg2,portfolioImg3
        
      ],
      technologies: ["React", "Tailwind CSS",],
       githubLink: "https://github.com/allouche45ip/projweb.git",
 },
    
    {
       title: "Task Management App",
       description:
         "Une application collaborative de gestion de tâches avec mises à jour en temps réel et système d'équipes",
       images: [taskImg1,taskImg2,taskImg3
        
       ],
       
    
       githubLink: "#",
     },
   {
   title: "Dental Clinic Management",
   description: "A web platform for managing a dental clinic, including appointment scheduling, patient records,",
   images: [dentalImg1,dentalImg2,dentalImg3,dentalImg4
  
   ],
   

   githubLink: "https://github.com/allouche45ip/projweb.git",
 },

    {
      title: "Internship Management Platform - Algérie Poste",
      description:
        "A web platform for managing internship requests at Algérie Poste, including application submission, validation workflow, follow-up tracking, and user management.",
    images: [
     stageImg1,stageImg2
   ],
      technologies: ["React", "Tailwind CSS", "Django Rest Framework", "MySQL"],
    
      githubLink: "#",
      note: "Due to confidentiality, not all pages of the platform can be displayed, and the source code cannot be shared. This project was specifically developed for internal use at Algérie Poste.",
      isConfidential: true,
    },
  ]

  // Initialiser les index des images pour chaque projet
  useEffect(() => {
    const initialIndexes = {}
    projects.forEach((_, index) => {
      initialIndexes[index] = 0
    })
    setCurrentImageIndex(initialIndexes)
  }, [])

  // Effet pour le carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndexes = { ...prev }
        projects.forEach((project, projectIndex) => {
          if (project.images.length > 1) {
            newIndexes[projectIndex] = (prev[projectIndex] + 1) % project.images.length
          }
        })
        return newIndexes
      })
    }, 4000) // Changement toutes les 4 secondes

    return () => clearInterval(interval)
  }, [projects])

  const nextImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length,
    }))
  }

  const prevImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === 0 ? projects[projectIndex].images.length - 1 : prev[projectIndex] - 1,
    }))
  }

  const goToImage = (projectIndex, imageIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: imageIndex,
    }))
  }

  return (
    <section id="projects" className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez mes projets récents en réseaux, systèmes distribués et développement web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/10 ${
                project.isConfidential ? "ring-1 ring-amber-500/30" : ""
              } ${project.isInfraProject ? "ring-1 ring-emerald-500/30" : ""}`}
            >
              {/* Badge confidentiel */}
              {project.isConfidential && (
                <div className="absolute top-2 left-2 z-10 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-3 py-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-amber-400" />
                  <span className="text-amber-400 text-xs font-medium">Confidentiel</span>
                </div>
              )}

              {/* 🟢 Badge infra/réseau pour le nouveau projet */}
              {project.isInfraProject && (
                <div className="absolute top-2 left-2 z-10 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-3 py-1 flex items-center gap-1">
                  <Server className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-medium">Infrastructure / Réseau</span>
                </div>
              )}

              {/* Carrousel d'images */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.images[currentImageIndex[index] || 0]}
                  alt={`${project.title} - Image ${(currentImageIndex[index] || 0) + 1}`}
                  className={`w-full h-full ${project.isInfraProject ? "object-contain bg-white" : "object-cover"} group-hover:scale-110 transition-transform duration-300`}
                />

                {/* Contrôles de navigation (visibles au hover) */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        prevImage(index)
                      }}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      aria-label="Image précédente"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        nextImage(index)
                      }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      aria-label="Image suivante"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Indicateurs de pagination */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        onClick={(e) => {
                          e.preventDefault()
                          goToImage(index, imageIndex)
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          (currentImageIndex[index] || 0) === imageIndex
                            ? "bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Aller à l'image ${imageIndex + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Compteur d'images */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm backdrop-blur-sm">
                    {(currentImageIndex[index] || 0) + 1}/{project.images.length}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                {/* Tags technologies */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Note confidentielle / infra */}
                {project.note && (
                  <div className={`mb-4 p-3 rounded-lg border ${project.isInfraProject ? "bg-emerald-500/10 border-emerald-500/20" : "bg-amber-500/10 border-amber-500/20"}`}>
                    <div className="flex items-start gap-2">
                      <AlertCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${project.isInfraProject ? "text-emerald-400" : "text-amber-400"}`} />
                      <p className={`text-sm leading-relaxed ${project.isInfraProject ? "text-emerald-200" : "text-amber-200"}`}>
                        <span className="font-medium">Note:</span> {project.note}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4">
                  {project.liveLink && !project.isConfidential && (
                    <a
                      href={project.liveLink}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}

                  {/* 🟢 Video Demo button — only shows once videoLink is a real URL (not "#") */}
                  {project.videoLink && project.videoLink !== "#" && (
                    <a
                      href={project.videoLink}
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Video className="w-4 h-4" />
                      <span>Video Demo</span>
                    </a>
                  )}

                  {project.githubLink && project.githubLink !== "#" && !project.isConfidential && (
                    <a
                      href={project.githubLink}
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.isConfidential && (
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code non disponible</span>
                    </div>
                  )}

                  {/* 🟢 Shown for the infra project instead of a broken/missing code link */}
                  {project.isInfraProject && (!project.videoLink || project.videoLink === "#") && (
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Server className="w-4 h-4" />
                      <span className="text-sm">Déployé localement (VMs)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection