'use client'

import { FaCheckCircle, FaTree, FaBuilding, FaRoad, FaLeaf, FaMapMarkedAlt, FaDumbbell, FaUtensils } from 'react-icons/fa'

const Highlights = () => {
  const highlights = [
    {
      icon: <FaTree />,
      title: 'Abundant Open Space',
      description: 'Surrounded by lush greenery and open landscapes'
    },
    {
      icon: <FaBuilding />,
      title: 'A Magnificent Clubhouse',
      description: 'World-class amenities and recreational facilities'
    },
    {
      icon: <FaRoad />,
      title: 'Grand Central Boulevard',
      description: 'Wide roads and premium infrastructure'
    },
    {
      icon: <FaLeaf />,
      title: 'Sublime Natural Beauty',
      description: 'Picturesque views and serene environment'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Lush Green Locales Of Somatane',
      description: 'Premium location with natural surroundings'
    },
    {
      icon: <FaDumbbell />,
      title: 'Strategically Planned Central Amenities',
      description: 'Everything you need within reach'
    },
    {
      icon: <FaUtensils />,
      title: 'Designer Modular Kitchen',
      description: 'With Hob & Chimney included'
    },
    {
      icon: <FaBuilding />,
      title: 'Modern Architecture',
      description: 'A blend of contemporary design and minimalism'
    }
  ]

  return (
    <section id="highlights" className="py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary px-6 py-2 rounded-full mb-4">
            <p className="text-black font-bold text-sm">PROJECT SPECIFICATIONS</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Highlights</h2>
        </div>

        {/* Highlights with arrow separators - matching reference design */}
        <div className="space-y-1.5 sm:space-y-2 max-w-4xl mx-auto px-2 sm:px-0">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3 group cursor-pointer py-2 px-2 sm:px-4 hover:bg-darkGray transition-colors duration-300 rounded-lg">
              <div className="text-secondary text-lg sm:text-2xl font-bold flex-shrink-0">→</div>
              <h3 className="text-sm sm:text-lg font-semibold text-white group-hover:text-gold transition-colors duration-300">
                {highlight.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Quality Banner */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full">
            <p className="text-black font-bold text-base sm:text-xl">QUALITY THAT FITS YOUR BUDGET</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
