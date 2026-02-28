import React, { useEffect, useRef, useState } from 'react';
import { FaRegCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const timelineData = [
  {
    id: 1,
    title: "Bandana Block Printing",
    description:
      "The Block Printing workshop invites school students to explore their creativity with colors and patterns. It is a fun, interactive activity that sparks imagination.",
    date: "30th March",
    category: "Junior Track",
    redirectTo: "/events/",
  },
  {
    id: 2,
    title: "Hasthkala (Pottery Workshop)",
    description:
      "The Pottery workshop offer students the chance to mold clay and craft their own artistic pieces. The activity nurturs creativity and introduce students to traditional art forms.",
    date: "30th March",
    category: "Junior Track",
    redirectTo: "/events/ ",
  },
  {
    id: 3,
    title: "Interschool Quiz Competition",
    description:
      "The Interschool Quiz Competition brings together teams of five from different schools to compete in a battle of knowledge. Covering a range of topics, conducted in multiple rounds, with selected teams advancing to the next, the quiz encourages teamwork, quick thinking, and intellectual curiosity.",
    date: "30th March",
    category: "Junior Track",
    redirectTo: "/events/",
  },
  {
    id: 4,
    title: "Causequest (Escape Room - School Edition)",
    description:
      "The Escape Room challenge offers an exciting opportunity to solve puzzles and uncover clues within a set time. It is designed to test problem-solving skills, teamwork, and logical thinking in a fun and engaging environment, making it one of the most thrilling activities of the day.",
    date: "30th March",
    category: "Junior Track",
    redirectTo: "/events/",
  },
  {
    id: 5,
    title: "Kala for Cause (Painting Competition)",
    description:
      "Kala for Cause allows individual students to express themselves through art. With themes that encourage imagination and creativity, participants showcase their skills on canvas or paper.",
    date: "30th March",
    category: "Junior Track",
    redirectTo: "/events/",
  },
  {
    id: 6,
    title: "Rangoli Rush",
    description:
      "Rangoli Rush, is a vibrant team activity where groups of two to four members design colorful rangolis. Participants create intricate patterns that reflect tradition and creativity.",
    date: "30th March",
    category: "Junior Track",
    redirectTo: "/events/",
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

const VerticalTimelineDay3 = () => {
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
    <div className="min-h-screen bg-[#F9E9D6] py-12 md:py-16" role="region" aria-label="Timeline">
      {/* Centered Contact Us Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#A03232]">
          Day <span className="text-[#A03232]">Three</span>
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

export default VerticalTimelineDay3;