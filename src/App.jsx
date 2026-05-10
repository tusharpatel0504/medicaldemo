import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import StatsStrip from './componenets/StatsStrip'
import Home from './pages/Home'
import About from './pages/About'
import Hospitals from './pages/Hospitals'
import Doctors from './pages/Doctors'
import Experiences from './pages/Experiences'
import Specialties from './pages/Specialties'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import Policy from './pages/Policy'
import TermsOfService from './pages/TermsOfService'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <StatsStrip />
      <Footer />
    </>
  )
}

export default App