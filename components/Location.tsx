'use client'

import { FaMapMarkerAlt, FaClock, FaSchool, FaHospital, FaShoppingCart, FaUniversity } from 'react-icons/fa'

const Location = () => {
  const landmarks = [
    { name: 'High Vision International School', time: '5 Mins', icon: <FaSchool /> },
    { name: 'Pioneer Hospital', time: '7 Mins', icon: <FaHospital /> },
    { name: 'MCA Stadium', time: '8 Mins', icon: <FaMapMarkerAlt /> },
    { name: 'Symbiosis University', time: '13 Mins', icon: <FaUniversity /> },
    { name: 'Vision One Mall', time: '15 Mins', icon: <FaShoppingCart /> },
    { name: 'Xion Mall', time: '22 Mins', icon: <FaShoppingCart /> },
    { name: 'Hinjawadi IT Park', time: '25 Mins', icon: <FaMapMarkerAlt /> },
    { name: 'Proposed EON & WTC Tathawade', time: '28 Mins', icon: <FaMapMarkerAlt /> }
  ]

  return (
    <section id="location" className="py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary px-6 py-2 rounded-full mb-4">
            <p className="text-black font-bold text-sm">WELL CONNECTED</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Location Advantages</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Landmarks List */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            {landmarks.map((landmark, index) => (
              <div
                key={index}
                className="bg-darkGray p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl hover:scale-100 sm:hover:scale-105 transition-all duration-300 flex items-center justify-between shadow-md lg:shadow-lg"
              >
                <div className="flex items-center space-x-2 sm:space-x-4 flex-1">
                  <div className="text-2xl sm:text-3xl text-secondary">{landmark.icon}</div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs sm:text-base lg:text-lg truncate">{landmark.name}</h3>
                  </div>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 text-accent text-xs sm:text-base ml-2">
                  <FaClock className="text-xs sm:text-base" />
                  <span className="font-bold">{landmark.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map - Somatane, Pune */}
          <div className="relative h-64 sm:h-96 lg:h-[600px] rounded-lg sm:rounded-2xl overflow-hidden shadow-lg lg:shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15118.757844394847!2d73.68076971562498!3d18.65849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b10d0dc6e7c1%3A0x3e8a89e6e4a08e2c!2sSomatane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1702300000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Supreme Villagio Location - Somatane, Pune"
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Live Where Everything You Need is Within Reach
            </h3>
            <p className="max-w-3xl mx-auto mb-6 text-gray-900">
              Supreme Villagio offers the perfect balance of peaceful living and urban convenience. 
              With schools, hospitals, shopping centers, and IT hubs nearby, your daily commute and 
              lifestyle needs are effortlessly managed.
            </p>
            <a href="tel:+917678620823" className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-bold inline-block transition-all duration-300">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
