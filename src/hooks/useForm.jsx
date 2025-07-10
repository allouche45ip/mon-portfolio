

import { useState } from "react"

export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      
      await new Promise((resolve) => setTimeout(resolve, 2000))

      
      console.log("Form submitted:", formData)

      
      setFormData(initialValues)

    
      alert("Message sent successfully!")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData(initialValues)
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    resetForm,
    isSubmitting,
  }
}
