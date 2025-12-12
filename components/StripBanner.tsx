'use client'

import { FaStar, FaAward, FaCertificate, FaTrophy } from 'react-icons/fa'

const StripBanner = () => {
  const badges = [
    { icon: <FaStar />, text: 'ISO Certified Developer' },
    { icon: <FaAward />, text: '40+ Years of Excellence' },
    { icon: <FaCertificate />, text: 'RERA Approved' },
    { icon: <FaTrophy />, text: '10,000+ Happy Families' }
  ]

  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-primary py-6">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-white animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl animate-pulse">
                {badge.icon}
              </div>
              <span className="text-sm md:text-base font-semibold">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StripBanner
