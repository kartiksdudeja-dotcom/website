'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaDownload, FaLock, FaCheckCircle } from 'react-icons/fa'

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const plans = [
    {
      id: 'master',
      name: 'Master Plan',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      description: 'Complete layout of the entire community'
    },
    {
      id: '4bhk',
      name: '4 BHK',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      description: '4 Bedroom layouts with detailed dimensions'
    },
    {
      id: '5bhk',
      name: '5 BHK',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
      description: '5 Bedroom luxury villa plans'
    }
  ]

  const handleTabClick = (planId: string) => {
    if (!isUnlocked) {
      setShowForm(true)
      setActiveTab(planId)
    } else {
      setActiveTab(planId)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const whatsappNumber = '917678620823'
    const message = encodeURIComponent(`Hello! I would like to view the floor plans.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}`)
    
    try {
      // Send to email via API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, message: 'Requested Floor Plans', source: 'Floor Plans Form' }),
      })

      setIsUnlocked(true)
      setShowForm(false)
      
      window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank')
    } catch (error) {
      console.error('Error:', error)
      setIsUnlocked(true)
      setShowForm(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="floor-plan" className="py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary px-6 py-2 rounded-full mb-4">
            <p className="text-black font-bold text-sm">WELL CONSTRUCTED</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Floor Plans</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8"></p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => handleTabClick(plan.id)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === plan.id && isUnlocked
                  ? 'bg-accent text-black shadow-lg scale-105'
                  : 'bg-darkGray text-white hover:bg-gray-800'
              }`}
            >
              {!isUnlocked && <FaLock className="text-secondary" />}
              {plan.name}
            </button>
          ))}
        </div>

        {/* Lock Form or Floor Plans */}
        {!isUnlocked && showForm ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-darkGray p-8 md:p-12 rounded-2xl border-2 border-secondary">
              <div className="text-center mb-8">
                <FaLock className="text-6xl text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Floor Plans Are Locked</h3>
                <p className="text-gray-400">
                  Submit your details to unlock and view all floor plans
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Your Email*"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none text-white"
                  placeholder="Your Phone Number*"
                />
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-gold text-black py-4 rounded-lg font-bold text-lg transition-all duration-300"
                >
                  UNLOCK FLOOR PLANS
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you authorize us to contact you. You will receive floor plans on WhatsApp.
                </p>
              </form>
            </div>
          </div>
        ) : !isUnlocked ? (
          <div className="text-center py-20">
            <FaLock className="text-6xl text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Click on any plan to unlock</h3>
            <p className="text-gray-400">Submit your details to view all floor plans</p>
          </div>
        ) : (
          <>
            {isUnlocked && (
              <div className="mb-8 bg-green-900/30 border border-green-500 text-green-400 p-4 rounded-lg flex items-center gap-3 max-w-2xl mx-auto">
                <FaCheckCircle className="text-2xl" />
                <div>
                  <p className="font-bold">Floor Plans Unlocked!</p>
                  <p className="text-sm">Check WhatsApp for more details.</p>
                </div>
              </div>
            )}

            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`transition-all duration-500 ${
                  activeTab === plan.id ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-darkGray p-8 rounded-2xl border border-secondary/30">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                      <Image
                        src={plan.image}
                        alt={plan.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="text-3xl font-bold text-gold mb-4">{plan.name}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{plan.description}</p>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-between py-3 border-b border-gray-700">
                          <span className="text-gray-400">Type:</span>
                          <span className="font-semibold text-secondary">{plan.name}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-700">
                          <span className="text-gray-400">Status:</span>
                          <span className="font-semibold text-accent">Available</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn-primary flex items-center justify-center space-x-2">
                          <FaDownload />
                          <span>Download Plan</span>
                        </button>
                        <a href="tel:+917678620823" className="btn-secondary">
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default FloorPlans
