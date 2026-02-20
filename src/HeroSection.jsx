import React, { useEffect, useRef } from 'react';
import image from "../public/sangam_maroon.png";
import gsap from 'gsap';
import chakra from '../public/chakra.png'

const HeroSection = () => {
  const typingRef = useRef(null);
  const chakraRef = useRef(null);
  const hasTyped = useRef(false); // ← false initially

  useEffect(() => {
    
    // Prevent double execution in Strict Mode
    if (hasTyped.current) return;
    hasTyped.current = true;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Optional: image animation (if you want)
    tl.fromTo(
      typingRef.current.parentElement, // or image ref if you add one
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5 }
    );

    // Typing logic
    const text = "Many Paths. One Purpose";
    let index = 0;

    const type = () => {
      if (index < text.length) {
        if (typingRef.current) {
          typingRef.current.textContent += text[index];
        }
        index++;
        setTimeout(type, 80); // ← typing speed (80ms = natural pace)
      } else {
        // Blinking cursor after typing finishes
        if (typingRef.current) {
          typingRef.current.innerHTML += '<span class="animate-blink"></span>';
        }
      }
    };

    // Start typing after a small delay
    setTimeout(type, 1200);

    if(chakraRef.current){
      gsap.to(chakraRef.current, {
        rotation: 360,
        duration: 40, 
        repeat: -1, 
        ease: "none",
      });

      // gsap.to(chakraRef.current, {
      //   y: 30, 
      //   duration: 8,
      //   yoyo: true,
      //   repeat: -1,
      //   ease: "sine.inOut",
      // });
    }
    
  }, []);

  return (
    <section className="relative min-h-screen pt-32 flex items-center justify-center bg-[#F9E9D6] overflow-hidden">
      {/* Background overlay – adjusted to match new background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9E9D6]/40 via-[#F9E9D6]/10 to-[#F9E9D6]/70" />

      {/* Perfect Center Container */}
      {/* Center Wrapper */}
      <div className="relative flex items-center justify-center w-[80%] h-full">

        {/* Center Group Container */}
        <div className="relative w-[90vw] max-w-[900px] aspect-square flex items-center justify-center">

          {/* Chakra */}
          <img
            ref={chakraRef}
            src={chakra}
            alt="chakra"
            className='absolute w-full h-full object-contain opacity-30'
          />

          {/* Sangam Logo */}
          <img
            src={image}
            alt="Sangam Logo"
            className="relative w-[85%] h-[85%] object-contain z-10"
          />

        </div>

      </div>

      {/* Typing Text */}
      <div className="absolute bottom-24 text-center px-6 z-20">
        <p
          ref={typingRef}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-[#A03232]"
          style={{ minHeight: "1.5em" }}
        />
      </div>

    </section>
  );
};

export default HeroSection;