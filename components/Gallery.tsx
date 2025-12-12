'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      title: 'Luxury Villa Exterior'
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      title: 'Modern Architecture'
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      title: 'Grand Entrance'
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      title: 'Spacious Interiors'
    },
    {
      src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      title: 'Premium Finishes'
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      title: 'Living Room'
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
      title: 'Master Bedroom'
    },
    {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
      title: 'Kitchen'
    }
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary px-6 py-2 rounded-full mb-4">
            <p className="text-black font-bold text-sm">BEAUTIFULLY DESIGNED</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8"></p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl hover:text-secondary transition-colors"
          >
            <FaTimes />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl hover:text-secondary transition-colors"
          >
            <FaChevronLeft />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] px-12">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              fill
              className="object-contain"
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold">
              {images[selectedImage].title}
            </p>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl hover:text-secondary transition-colors"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
