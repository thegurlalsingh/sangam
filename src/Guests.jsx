import React from 'react'
import PersonCard from './PersonCard.jsx'

const guests = [
  {
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
    name: "Dr. Jane Cooper",
    role: "Keynote Speaker",
    description: "Renowned AI researcher and professor at MIT with 20+ years of experience in machine learning."
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    name: "Rahul Sharma",
    role: "Industry Leader",
    description: "Founder & CEO of TechNova – leading innovation in sustainable technology solutions."
  },
  // add more...
];

const Guests = () => {
  return (
    <section className="w-full min-h-screen bg-[#F9E9D6] text-[#A03232] pt-32 md:pt-40 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Our <span className="text-[#A03232]">Guests</span>
          </h1>
          <p className="text-xl md:text-2xl text-black mt-4 max-w-3xl mx-auto">
            Distinguished speakers and thought leaders joining us at Sangam
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {guests.map((person, index) => (
            <PersonCard
              key={index}
              image={person.image}
              name={person.name}
              role={person.role}
              description={person.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guests;