import React, { useEffect, useRef, useState } from 'react';
import { FaRegCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const timelineData = [
  {
    id: 1,
    title: "Tech for tommorow",
    description:
      "The Hackathon is a 24-hour coding marathon that begins at noon on March 28 and runs until 6 AM on March 29. Teams of two to four members will work intensively to solve real-world problems through technology and innovation. With a prize pool of ₹50,000, the Hackathon is designed to test endurance, creativity, and technical skill, making it one of the most exciting and challenging events of Sangam.",
    date: "28th March 2026",
    category: "Tech",
    redirectTo: "https://unstop.com/p/tech-for-tommrow-sangam-bennett-university-bu-greater-noida-1648992",
  },
  {
    id: 2,
    title: "MindShift",
    description:
      "The Ideathon, titled Mindshift, is a platform for students to brainstorm and pitch innovative ideas. Scheduled from 12 PM to 3 PM on March 28th, it encourages teams of two to four members to think critically and creatively about solutions to pressing issues. With a prize pool of ₹10,000, the Ideathon rewards originality, clarity of thought, and the ability to present ideas effectively.",
    date: "28th March 2026",
    category: "Design",
    redirectTo: "https://unstop.com/competitions/mind-shift-sangam-bennett-university-bu-greater-noida-1649839",
  },
];

const TimelineItem = React.memo(({ item, isVisible }) => {
  return (
    <div
      className={`flex items-start gap-6 transition-all duration-500 ${isVisible ? "scale-105 opacity-100" : "scale-100 opacity-70"}`}
      role="listitem"
      aria-label={`Timeline item: ${item.title}`}
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center relative mt-2">
        <div className="relative z-10 bg-white rounded-full p-1 shadow-md">
          <FaRegCircle className="text-[#A03232] text-2xl" />
        </div>
        {/* Vertical line (except last item) */}
        {item.id !== timelineData.length && (
          <div className="absolute top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#A03232]/50 to-transparent" />
        )}
      </div>

      {/* Card with border box */}
      <div
        className={`flex-1 bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-[#A03232]/40 
          shadow-md hover:shadow-lg hover:border-[#A03232]/70 transition-all duration-300 
          ${isVisible ? "bg-opacity-100" : "bg-opacity-90"}`}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl md:text-2xl font-bold text-[#A03232]">{item.title}</h3>
          <span className="text-black text-sm font-medium">{item.date}</span>
        </div>

        <p className="text-black mb-4">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="inline-block bg-[#F9E9D6] text-[#A03232] text-sm py-1 px-3 rounded-full border border-[#A03232]/30">
            {item.category}
          </span>

          {/* Button to redirect */}
          <button className="border border-[#A03232] px-4 py-2 rounded-md hover:bg-[#A03232] hover:text-white transition-colors duration-300">
            <Link
              to={item.redirectTo}
              className="text-[#A03232] hover:text-white text-sm font-medium transition-colors duration-300"
            >
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
});

const VerticalTimelineDay1 = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRefs = useRef(new Map());

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setVisibleItems((prev) => {
          const newSet = new Set(prev);
          if (entry.isIntersecting) {
            newSet.add(entry.target.dataset.id);
          } else {
            newSet.delete(entry.target.dataset.id);
          }
          return newSet;
        });
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.4,
      rootMargin: "-10% 0px -10% 0px",
    });

    timelineData.forEach((item) => {
      const ref = observerRefs.current.get(item.id);
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F9E9D6]" role="region" aria-label="Timeline">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#A03232]">
          Day <span className="text-[#A03232]">One</span>
        </h1>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        {timelineData.map((item) => (
          <div
            key={item.id}
            ref={(ref) => {
              if (ref) observerRefs.current.set(item.id, ref);
            }}
            data-id={item.id}
            className="mb-12 last:mb-0"
          >
            <TimelineItem item={item} isVisible={visibleItems.has(item.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimelineDay1;