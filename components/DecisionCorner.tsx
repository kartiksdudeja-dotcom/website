'use client'

import { FaUserTie, FaCalendarAlt, FaLightbulb, FaHandshake } from 'react-icons/fa'

const DecisionCorner = () => {
  const services = [
    {
      icon: <FaLightbulb />,
      title: 'Looking For Lucrative Real Estate Investments?',
      subtitle: 'Just Let Us Know!',
      cta: 'Enquire Now',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <FaHandshake />,
      title: 'Let Us Serve You Beyond',
      subtitle: 'Ask An Expert',
      cta: 'Talk to Expert',
      color: 'from-secondary to-orange-600'
    },
    {
      icon: <FaUserTie />,
      title: 'Talk For Right Investment',
      subtitle: 'Professional Guidance',
      cta: 'Get Consultation',
      color: 'from-accent to-green-700'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Schedule a Site Visit',
      subtitle: 'Experience It Yourself',
      cta: 'Schedule Now',
      color: 'from-purple-500 to-purple-700'
    }
  ]

  const handleCTA = (title: string) => {
    const whatsappNumber = '917678620823'
    const message = encodeURIComponent(`Hello! I'm interested in ${title}. Please contact me.`)
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank')
  }

  return (
    <section className="py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">Decision Corner</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">Expert Assistance for Your Property Investment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg sm:rounded-2xl shadow-lg lg:shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
              
              <div className="relative p-4 sm:p-6 lg:p-8 text-white h-full flex flex-col justify-between min-h-[250px] sm:min-h-[300px]">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4">
                    {service.subtitle}
                  </p>
                </div>
                
                <button
                  onClick={() => handleCTA(service.title)}
                  className="w-full bg-white text-gray-900 py-2 sm:py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-105"
                >
                  {service.cta}
                </button>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transform group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary via-secondary to-accent p-12 rounded-3xl shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make the Right Decision?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our expert team is here to guide you through every step of your property investment journey. 
              Get personalized advice tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleCTA('Immediate Consultation')}
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Consultation Now
              </button>
              <a
                href="tel:+917678620823"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Call: +91 7678620823
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DecisionCorner
