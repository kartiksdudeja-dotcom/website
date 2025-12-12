'use client'

import { FaHome, FaRulerCombined, FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'

import { useState } from 'react'

const PriceCards = () => {
  const [showForm, setShowForm] = useState<number | null>(null)
  const [isUnlocked, setIsUnlocked] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const whatsappNumber = '917678620823'

  const handleViewDetails = (idx: number) => {
    setShowForm(idx)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send to email via API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Price Card - View Details' }),
      })

      setIsUnlocked(showForm)
      setShowForm(null)
      
      // Also open WhatsApp
      const message = encodeURIComponent(`Hello! I am interested in property details.%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`)
      window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank')
    } catch (error) {
      console.error('Error:', error)
      setIsUnlocked(showForm)
      setShowForm(null)
    } finally {
      setIsSubmitting(false)
    }
  }

  const properties = [
    {
      type: '4 BHK TOWNHOUSE',
      size: '1900 - 2100 Sq. Ft.',
      price: '₹ 2.39 Cr*',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      features: ['Spacious Layout', 'Private Garden', 'Premium Finishes', 'Covered Parking']
    },
    {
      type: '4 BHK TWIN VILLA',
      size: '2000 - 2200 Sq. Ft.',
      price: '₹ 2.66 Cr*',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      features: ['Independent Villa', 'Private Terrace', 'Modern Design', 'Gated Community'],
      featured: true
    },
    {
      type: '5 BHK TWIN VILLA',
      size: '2500 - 2600 Sq. Ft.',
      price: '₹ 3.56 Cr*',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
      features: ['Luxury Living', 'Extra Room', 'Premium Location', 'Grand Entrance']
    }
  ]

  return (
    <section id="price" className="py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary px-6 py-2 rounded-full mb-4">
            <p className="text-black font-bold text-sm">QUALITY THAT FITS YOUR BUDGET</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Price</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className={`bg-darkGray rounded-lg sm:rounded-xl shadow-lg lg:shadow-xl hover:scale-100 sm:hover:scale-105 transition-all duration-300 overflow-hidden ${
                property.featured ? 'ring-2 sm:ring-4 ring-secondary' : ''
              }`}
            >
              {property.featured && (
                <div className="bg-secondary text-black text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.type}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-secondary">
                    <FaHome className="text-2xl" />
                    <span className="font-bold text-sm text-white">{property.type}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-gray-400 mb-4">
                  <FaRulerCombined />
                  <span className="text-sm">Size: {property.size}</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Price</p>
                  <p className="text-4xl font-bold text-secondary">{property.price}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                      <FaCheckCircle className="text-accent text-xs" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {isUnlocked === index ? (
                  <div className="mt-4 p-4 bg-black/80 rounded-lg border border-secondary text-white">
                    <h4 className="text-xl font-bold text-gold mb-2">Details Unlocked!</h4>
                    <p className="mb-2">Thank you for submitting your details. Check WhatsApp for more info.</p>
                    <ul className="space-y-2 text-gray-300 text-sm mb-2">
                      {property.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                    <p className="text-secondary font-bold">Size: {property.size}</p>
                    <p className="text-gold font-bold">Price: {property.price}</p>
                  </div>
                ) : (
                  <button
                    className="w-full bg-accent hover:bg-gold text-black py-3 rounded-lg font-bold transition-all duration-300"
                    onClick={() => handleViewDetails(index)}
                  >
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Form */}
        {showForm !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="bg-darkGray p-8 rounded-2xl max-w-md w-full border-2 border-secondary relative">
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setShowForm(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-gold mb-4 text-center">Supreme Villagio</h3>
              <p className="text-white text-center mb-6">Find Your Dream Home Today With Our Expert Assistance.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white"
                  placeholder="Your Name*"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white"
                  placeholder="Your Email Address*"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white"
                  placeholder="Your Mobile Number*"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white"
                  placeholder="Message (optional)"
                />
                <div className="flex items-center text-xs text-gray-400">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  <span>I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-black py-3 rounded-lg font-bold text-lg transition-all duration-300 mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Prices are subject to change. Please contact us for the latest pricing and offers.
          </p>
          <div className="mt-6">
            <a href="#contact" className="btn-primary">
              Get Best Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceCards
