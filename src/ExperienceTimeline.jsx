import React, { useEffect, useRef, useState } from 'react';
import { FaRegCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const timelineData = [
  {
    id: 1,
    title: "Project Inception",
    description: "Initial planning and team formation for the new venture",
    date: "January 2024",
    category: "Planning",
    redirectTo: "/projects/inception"
  },
  {
    id: 2,
    title: "Design Phase",
    description: "Creating wireframes and establishing design system",
    date: "February 2024",
    category: "Design",
    redirectTo: "/projects/design"
  },
  {
    id: 3,
    title: "Development Sprint",
    description: "Core features implementation and testing phase",
    date: "March 2024",
    category: "Development",
    redirectTo: "/projects/development"
  },
  {
    id: 4,
    title: "Beta Launch",
    description: "Initial release to selected user group for feedback",
    date: "April 2024",
    category: "Launch",
    redirectTo: "/projects/beta"
  },
  {
    id: 5,
    title: "Public Release",
    description: "Official launch and marketing campaign kickoff",
    date: "May 2024",
    category: "Release",
    redirectTo: "/projects/release"
  }
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
      <div className={`flex-1 bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-[#A03232]/40 
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
          <button className='border border-[#A03232] px-4 py-2 rounded-md hover:bg-[#A03232] hover:text-white transition-colors duration-300'>
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

const VerticalTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRefs = useRef(new Map());

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        setVisibleItems(prev => {
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
      rootMargin: "-10% 0px -10% 0px"
    });

    timelineData.forEach(item => {
      const ref = observerRefs.current.get(item.id);
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F9E9D6] py-12 md:py-16" role="region" aria-label="Timeline">
      {/* Centered Contact Us Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#A03232]">
          Contact <span className="text-[#A03232]">Us</span>
        </h1>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        {timelineData.map(item => (
          <div
            key={item.id}
            ref={ref => {
              if (ref) observerRefs.current.set(item.id, ref);
            }}
            data-id={item.id}
            className="mb-12 last:mb-0"
          >
            <TimelineItem
              item={item}
              isVisible={visibleItems.has(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;