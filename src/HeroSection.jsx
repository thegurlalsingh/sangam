import React, { useEffect, useRef } from 'react';
import image from "../public/image.png";
import gsap from 'gsap';

const HeroSection = () => {
  const typingRef = useRef(null);
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

    // Cleanup (optional but good)
    
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-20 md:pt-0">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

      {/* Image container – centered and constrained */}
      <div className="relative mb-12 w-full max-w-5xl px-6 md:px-0">
        <img
          src={image}
          alt="Hero visual"
          className="w-full h-auto rounded-2xl object-cover transition-all duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Typing text – placed cleanly below image */}
      <div className="relative text-center px-6">
        <p
          ref={typingRef}
          className="text-3xl md:text-4xl lg:text-3xl font-extrabold tracking-wide"
          style={{ minHeight: "1.5em" }} // prevents layout jump
        />
      </div>
    </section>
  );
};

export default HeroSection;