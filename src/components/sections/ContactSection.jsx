"use client"

import { useState } from "react"
import { Mail, Phone, Globe, Send, Loader2 } from "lucide-react"

const ContactSection = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)

  const handleIframeLoad = () => {
    setIsIframeLoaded(true)
    setIframeError(false)
  }

  const handleIframeError = () => {
    setIframeError(true)
    setIsIframeLoaded(true)
  }

  const contactInfo = [
  {
  icon: Mail,
  title: "Email",
  value: "mouhamedallouche900@gmail.com",
  href: "mailto:mouhamedallouche900@gmail.com",
  description: "Envoyez-moi un email",
},

    {
      icon: Phone,
      title: "Téléphone",
      value: "+213 698 009 982",
      href: "tel:+213698009982",
      description: "Appelez-moi directement",
    },
    {
      icon: Globe,
      title: "Localisation",
      value: "Alger, Algérie",
      href: "https://maps.google.com/?q=Alger,Algeria",
      description: "Ma localisation",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Travaillons ensemble ! Remplissez le formulaire ci-dessous ou utilisez mes coordonnées.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Column: Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Send className="w-6 h-6 text-cyan-400" />
                  Restons en Contact
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center space-x-4 p-4 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {contact.title}
                          </h4>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {contact.value}
                          </p>
                          <p className="text-gray-500 text-sm">{contact.description}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>

                {/* Additional info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-xl border border-cyan-400/20">
                  <h4 className="font-semibold text-cyan-400 mb-2">Disponibilité</h4>
                  <p className="text-gray-300 text-sm">
                    Je réponds généralement dans les 24 heures. N'hésitez pas à me contacter pour discuter de vos
                    projets !
                  </p>
                </div>
              </div>
            </div>

            {/* Column: Google Form Embed */}
            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-gray-700/50">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    Formulaire de Contact
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Remplissez le formulaire pour me contacter directement</p>
                </div>

                <div className="relative">
                  {/* Loading state */}
                  {!isIframeLoaded && !iframeError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                      <div className="text-center">
                        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-4" />
                        <p className="text-gray-400">Chargement du formulaire...</p>
                      </div>
                    </div>
                  )}

                  {/* Error state */}
                  {iframeError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Mail className="w-8 h-8 text-red-400" />
                        </div>
                        <h4 className="text-white font-semibold mb-2">Erreur de chargement</h4>
                        <p className="text-gray-400 mb-4">
                          Le formulaire n'a pas pu être chargé. Vous pouvez me contacter directement par email.
                        </p>
                        <a
                          href="mailto:your.email@example.com"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          <Mail className="w-4 h-4" />
                          Envoyer un Email
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Iframe */}
                  <div className="w-full h-[600px] lg:h-[700px]">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSePRSabqf8CDaAzUTwKfyUCC11JT_QmDWRvqfH-UVPLc4OGsA/viewform?embedded=true"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="Formulaire de Contact"
                      className="rounded-b-2xl"
                      onLoad={handleIframeLoad}
                      onError={handleIframeError}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile alternative */}
              <div className="lg:hidden mt-6 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <p className="text-gray-400 text-sm text-center">
                  Sur mobile, vous pouvez également{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSePRSabqf8CDaAzUTwKfyUCC11JT_QmDWRvqfH-UVPLc4OGsA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    ouvrir le formulaire dans un nouvel onglet
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
