import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const strip1Ref = useRef(null);
  const strip2Ref = useRef(null);
  const timerWrapperRef = useRef(null);
  const revealerContainerRef = useRef(null);
  const revealerSVGRef1 = useRef(null);
  const revealerSVGRef2 = useRef(null);
  const revealerSVGRef3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const windowWidth = window.innerWidth;
      const wrapperWidth = 380;
      const centerPosition = (windowWidth - wrapperWidth) / 2;
      const rightExit = windowWidth;

      // Start strips fully left
      gsap.set([strip1Ref.current, strip2Ref.current], { x: -1080 });

      // Start timer wrapper off-screen left
      gsap.set(timerWrapperRef.current, { x: -wrapperWidth });

      // Start revealers completely invisible and scaled down
      gsap.set(revealerContainerRef.current, { opacity: 0, scale: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
      });

      // 1. Move timer to center
      tl.to(timerWrapperRef.current, {
        x: centerPosition,
        duration: 1,
      });

      // 2. Digit counting while centered
      for (let i = 1; i <= 6; i++) {
        const xPosition = -1080 + i * 180;

        tl.to([strip1Ref.current, strip2Ref.current], {
          x: xPosition,
          duration: 0.6,
        });
      }

      // 3. After countdown ends → revealers appear
      tl.add(() => {
        // Show revealer container
        gsap.to(revealerContainerRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
        });

        // Start revealer animations one by one
        const delays = [0, 0.6, 1.2]; // relative delays after reveal container appears

        [revealerSVGRef1, revealerSVGRef2, revealerSVGRef3].forEach((ref, i) => {
          if (!ref.current) return;

          gsap.to(ref.current, {
            scale: 45,
            rotation: i % 2 === 0 ? 360 : -360,
            duration: 1.5,
            ease: "power4.inOut",
            delay: delays[i],
            onComplete: () => {
              // Hide revealer-2 (green) after the last one finishes
              if (i === 2) {
                gsap.to(revealerSVGRef2.current, {
                  opacity: 0,
                  scale: 0,
                  duration: 0.8,
                  ease: "power2.in",
                });
              }
            },
          });
        });
      }, "after-countdown");

      // 4. Exit timer to right (runs in parallel with revealers)
      tl.to(timerWrapperRef.current, {
        x: rightExit,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden relative">
      {/* MOVING TIMER WRAPPER */}
      <div
        ref={timerWrapperRef}
        className="fixed top-1/2 -translate-y-1/2 flex gap-[20px] will-change-transform"
      >
        {/* Strip 1 */}
        <div className="relative w-[180px] h-[360px] overflow-hidden">
          <div ref={strip1Ref} className="relative w-[1080px] h-[360px] flex">
            {["9", "8", "7", "4", "2", "0"].map((num, i) => (
              <div key={i} className="relative w-[180px] h-[360px]">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-light leading-none">
                  {num}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Strip 2 */}
        <div className="relative w-[180px] h-[360px] overflow-hidden">
          <div ref={strip2Ref} className="relative w-[1080px] h-[360px] flex">
            {["9", "5", "9", "7", "4", "0"].map((num, i) => (
              <div key={i} className="relative w-[180px] h-[360px]">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-light leading-none">
                  {num}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revealer container – fixed in center, starts hidden */}
      <div
        ref={revealerContainerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
      >
        <svg
          ref={revealerSVGRef1}
          width="151"
          height="148"
          viewBox="0 0 151 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M75.9817 0 L77.25 34.2209 C78.0259 55.1571 94.8249 71.9475 115.762 72.7127 L150.982 74 L115.762 75.2873 C94.8249 76.0525 78.0259 92.8429 77.25 113.779 L75.9817 148 L74.7134 113.779 C73.9375 92.8429 57.1385 76.0525 36.2019 75.2873 L0.981689 74 L36.2018 72.7127 C57.1384 71.9475 73.9375 55.1571 74.7134 34.2209 L75.9817 0 Z"
            fill="white"
          />
        </svg>

        <svg
          ref={revealerSVGRef2}
          width="151"
          height="148"
          viewBox="0 0 151 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M75.9817 0 L77.25 34.2209 C78.0259 55.1571 94.8249 71.9475 115.762 72.7127 L150.982 74 L115.762 75.2873 C94.8249 76.0525 78.0259 92.8429 77.25 113.779 L75.9817 148 L74.7134 113.779 C73.9375 92.8429 57.1385 76.0525 36.2019 75.2873 L0.981689 74 L36.2018 72.7127 C57.1384 71.9475 73.9375 55.1571 74.7134 34.2209 L75.9817 0 Z"
            fill="red"
          />
        </svg>

        <svg
          ref={revealerSVGRef3}
          width="151"
          height="148"
          viewBox="0 0 151 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M75.9817 0 L77.25 34.2209 C78.0259 55.1571 94.8249 71.9475 115.762 72.7127 L150.982 74 L115.762 75.2873 C94.8249 76.0525 78.0259 92.8429 77.25 113.779 L75.9817 148 L74.7134 113.779 C73.9375 92.8429 57.1385 76.0525 36.2019 75.2873 L0.981689 74 L36.2018 72.7127 C57.1384 71.9475 73.9375 55.1571 74.7134 34.2209 L75.9817 0 Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;