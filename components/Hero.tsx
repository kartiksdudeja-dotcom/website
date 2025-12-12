'use client'

import { useState } from 'react'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Hero = () => {
  const whatsappNumber = "917678620823"

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Send to email via API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Hero Form' }),
      })

      // Also open WhatsApp
      const message = `Hello! I would like more information about Supreme Villagio.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')

      setSubmitMessage('Thank you! We will contact you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('Submitted! We will contact you soon.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDownloadBrochure = () => {
    alert('Brochure will be available soon!')
  }

  const features = [
    'Grand Clubhouse',
    'Easy Payment Plan - 10:20:30:40',
    'Avail Launch Benefits Upto 3 Lacs'
  ]

  return (
    <section id="home" className="relative w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')`
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation Arrows - Hide on mobile */}
      <button className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors">
        <FaChevronLeft className="text-2xl" />
      </button>
      <button className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors">
        <FaChevronRight className="text-2xl" />
      </button>

      {/* Main Content */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="w-full px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content - Full width on mobile */}
            <div className="text-left space-y-3 sm:space-y-4">
              {/* Location */}
              <div className="text-white">
                <span className="text-xs sm:text-sm"></span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Supreme Villagio
              </h1>

              {/* Subtitle */}
              <h2 className="text-sm sm:text-base lg:text-lg text-white/90 font-medium leading-snug">
                Exclusive 4 & 5 BHK Twin Villas & 4 BHK Townhouses
              </h2>

              {/* Price Badge */}
              <div className="inline-block">
                <div className="bg-gradient-to-r from-secondary to-accent px-4 sm:px-5 py-2 sm:py-2.5">
                  <span className="text-black font-bold text-xs sm:text-sm md:text-base">
                    Starting Price : ₹ 2.39 Cr*
                  </span>
                </div>
              </div>

              {/* Features with arrows */}
              <div className="space-y-1.5 sm:space-y-2 pt-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-white">
                    <span className="text-secondary text-xs sm:text-sm flex-shrink-0 pt-0.5">→</span>
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buttons Container */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                {/* Download Brochure Button - Hidden on mobile, visible on desktop */}
                <button 
                  onClick={handleDownloadBrochure}
                  className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-accent text-black px-5 py-2.5 font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  <span>Download Brochure</span>
                  <FaArrowRight className="text-xs" />
                </button>

                {/* Enquire Now Button - Prominent on mobile */}
                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-accent text-black px-6 py-3 sm:py-2.5 font-bold text-sm sm:text-base hover:opacity-90 transition-opacity rounded"
                >
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>

            {/* Right Form Card - Desktop only */}
            <div className="hidden lg:flex justify-end">
              <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-lg p-5 shadow-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions? Ask Us!</h3>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Your Name" 
                    className="w-full px-3 py-2.5 bg-gray-100 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary"
                  />
                  
                  <input 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="Your Email" 
                    className="w-full px-3 py-2.5 bg-gray-100 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary"
                  />
                  
                  <div className="flex">
                    <div className="flex items-center gap-1 bg-gray-100 border border-gray-300 border-r-0 rounded-l px-2 py-2.5">
                      <span className="text-sm">🇮🇳</span>
                      <span className="text-gray-700 text-xs">+91</span>
                    </div>
                    <input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      placeholder="Phone" 
                      className="flex-1 px-3 py-2.5 bg-gray-100 border border-gray-300 rounded-r text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary"
                    />
                  </div>
                  
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={2}
                    placeholder="Message" 
                    className="w-full px-3 py-2.5 bg-gray-100 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary resize-none"
                  />

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-secondary to-accent text-black py-2.5 font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'}
                  </button>

                  {submitMessage && (
                    <p className="text-green-600 text-xs text-center font-medium">{submitMessage}</p>
                  )}

                  <div className="flex items-start gap-2">
                    <input type="checkbox" defaultChecked className="mt-0.5 accent-secondary" />
                    <p className="text-[10px] text-gray-600 leading-tight">
                      I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Modal Form - Shows when Enquire Now is clicked */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 lg:hidden">
          <div className="w-full sm:max-w-sm bg-white/95 backdrop-blur-sm rounded-t-2xl sm:rounded-lg p-5 sm:p-6 shadow-2xl sm:mx-4 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-600 text-xl hover:text-gray-900"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions? Ask Us!</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Your Name" 
                className="w-full px-3 py-2.5 bg-gray-100 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary"
              />
              
              <input 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="Your Email" 
                className="w-full px-3 py-2.5 bg-gray-100 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary"
              />
              
              <div className="flex">
                <div className="flex items-center gap-1 bg-gray-100 border border-gray-300 border-r-0 rounded-l px-2 py-2.5">
                  <span className="text-sm">🇮🇳</span>
                  <span className="text-gray-700 text-xs">+91</span>
                </div>
                <input 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="Phone" 
                  className="flex-1 px-3 py-2.5 bg-gray-100 border border-gray-300 rounded-r text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary"
                />
              </div>
              
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows={2}
                placeholder="Message" 
                className="w-full px-3 py-2.5 bg-gray-100 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary resize-none"
              />

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-secondary to-accent text-black py-2.5 font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'}
              </button>

              {submitMessage && (
                <p className="text-green-600 text-xs text-center font-medium">{submitMessage}</p>
              )}

              <div className="flex items-start gap-2">
                <input type="checkbox" defaultChecked className="mt-0.5 accent-secondary" />
                <p className="text-[10px] text-gray-600 leading-tight">
                  I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
