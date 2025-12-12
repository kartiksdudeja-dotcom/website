'use client'

import { useState } from 'react'
import { FaUser, FaPhone, FaEnvelope, FaComments, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Send to email via API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Contact Form' }),
      })

      // Also open WhatsApp
      const whatsappNumber = '917678620823'
      const message = `Hello! I'm interested in Supreme Villagio.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
      window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank')

      setSubmitMessage('Thank you! We will contact you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('Submitted! We will contact you soon.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">Have Questions? Ask Us!</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">Get in Touch with Our Experts</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-darkGray p-8 md:p-12 rounded-2xl border-2 border-secondary/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-black border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-black border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-300 font-semibold mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-black border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <div className="relative">
                  <FaComments className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 bg-black border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
              </div>

              {/* Consent */}
              <div className="text-sm text-gray-400">
                <p>
                  I authorize company representatives to Call, SMS, Email or WhatsApp me about its 
                  products and offers. This consent overrides any registration for DNC/NDNC.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'}</span>
                <FaPaperPlane />
              </button>

              {submitMessage && (
                <p className="text-green-500 text-center font-medium">{submitMessage}</p>
              )}
            </form>
          </div>

          {/* Decision Corner Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-darkGray p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <h3 className="text-lg font-bold text-gold mb-2">Looking For Investment?</h3>
              <p className="text-gray-400 text-sm mb-4">Get expert advice on lucrative opportunities</p>
              <a href="tel:+917678620823" className="text-secondary font-semibold hover:underline">
                Ask An Expert
              </a>
            </div>
            <div className="bg-darkGray p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <h3 className="text-lg font-bold text-gold mb-2">Need Guidance?</h3>
              <p className="text-gray-400 text-sm mb-4">Talk to our experts for right investment</p>
              <a href="tel:+917678620823" className="text-secondary font-semibold hover:underline">
                Talk Now
              </a>
            </div>
            <div className="bg-darkGray p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <h3 className="text-lg font-bold text-gold mb-2">Visit Our Site</h3>
              <p className="text-gray-400 text-sm mb-4">Experience the luxury in person</p>
              <a href="tel:+917678620823" className="text-secondary font-semibold hover:underline">
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
