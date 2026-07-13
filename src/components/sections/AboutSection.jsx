// import React from 'react';
// import image2 from "../../assets/images/entrepreneur-593378_1280.jpg";
// const AboutSection = () => {
//   return (
//     <section id="about" className="py-20 bg-gray-800/50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Get to know more about my background, skills, and passion for web development
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <img 
//               src={image2}
//               alt="About me" 
//               className="rounded-lg shadow-2xl"
//             />
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-6">Frontend Developer & Backend Developer</h3>
//             <p className="text-gray-400 mb-6">
//               I’m a student in Information Systems and Software Engineering at Algiers University1 – Benyoucef Benkhedda,  
//               and a full‑stack web developer with 2 years of experience. I deliver clean,  
//                maintainable, and high‑performance code.
//             </p>
//             <p className="text-gray-400 mb-8">
//               My goal is to create digital experiences that not only look great but also provide 
//               excellent user experience and performance. I'm always eager to learn new technologies 
//               and take on challenging projects.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-4">
//                 <span className="text-cyan-400 font-semibold">Name:</span>
//                 <span className="text-gray-300">Allouche Mohamed </span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="text-cyan-400 font-semibold">Experience:</span>
//                 <span className="text-gray-300">2+ Years</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="text-cyan-400 font-semibold">Email:</span>
//                 <span className="text-gray-300">mohamedallouche900@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="text-cyan-400 font-semibold">Location:</span>
//                 <span className="text-gray-300"> Algiers, Algeria</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


import React from 'react';
import { ShieldCheck, Cpu, Network } from "lucide-react";
import image2 from "../../assets/images/entrepreneur-593378_1280.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, specialization, and passion for networking, embedded systems, and cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={image2}
              alt="About me" 
              className="rounded-lg shadow-2xl"
            />

            {/* small specialty chips under the image */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 flex items-center gap-1">
                <Network className="w-3 h-3" /> Networking
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-400/10 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Security
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-400/10 text-purple-300 border border-purple-400/30 flex items-center gap-1">
                <Cpu className="w-3 h-3" /> Embedded Systems
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Network Engineering & Cybersecurity</h3>
            <p className="text-gray-400 mb-6">
              I'm a Master's student specializing in <span className="text-cyan-400">Networks and Embedded Systems</span> at
              Algiers University 1 – Benyoucef Benkhedda, with a strong focus on <span className="text-cyan-400">network security</span>.
              I work on designing secure network infrastructures, hardening systems against
              attacks
            </p>
            <p className="text-gray-400 mb-8">
              Before specializing, I spent 2+ years as a full-stack web developer — experience I now use to build
              the tools and dashboards that support my networking and security work, such as monitoring interfaces,
              automation scripts, and internal tools. My goal is to become a well-rounded network security
              engineer who understands systems end-to-end, from the wire to the application layer.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-cyan-400 font-semibold">Name:</span>
                <span className="text-gray-300">Allouche Mohamed</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-cyan-400 font-semibold">Specialization:</span>
                <span className="text-gray-300">Networks, Embedded Systems & Network Security</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-cyan-400 font-semibold">Background:</span>
                <span className="text-gray-300">2+ Years Web Development</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-cyan-400 font-semibold">Email:</span>
                <span className="text-gray-300">mohamedallouche900@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-cyan-400 font-semibold">Location:</span>
                <span className="text-gray-300">Algiers, Algeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;