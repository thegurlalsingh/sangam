import React from 'react';
import PersonCard from './PersonCard.jsx';

// Example sponsor data – replace with real sponsors
const sponsors = [
  {
    image: "https://images.unsplash.com/photo-1599305445671-fbf0e62d7f3a?w=800",
    name: "TechCorp India",
    description: "Leading technology partner supporting innovation and education initiatives."
  },
  {
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
    name: "EduFuture Foundation",
    description: "Non-profit organization dedicated to empowering students through scholarships and mentorship."
  },
  // add more...
];

const Sponsors = () => {
  return (
    <section className="w-full min-h-screen bg-[#F9E9D6] text-[#A03232] pt-32 md:pt-40 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Our <span className="text-[#A03232]">Sponsors</span>
          </h1>
          <p className="text-xl md:text-2xl text-black mt-4 max-w-3xl mx-auto">
            Partners who make Sangam possible
          </p>
        </div>

        {/* Grid of cards – same reusable component */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {sponsors.map((sponsor, index) => (
            <PersonCard
              key={index}
              image={sponsor.image}
              name={sponsor.name}
              description={sponsor.description}
              // no role for sponsors – it will be hidden automatically
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;