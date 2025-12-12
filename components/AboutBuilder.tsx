'use client'

import { FaAward, FaBuilding, FaClock, FaUsers } from 'react-icons/fa'

const AboutBuilder = () => {
  const stats = [
    { icon: <FaBuilding />, number: '50+', label: 'Projects Completed' },
    { icon: <FaClock />, number: '40+', label: 'Years of Excellence' },
    { icon: <FaUsers />, number: '10,000+', label: 'Happy Families' },
    { icon: <FaAward />, number: 'ISO', label: 'Certified Company' }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">About Builder</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">Building Dreams Since 1982</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">Supreme Universal</h3>
              <p className="text-white/90 leading-relaxed">
                Established in 1982, Supreme Universal is a well-known real estate developer 
                with a strong presence in Mumbai and Pune. As an ISO certified company, 
                we have built our reputation on trust, integrity, and innovation.
              </p>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                At Supreme Universal, we believe in creating spaces, communities, and experiences 
                that are built with trust, integrity, and innovation. With a passion for 
                delivering excellence, we redefine new standards of living.
              </p>
              <p>
                Our tryst for perfection reflects in every creation and smiles of our customers. 
                Driven by an unwavering commitment to time-bound delivery and time-tested 
                innovations, we have created enduring landmarks that have lived up to global benchmarks.
              </p>
              <p className="font-semibold text-secondary text-lg">
                Fulfilled dreams, Fuller hearts.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="btn-primary">
                Talk to Expert
              </a>
              <a href="#price" className="btn-secondary">
                View Projects
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-darkGray p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <div className="text-5xl text-secondary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-gray-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-16 bg-darkGray rounded-2xl p-8 border border-secondary/30">
          <h3 className="text-2xl font-bold text-gold text-center mb-8">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-white">RB</span>
              </div>
              <h4 className="text-xl font-bold text-gold mb-1">Ramesh Bijlani</h4>
              <p className="text-gray-400">Chairman</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-white">VJ</span>
              </div>
              <h4 className="text-xl font-bold text-gold mb-1">Vishal Jumani</h4>
              <p className="text-gray-400">Director</p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <div className="bg-darkGray p-8 rounded-2xl shadow-lg border-t-4 border-secondary">
            <h3 className="text-2xl font-bold text-gold mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Redefining the skylines across Mumbai and Pune, our vision of shaping a future 
              where people thrive in inspiring and sustainable environments is coming alive – 
              one square feet at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBuilder
