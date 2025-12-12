'use client'

import { FaWhatsapp, FaPhone } from 'react-icons/fa'

const FloatingButtons = () => {
  const whatsappNumber = '917678620823'
  const whatsappMessage = encodeURIComponent(
    'Hello, I am interested in Supreme Villagio. Please provide more details.'
  )

  return (
    <>
      {/* WhatsApp Button - Bottom Left (matching reference) */}
      <a
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Call Button - Bottom Right (matching reference) */}
      <a
        href="tel:+917678620823"
        className="fixed bottom-6 right-6 z-50 bg-white hover:bg-gray-100 text-gray-800 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200"
        aria-label="Call us"
      >
        <FaPhone className="text-2xl" />
      </a>
    </>
  )
}

export default FloatingButtons
