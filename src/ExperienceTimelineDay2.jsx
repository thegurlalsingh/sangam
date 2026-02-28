import React, { useEffect, useRef, useState } from 'react';
import { FaRegCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const timelineData = [
  {
    id: 1,
    title: "Kala For Cause",
    description:
      "Kala for Cause is an art competition that encourages individual participants to express social themes through creativity. Using A3 sheets and basic stationery, students will create artworks that reflect meaningful issues, blending artistry with awareness. The event highlights the power of visual expression and offers a prize pool of ₹5,000 to recognize outstanding talent.",
    date: "29th March 2026",
    category: "Cultural",
    redirectTo: "https://unstop.com/p/kala-for-cause-sangam-bennett-university-bu-greater-noida-1650249",
  },
  {
    id: 2,
    title: "VichaarVaar",
    description:
      "The Extempore competition, titled Sath ya Virodh, challenges participants to speak spontaneously either in favor of or against a given topic. With only a short preparation time, individuals must showcase their eloquence, clarity, and confidence. The event rewards quick thinking and persuasive speech, with a prize pool of ₹10,000.",
    date: "29th March 2026",
    category: "Case Competition",
    redirectTo: "https://unstop.com/competitions/vichaar-vaar-sangam-bennett-university-bu-greater-noida-1649743",
  },
  {
    id: 3,
    title: "CauseQuest",
    description:
      "The Escape Room is a thrilling team-based challenge where groups of two to four members must solve puzzles and navigate clues to “escape” within a set time. With creative décor and immersive setups, the event promises excitement and teamwork. It is designed to test problem-solving skills under pressure, making it one of the most engaging activities of all days.",
    date: "29th March 2026",
    category: "Cultural",
    redirectTo: "https://unstop.com/p/mind-shift-sangam-bennett-university-bu-greater-noida-1648989",
  },
  {
    id: 4,
    title: "Sath Ya Virodh",
    description:
      "The Debate competition takes place in the Moot Court, where teams of four members engage in structured argumentation on pressing issues. Participants must demonstrate logic, reasoning, and effective communication.",
    date: "29th March 2026",
    category: "Debate",
    redirectTo: "https://unstop.com/competitions/sath-ya-virodh-bennett-university-1649756",
  },
  {
    id: 5,
    title: "Kalakriti",
    description:
      "Talent Hunt is an open stage event that invites individuals and pairs to showcase their skills in music, dance, drama, or any other performance art. Every participant receives a certificate, ensuring recognition for their effort, while winners share a prize pool of ₹10,000. With a lively atmosphere and supportive audience, the Talent Hunt celebrates creativity and diversity.",
    date: "29th March 2026",
    category: "Cultural",
    redirectTo: "https://unstop.com/events/kalakriti-sangam-bennett-university-bu-greater-noida-1649745",
  },
  {
    id: 6,
    title: "Prerna (NSS Exclusive)",
    description:
      "Prerna is a PPT competition exclusively for NSS units, with one team per unit participating. Teams of two to five members present their ideas and projects, highlighting innovation and service. The event emphasizes academic and organizational excellence, with a prize pool of ₹6,000.",
    date: "29th March 2026",
    category: "Cultural",
    redirectTo: "https://unstop.com/events/prerna-sangam-bennett-university-bu-greater-noida-1649746",
  },
  {
    id: 7,
    title: "Samaaj Ki Awaaz",
    description:
      "Nukkad Natak brings the energy of street theatre to campus, with teams of eight to fourteen members performing plays on social issues. The event combines drama with awareness. It is a powerful medium of communication and offers a prize pool of ₹20,000 to the most impactful performances.",
    date: "29th March 2026",
    category: "Cultural",
    redirectTo: "https://unstop.com/events/samaaj-ki-awaaz-sangam-bennett-university-bu-greater-noida-1649747",
  },
  {
    id: 8,
    title: "Nazariyaa",
    description:
      "The Videography competition invites individuals to capture stories through film and creative video-making. Participants submit their work under agreed guidelines, showcasing technical skill and storytelling ability. With the entire campus as the backdrop, this event highlights visual creativity and awards a prize of ₹3,000 to the best entry.",
    date: "29th March 2026",
    category: "Cultural",
    redirectTo: "https://unstop.com/events/nazariyaa-sangam-bennett-university-bu-greater-noida-1649748",
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

const VerticalTimelineDay2 = () => {
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
      {/* Centered Contact Us Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#A03232]">
          Day <span className="text-[#A03232]">Two</span>
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

export default VerticalTimelineDay2;