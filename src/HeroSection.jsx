import React, { useEffect, useRef } from 'react';
import image from "../public/Sangam_Full_HD_Without_BG.png";
import gsap from 'gsap';
import chakra from '../public/chakra.png';

const HeroSection = () => {
  const typingRef = useRef(null);
  const chakraRef = useRef(null);
  const hasTyped = useRef(false);

  useEffect(() => {
    if (hasTyped.current) return;
    hasTyped.current = true;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      typingRef.current?.parentElement,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5 }
    );

    const text = "Many Paths. One Purpose";
    let index = 0;

    const type = () => {
      if (index < text.length) {
        if (typingRef.current) {
          typingRef.current.textContent += text[index];
        }
        index++;
        setTimeout(type, 80);
      } else {
        if (typingRef.current) {
          typingRef.current.innerHTML += '<span class="animate-blink"></span>';
        }
      }
    };

    setTimeout(type, 1200);

    if (chakraRef.current) {
      gsap.to(chakraRef.current, {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <section
      className="
        relative 
        h-screen 
        min-h-0 
        max-h-screen 
        flex flex-col items-center justify-center 
        bg-[#F9E9D6] 
        overflow-hidden 
        snap-start
      "
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9E9D6]/40 via-[#F9E9D6]/10 to-[#F9E9D6]/70 pointer-events-none" />

      {/* Main content - centered vertically & horizontally */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-4 sm:px-6">
        {/* Logo + chakra group */}
        <div className="relative w-full max-w-[360px] xs:max-w-[400px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] aspect-square flex items-center justify-center -mt-8 sm:-mt-12 md:-mt-16">
          <img
            ref={chakraRef}
            src={chakra}
            alt="chakra"
            className="absolute inset-0 w-full h-full object-contain opacity-30"
          />
          <img
            src={image}
            alt="Sangam Logo"
            className="relative w-[80%] h-[80%] object-contain z-10"
          />
        </div>

        {/* Tagline - closer to logo on mobile */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <p
            ref={typingRef}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-[#A03232]"
            style={{ minHeight: "1.4em" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;