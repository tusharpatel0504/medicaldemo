import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12 md:px-10 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 mb-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {/* Left Section - About */}
          <div className="col-span-1 text-left">
            <div className="mb-6">
              <img src={logo} alt="Luxora Logo" className="h-10 mb-4" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              We believe that in the world of medical treatments human care and touch is of the highest importance.
            </p>
            
            <div className="text-sm text-gray-300 mb-6 text-left">
              <p className="font-semibold mb-2">For Any Enquiries:</p>
              <p>US: +1 805 900 0810 |</p>
              <p>UK: +44 151 808 0884 | <a href="mailto:info@luxoraexperiences.com" className="text-cyan-400 hover:text-cyan-300">info@luxoraexperiences.com</a></p>
            </div>

            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2">
              📞 Reach us
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-cyan-400 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition">About</Link></li>
              <li><Link to="/specialties" className="text-gray-400 hover:text-cyan-400 transition">Specialties</Link></li>
              <li><Link to="/hospitals" className="text-gray-400 hover:text-cyan-400 transition">Hospitals</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-bold text-lg mb-6">Specialties</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/specialties" className="text-gray-400 hover:text-cyan-400 transition">Hair Transplant</Link></li>
              <li><Link to="/specialties" className="text-gray-400 hover:text-cyan-400 transition">Plastic Surgery</Link></li>
              <li><Link to="/specialties" className="text-gray-400 hover:text-cyan-400 transition">IVF</Link></li>
              <li><Link to="/specialties" className="text-gray-400 hover:text-cyan-400 transition">Weight Loss</Link></li>
              <li><Link to="/specialties" className="text-gray-400 hover:text-cyan-400 transition">Fertility</Link></li>
            </ul>
          </div>

          {/* Hospitals */}
          <div>
            <h4 className="font-bold text-lg mb-6">Hospitals</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/hospitals" className="text-gray-400 hover:text-cyan-400 transition">Apollo Hospital</Link></li>
              <li><Link to="/hospitals" className="text-gray-400 hover:text-cyan-400 transition">Memorial</Link></li>
              <li><Link to="/hospitals" className="text-gray-400 hover:text-cyan-400 transition">VG Plastic Surgery</Link></li>
              <li><Link to="/hospitals" className="text-gray-400 hover:text-cyan-400 transition">JK Plastic Surgery</Link></li>
              <li><Link to="/hospitals" className="text-gray-400 hover:text-cyan-400 transition">Medical Park Florya</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 text-center md:flex-row md:justify-between md:items-center text-sm text-gray-400">
          <p>&copy; 2025 Luxora Experiences Pvt. Ltd. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-of-service" className="hover:text-cyan-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
