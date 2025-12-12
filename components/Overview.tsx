'use client'

import Image from 'next/image'

const Overview = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="relative py-16 bg-cover bg-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&q=80')`
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-block bg-secondary px-8 py-3 mb-6">
            <h3 className="text-white font-bold text-xl">NO TALL PROMISES.</h3>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            JUST THE NEXT LEVEL<br />OF HORIZONTAL LIVING.
          </h2>
        </div>
      </section>
      
      <section id="overview" className="py-24 bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              Supreme Villagio
            </h2>
            <h3 className="text-2xl text-secondary mb-6">Indulge in Nature's Serenity at Pune's Prime Spot</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The pandemic has highlighted the numerous advantages of living in a spacious, 
                well-designed villa with your family. A luxury villa or townhouse offers more 
                room, refined aesthetics, and an opportunity to embrace an elevated lifestyle.
              </p>
              <p>
                It allows you to fully enjoy the finer aspects of life while ensuring your family 
                thrives in a sophisticated environment that caters to diverse interests, hobbies, 
                and passions. In a post-pandemic world, a villa community—characterized by 
                low-density living—provides a safer, healthier space for your loved ones.
              </p>
              <p className="font-semibold text-secondary text-lg">
                Transitioning to horizontal living is more than a choice; it&apos;s a significant 
                lifestyle upgrade for you and your family.
              </p>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Schedule a Visit
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
              alt="Luxury Villa Overview"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Overview
