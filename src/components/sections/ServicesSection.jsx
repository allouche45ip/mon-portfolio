// import { Code, Globe } from "lucide-react"

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Web Development",
//       description: "Creating responsive and modern websites using latest technologies like React",
//       features: ["Responsive Design", "Modern Frameworks"],
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "E-commerce Solutions",
//       description: "Developing complete e-commerce platforms with  admin panels.",
//       features: [ "Admin Dashboard", "Inventory Management"],
//     },
//   ]

//   return (
//     <section id="services" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             My <span className="text-cyan-400">Services</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             I offer a wide range of web development services to help bring your ideas to life
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 group border border-gray-700 hover:border-cyan-400/50"
//             >
//               <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
//                 {service.icon}
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
//                 {service.title}
//               </h3>
//               <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
//               <ul className="space-y-2">
//                 {service.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
//                     <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServicesSection 

import { Network, ShieldCheck, Server, Code, Globe, Terminal, MonitorCog } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Design & Configuration",
      description: "Designing and configuring LAN/WAN infrastructures, VLANs, and routing for reliable, scalable networks.",
      features: ["VLAN & Subnetting", "Routing (OSPF, RIP, BGP)", "Cisco / GNS3 Setup"],
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Network Security Audits",
      description: "Identifying vulnerabilities in network infrastructure and applying hardening measures to reduce attack surface.",
      features: ["Vulnerability Scanning", "Firewall & ACL Rules", "Penetration Testing Basics"],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "System & Server Administration",
      description: "Setting up and maintaining Linux servers, services, and secure remote access for small infrastructures.",
      features: ["Linux Server Setup", "SSH Hardening", "Monitoring & Logging"],
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Intrusion Detection & Monitoring",
      description: "Deploying tools to detect suspicious traffic and respond to potential threats in real time.",
      features: ["IDS/IPS Deployment", "Packet Analysis (Wireshark)", "Log Monitoring"],
    },
    {
      icon: <MonitorCog className="w-8 h-8" />,
      title: "Windows Server & Active Directory",
      description: "Deploying and managing Windows Server environments with centralized identity and access control.",
      features: ["AD DS", "User & Group Management", "Group Policies", "Domain Administration"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive, modern websites and web apps using React and current frontend/backend technologies.",
      features: ["Responsive Design", "Modern Frameworks (React)", "REST API Integration"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Secure Web Deployment",
      description: "Deploying web applications with security best practices — HTTPS, secure headers, and access control.",
      features: ["HTTPS / SSL Setup", "Basic App Hardening"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer services across networking, network security, and web development to help bring your ideas to life — securely
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 group border border-gray-700 hover:border-cyan-400/50"
            >
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection