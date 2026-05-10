import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import contactImage from '../assets/contactus.png';
import googleReviewImage from '../assets/googlereview.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: 'IN (+91)',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="font-sans">
      {/* Hero & Contact Form Section */}
      <div className="pt-20 min-h-screen bg-white">
        <div className="container mx-auto px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Image */}
            <div className="hidden lg:block">
              <img 
                src={contactImage}
                alt="Contact Us" 
                className="rounded-2xl shadow-sm w-full object-cover"
              />
            </div>

            {/* Right Form */}
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-3 text-gray-900">Let's Get In Touch</h2>
              <p className="text-gray-500 mb-8">
                Or just reach out to us manually at <a href="mailto:support@luxoraexperiences.com" className="text-blue-600 hover:underline">support@luxoraexperiences.com</a>
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />

                <div className="grid grid-cols-3 gap-4">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="px-3 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>IN (+91)</option>
                    <option>US (+1)</option>
                    <option>UK (+44)</option>
                    <option>AE (+971)</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="col-span-2 px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all transform active:scale-95"
                >
                  Reach Out
                </button>
              </form>
            </div>
          </div>

          {/* Connect With Us Section (Styled to match image_9122d9.png) */}
          <div className="bg-[#f8f9fa] py-20 px-6 md:px-12 rounded-[2.5rem] mb-20 border border-gray-100">
            <h2 className="text-3xl font-bold text-center mb-3 text-[#1a1a1a]">Connect With Us</h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto text-sm leading-relaxed">
              Get in touch with us to schedule a consultation or learn more about our services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Email Card */}
              <div className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Email</h3>
                <p className="text-center text-gray-500 text-sm font-medium">
                  support@luxoraexperiences.com
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Phone</h3>
                <div className="text-center text-gray-500 text-sm font-medium space-y-1">
                  <p>US: +1 805 900 0810</p>
                  <p>UK: +44 151 808 0884</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center transition-transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Address</h3>
                <div className="text-center text-gray-500 text-[11px] leading-relaxed font-medium space-y-4">
                  <p>
                    Head Office: OneWest, 9th Floor, Balewadi High Street, Baner, Pune, Maharashtra 411045
                  </p>
                  <p>
                    Address: At Post Jambe, Taluka Mulshi, 159/2, Sangawade Road, Pune, Maharashtra 411033
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="py-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="text-center md:border-r border-gray-200 px-4">
                <p className="text-4xl font-bold text-gray-900 mb-1">300+</p>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Hospitals</p>
              </div>
              <div className="text-center md:border-r border-gray-200 px-4">
                <p className="text-4xl font-bold text-gray-900 mb-1">7000+</p>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Doctors</p>
              </div>
              <div className="text-center md:border-r border-gray-200 px-4">
                <p className="text-4xl font-bold text-gray-900 mb-1">20+</p>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Countries</p>
              </div>
              <div className="text-center md:border-r border-gray-200 px-4">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-3xl font-bold text-gray-900">4.6</span>
                  <span className="text-xs text-gray-400 mt-2">/5</span>
                </div>
                <img src={googleReviewImage} alt="Google" className="h-6 mx-auto mb-1 opacity-80" />
                <p className="text-gray-400 text-[10px] uppercase">Reviews</p>
              </div>
              <div className="text-center px-4 col-span-2 md:col-span-1">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-green-500 text-xl">★</span>
                  <span className="text-3xl font-bold text-gray-900">4.6</span>
                </div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-green-500 text-xs">★</span>
                  ))}
                </div>
                <p className="text-gray-400 text-[10px] uppercase tracking-tighter">TrustScore 4.6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;