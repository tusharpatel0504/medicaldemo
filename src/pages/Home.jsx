import React from 'react';
import HeroSection from '../componenets/HeroSection';
import SearchBar from '../componenets/SearchBar';
import PartnersSection from '../componenets/PartnersSection';
import SpecialitiesSection from '../componenets/SpecialitiesSection';
import GlobalHealthcareSection from '../componenets/GlobalHealthcareSection';
import PublicationsSection from '../componenets/PublicationsSection';
import FeatureSection from '../componenets/FeatureSection';
import HospitalCard from '../componenets/HospitalCard';
import DoctorCard from '../componenets/DoctorCard';
import TestimonialSection from '../componenets/TestimonialSection';
import PricingSection from '../componenets/PricingSection';
import Nextpartner from '../componenets/Nextpartner';
import LuxoraLanding from '../componenets/LuxoraLanding';

const Home = () => {
  const features = [
    { icon: '🏥', title: 'Find Hospitals', description: 'Discover top-rated hospitals near you' },
    { icon: '👨‍⚕️', title: 'Expert Doctors', description: 'Connect with qualified healthcare professionals' },
    { icon: '⭐', title: 'Trusted Reviews', description: 'Read genuine experiences from other patients' },
  ];

  const dummyHospitals = [
    { name: 'City Medical Center', location: 'New York', rating: 4.8, specialties: ['Emergency', 'Surgery', 'Cardiology'] },
    { name: 'St. Hope Hospital', location: 'Los Angeles', rating: 4.6, specialties: ['Pediatrics', 'Orthopedics'] },
    { name: 'Wellness Clinic', location: 'Chicago', rating: 4.9, specialties: ['General Care', 'Neurology'] },
  ];

  const dummyDoctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', rating: 4.9, experience: 15, available: true },
    { name: 'Dr. Michael Chen', specialty: 'Surgeon', rating: 4.7, experience: 12, available: true },
    { name: 'Dr. Emily Rodriguez', specialty: 'Pediatrician', rating: 4.8, experience: 10, available: false },
  ];

  return (
    <div>
      <HeroSection 
        smallIntro="Choosing the right doctor, hospital, or treatment alone is overwhelming."
        title={`Get expert-backed clarity and confidence for\nevery medical decision at no cost to you.`}
        subtitle={null}
        features={["Hospital & Surgeon Matching","Transparent Treatment Options","Unmatched Pricing","Real Human Assistance"]}
        videoSrc="https://luxora-website.s3.ap-south-1.amazonaws.com/homepage/home+page+video+(2).mp4"
        primaryCta={{ text: 'Get Started', href: '#' }}
        secondaryCta={{ text: 'Book Consultation', href: '#'}}
      />

      {/* Partners Section (below hero) */}
      <PartnersSection />

      <SpecialitiesSection />

      <GlobalHealthcareSection />

      <PublicationsSection />

      <Nextpartner />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialSection />
      
      <LuxoraLanding/>
      

      {/* CTA Section */}
      

    </div>
  );
};

export default Home;
