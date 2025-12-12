import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Supreme Villagio</h3>
            <p className="text-gray-400 mb-4">
              Exclusive 4 & 5 BHK Twin Villas & 4 BHK Townhouses
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors">Overview</a></li>
              <li><a href="#highlights" className="text-gray-400 hover:text-white transition-colors">Highlights</a></li>
              <li><a href="#price" className="text-gray-400 hover:text-white transition-colors">Price</a></li>
              <li><a href="#amenities" className="text-gray-400 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#floor-plan" className="text-gray-400 hover:text-white transition-colors">Floor Plans</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-secondary" />
                <a href="tel:+917678620823" className="text-gray-400 hover:text-white transition-colors">
                  +91 7678620823
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary" />
                <a href="mailto:info@supremevillagio.com" className="text-gray-400 hover:text-white transition-colors">
                  info@supremevillagio.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-secondary mt-1" />
                <span className="text-gray-400">Somatane, Pune, Maharashtra</span>
              </li>
            </ul>
          </div>

          {/* RERA Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">RERA Details</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Phase I: P52100046867</p>
              <p>Phase II: P52100049506</p>
              <p>Phase III: P52100055048</p>
              <p className="mt-4">Agent RERA: A52100027240</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Supreme Villagio. All rights reserved. | 
            <a href="#" className="hover:text-white ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-white ml-2">Terms & Conditions</a>
          </p>
          <p className="text-gray-600 text-xs text-center mt-4">
            This website is for informational purposes only. All specifications are subject to change without notice.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
