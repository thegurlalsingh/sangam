import React, { useEffect, useState } from 'react';
import './App.css';
import Preloader from './Preloader.jsx';
import Navbar from './Navbar.jsx';
import HeroSection from './HeroSection.jsx';
import AboutUs from './AboutUs.jsx';
import EventDetails from './EventDetails.jsx';
import Contact from './Contact.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 7000); // Adjust time or trigger from Preloader's onComplete

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F9E9D6] text-[#A03232] overflow-y-auto relative">
      {/* Preloader – covers everything while loading */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F9E9D6]">
          <Preloader />
        </div>
      )}

      {/* Main content – fade in only after preloader */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Navbar appears only after preloader finishes */}
        {isLoaded && <Navbar />}

        {/* All routes */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<EventDetails />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 fallback */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center text-6xl font-bold text-[#A03232]">
              404 - Page Not Found
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default App;