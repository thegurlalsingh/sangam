import React from 'react';

const AboutUs = () => {
  return (
    <section className="w-full bg-[#F9E9D6] text-[#A03232] pt-32 md:pt-40 pb-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">

        {/* First block: NSS Bennett */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo – left on desktop, full-width above text on mobile */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#A03232]/30 order-1 md:order-none">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Five_Feet_Apart_%282019_poster%29.png/250px-Five_Feet_Apart_%282019_poster%29.png"
              alt="NSS Bennett Team / Activity"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F9E9D6]/60 to-transparent" />
          </div>

          {/* Text content */}
          <div className="order-2 md:order-none">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left tracking-tight mb-8 md:mb-10">
              About <span className="text-[#A03232]">NSS Bennett</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left text-black">
              Bennett University is a leading private institution located in Greater Noida, established with the vision of redefining higher education in India. Backed by the Times Group, the university combines academic excellence with industry exposure, offering programs in engineering, management, law, media, and liberal arts. With state-of-the-art infrastructure, global collaborations, and a strong focus on research and innovation, Bennett University fosters a culture of critical thinking, creativity, and entrepreneurship. Its industry-driven curriculum, experienced faculty, and vibrant campus life empower students to develop practical skills, leadership qualities, and a global perspective, preparing them to excel in an ever-evolving world.
            </p>
          </div>
        </div>

        {/* Second block: Sangam */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content – comes first on mobile */}
          <div className="order-2 md:order-none">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left tracking-tight mb-8 md:mb-10">
              About <span className="text-[#A03232]">Sangam</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left text-black">
              Sangam is the flagship cultural fest of Bennett University, bringing together creativity, talent, and energy from across the nation. It is a celebration of art, music, dance, drama, fashion, literature, and technology, providing a platform for students to showcase their skills and passion. With exciting events, celebrity performances, workshops, competitions, and a vibrant atmosphere, Sangam promises an unforgettable experience filled with joy, inspiration, and memories.
            </p>
          </div>

          {/* Photo – right on desktop, below text on mobile */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#A03232]/40 order-1 md:order-none">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80"
              alt="Sangam Fest / Cultural Event"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F9E9D6]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;