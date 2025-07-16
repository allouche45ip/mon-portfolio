// src/components/Footer.jsx

import React, { useState } from "react";
import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Laptop,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Award,
  FolderOpen,
  Coffee,
  MessageSquare 
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/mohamed-allouche-a4ba572b3",
      icon: Linkedin,
      color: "hover:bg-blue-600",
      description: "Professional profile",
    },
    {
      name: "GitHub",
       href: "https://github.com/allouche45ip", 
      icon: Github,
      color: "hover:bg-gray-700",
      description: "Projects and code",
    },
    {
      name: "Messenger",
    href: "https://m.me/mouh.all.77",
      icon: MessageSquare ,
      color: "hover:bg-blue-400",
      description: "Tech updates",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/allouchemohamed7",
      icon: Instagram,
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
      description: "Lifestyle",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home", icon: User },
    { name: "About", href: "#about", icon: Code },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Award },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "mohamedallouche900@gmail.com",
       href: "mailto:mohamedallouche900@gmail.com",
    },
    {
      icon: Phone,
      text: "+213 698 00 99 82",
      href: "tel:+213698009982",
    },
    {
      icon: MapPin,
      text: "Algiers, Algeria",
      href: "https://maps.google.com/?q=Algiers,Algeria",
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Passionate developer specializing in building modern, innovative web applications. Always on the lookout for new technical challenges.
                </p>
              </div>

              {/* Social Links */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:text-white ${social.color} hover:shadow-lg hover:shadow-cyan-400/25`}
                        aria-label={social.name}
                        onMouseEnter={() => setHoveredSocial(social.name)}
                        onMouseLeave={() => setHoveredSocial(null)}
                      >
                        <IconComponent className="w-5 h-5" />

                        {/* Tooltip */}
                        {hoveredSocial === social.name && (
                          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-gray-700 shadow-lg">
                            <div className="text-center">
                              <div className="font-medium">{social.name}</div>
                              <div className="text-xs text-gray-400">{social.description}</div>
                            </div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                          </div>
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <li key={index}>
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        <IconComponent className="w-4 h-4 mt-0.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{contact.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Availability Status */}
              <div className="mt-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="text-white font-medium">Allouche Mohamed</span>. All rights reserved.
              </p>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Laptop className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-cyan-400" />
              <span>by a passionate developer</span>
            </div>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
            >
              <span className="text-sm">Back to top</span>
              <ExternalLink className="w-4 h-4 rotate-90 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-gray-800 py-4">
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              This site uses modern technologies like React, Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
