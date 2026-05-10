import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrollState, setScrollState] = useState(isHomePage ? "top" : "sticky");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isHomePage) {
        // Home page scroll behavior
        if (currentScrollY < 50) {
          setScrollState("top");
        } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setScrollState("hidden");
        } else {
          setScrollState("sticky");
        }
      } else {
        // Other pages always sticky
        setScrollState("sticky");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHomePage]);

  // Dynamic Classes
  const navBaseClasses = "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-4 py-3 md:px-8 lg:px-12 lg:py-4 flex items-center justify-between";
  
  const stateClasses = {
    top: "bg-transparent text-white border-transparent",
    sticky: "bg-white text-black shadow-md translate-y-0 border-b border-gray-100",
    hidden: "bg-white text-black -translate-y-full"
  };

  return (
    <nav className={`${navBaseClasses} ${stateClasses[scrollState]}`}>
      {/* Left Section: Logo & Trustpilot */}
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
          <img 
            src={logo}
            alt="Luxora Logo" 
            className={`h-8 md:h-10 transition-filter duration-300 ${scrollState === 'top' ? 'brightness-0 invert' : 'brightness-0'}`}
          />
        </Link>

        {/* Vertical Divider */}
        <div className={`hidden md:block h-8 w-[1.5px] flex-shrink-0 ${scrollState === 'top' ? 'bg-white/40' : 'bg-gray-300'}`} />

        {/* Trustpilot Placeholder */}
        <div className="hidden md:flex flex-col text-[10px] leading-tight">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-green-500 text-sm">★</span>
            <span className="font-semibold text-xs">Trustpilot</span>
          </div>
          <div className="flex gap-0.5 my-1">
             {[...Array(5)].map((_, i) => (
               <span key={i} className="text-green-500 text-xs">★</span>
             ))}
          </div>
          <p className="opacity-80 text-xs">TrustScore 4.6</p>
        </div>
      </div>

      {/* Right Section: Navigation Links */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="lg:hidden inline-flex items-center justify-center rounded-md p-2"
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
        </svg>
      </button>

      <div className="hidden lg:flex items-center gap-8 font-medium text-[15px]">
        <Link to="/hospitals" className="hover:opacity-70 transition-opacity whitespace-nowrap">Hospitals</Link>
        <Link to="/doctors" className="hover:opacity-70 transition-opacity whitespace-nowrap">Doctors</Link>
        <Link to="/experiences" className="hover:opacity-70 transition-opacity whitespace-nowrap">Experiences</Link>
        <Link to="/specialties" className="hover:opacity-70 transition-opacity whitespace-nowrap">Specialties</Link>
        
        {/* Dropdown Link */}
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            Explore
            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className={`absolute top-full mt-2 w-40 rounded-lg shadow-lg py-2 z-50 ${
              scrollState === 'top' 
                ? 'bg-gray-800 text-white' 
                : 'bg-white text-gray-900 border border-gray-200'
            }`}>
              <Link to="/about" onClick={() => setIsDropdownOpen(false)} className={`block px-4 py-2 transition ${
                scrollState === 'top' 
                  ? 'hover:bg-gray-700' 
                  : 'hover:bg-gray-100'
              }`}>About Us</Link>
              <Link to="/experiences" onClick={() => setIsDropdownOpen(false)} className={`block px-4 py-2 transition ${
                scrollState === 'top' 
                  ? 'hover:bg-gray-700' 
                  : 'hover:bg-gray-100'
              }`}>Blogs</Link>
              <Link to="/testimonials" onClick={() => setIsDropdownOpen(false)} className={`block px-4 py-2 transition ${
                scrollState === 'top' 
                  ? 'hover:bg-gray-700' 
                  : 'hover:bg-gray-100'
              }`}>News</Link>
              <Link to="/testimonials" onClick={() => setIsDropdownOpen(false)} className={`block px-4 py-2 transition ${
                scrollState === 'top' 
                  ? 'hover:bg-gray-700' 
                  : 'hover:bg-gray-100'
              }`}>Testimonials</Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="hover:opacity-70 transition-opacity whitespace-nowrap">Contact Us</Link>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-gray-200 bg-white text-gray-900 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-sm font-medium">
            <Link to="/hospitals" onClick={() => setIsMobileMenuOpen(false)} className="rounded px-3 py-2 hover:bg-gray-100">Hospitals</Link>
            <Link to="/doctors" onClick={() => setIsMobileMenuOpen(false)} className="rounded px-3 py-2 hover:bg-gray-100">Doctors</Link>
            <Link to="/experiences" onClick={() => setIsMobileMenuOpen(false)} className="rounded px-3 py-2 hover:bg-gray-100">Experiences</Link>
            <Link to="/specialties" onClick={() => setIsMobileMenuOpen(false)} className="rounded px-3 py-2 hover:bg-gray-100">Specialties</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="rounded px-3 py-2 hover:bg-gray-100">About Us</Link>
            <Link to="/testimonials" onClick={() => setIsMobileMenuOpen(false)} className="rounded px-3 py-2 hover:bg-gray-100">Testimonials</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="rounded px-3 py-2 hover:bg-gray-100">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;