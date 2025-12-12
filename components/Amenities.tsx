'use client'

import { FaDumbbell, FaSwimmingPool, FaGamepad, FaYinYang, FaTheaterMasks, FaChild, FaVideo, FaTree } from 'react-icons/fa'

const Amenities = () => {
  const amenities = [
    { icon: <FaDumbbell />, name: 'Gym' },
    { icon: <FaTheaterMasks />, name: 'Mini Theatre' },
    { icon: <FaGamepad />, name: 'Indoor Games' },
    { icon: <FaSwimmingPool />, name: 'Swimming Pool' },
    { icon: <FaYinYang />, name: 'Yoga Room' },
    { icon: <FaTheaterMasks />, name: 'Club House' },
    { icon: <FaChild />, name: "Kid's Play Area" },
    { icon: <FaVideo />, name: 'CCTV' },
    { icon: <FaTree />, name: 'Landscape Garden' },
  ]

  return (
    <section id="amenities" className="py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary px-6 py-2 rounded-full mb-4">
            <p className="text-black font-bold text-sm">INTERNATIONAL STANDARD</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Amenities</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8"></p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-darkGray p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center hover:scale-110 transition-all duration-300 cursor-pointer group shadow-md lg:shadow-lg"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl text-secondary group-hover:text-gold transition-colors duration-300 mb-2 sm:mb-4">
                {amenity.icon}
              </div>
              <h3 className="font-semibold text-white text-xs sm:text-sm lg:text-base">{amenity.name}</h3>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-darkGray rounded-2xl p-8 border border-secondary/30">
            <h3 className="text-2xl font-bold text-gold mb-4">
              Experience Luxury at Its Finest
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our meticulously designed amenities ensure that every moment you spend at Supreme Villagio 
              is filled with comfort, convenience, and joy. From fitness to entertainment, we have everything 
              your family needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Amenities
