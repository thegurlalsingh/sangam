import React, { useEffect, useState } from 'react';
import './App.css';
import Preloader from './PreLoader.jsx';
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
    }, 7000); // or trigger this from Preloader's onComplete

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-y-auto relative">
      {/* Preloader – full screen while loading */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <Preloader />
        </div>
      )}

      {/* Main content – only shown after preloader */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Navbar only appears after preloader finishes */}
        {isLoaded && <Navbar />}

        {/* Page routes */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<EventDetails />} />
          <Route path="/contact" element={<Contact />} />

          {/* Optional 404 */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center text-6xl">
              404 - Page Not Found
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default App;