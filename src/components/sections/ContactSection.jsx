

import { useState } from "react"
import { Mail, Phone, Globe, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState("idle") // 'idle' | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({})
  const [errorMsg, setErrorMsg] = useState("")

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus("loading")
    setErrorMsg("")

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch (err) {
      console.error("Fetch error:", err)
      setErrorMsg("Échec réseau, veuillez réessayer.")
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transformons vos idées en réalité. Envoyez-moi un message et discutons de votre projet.
          </p>
        </div>

        {/* Main Content - Contact Cards + Form */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Contact Information Cards - Left Side */}
            <div className="lg:col-span-4 space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Restons en contact</h3>
                <p className="text-gray-300">
                  N'hésitez pas à me contacter par l'un de ces moyens ou utilisez le formulaire ci-contre.
                </p>
              </div>

              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "mouhamedallouche900@gmail.com",
                  gradient: "from-cyan-400 to-blue-500",
                  description: "Réponse sous 24h",
                  href: "mailto:mouhamedallouche900@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Téléphone",
                  value: "+213 698 00 99 82",
                  href: "tel:+213698009982",
                  gradient: "from-blue-400 to-purple-500",
                  description: "Appelez-moi directement",
                },
                {
                  icon: Globe,
                  title: "Localisation",
                  value: "Alger, Algérie",
                  href: "https://maps.google.com/?q=Alger,Algeria",
                  gradient: "from-purple-400 to-pink-500",
                  description: "Ma localisation",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer block"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-1">
                        {item.value}
                      </p>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-200">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 placeholder-gray-400 ${
                          errors.name
                            ? "border-red-400 focus:ring-red-400/50"
                            : "border-white/20 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                        }`}
                        placeholder="Votre nom complet"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-200">
                        Adresse email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 placeholder-gray-400 ${
                          errors.email
                            ? "border-red-400 focus:ring-red-400/50"
                            : "border-white/20 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                        }`}
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-200">
                      Téléphone (optionnel)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 placeholder-gray-400"
                      placeholder="+213 xxx xxx xxx"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-200">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-4 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none placeholder-gray-400 ${
                        errors.message
                          ? "border-red-400 focus:ring-red-400/50"
                          : "border-white/20 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                      }`}
                      placeholder="Décrivez votre projet, vos besoins ou posez-moi une question..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <div className="flex items-center justify-center gap-3">
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          Envoyer le message
                        </>
                      )}
                    </div>
                  </button>

                  {/* Status Messages */}
                  {status === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                      <div className="flex items-center gap-3 text-green-400">
                        <CheckCircle className="w-6 h-6" />
                        <div>
                          <p className="font-semibold">Message envoyé avec succès !</p>
                          <p className="text-sm text-green-300">Je vous répondrai dans les plus brefs délais.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <div className="flex items-center gap-3 text-red-400">
                        <AlertCircle className="w-6 h-6" />
                        <div>
                          <p className="font-semibold">Erreur lors de l'envoi</p>
                          <p className="text-sm text-red-300">{errorMsg}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
