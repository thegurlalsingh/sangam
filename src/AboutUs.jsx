import React from 'react';
import group from "../public/AHP_9163.JPG";
import logo from "../public/Sangam_Full_HD_Without_BG.png";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#F9E9D6] text-[#A03232] pt-32 md:pt-40 pb-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">

        {/* First block: NSS Bennett */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo – left on desktop, full-width above text on mobile */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#A03232]/30 order-1 md:order-none">
            <img
              src={group}
              alt="NSS Bennett Team / Activity"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#F9E9D6]/60 to-transparent" /> */}
          </div>

          {/* Text content */}
          <div className="order-2 md:order-none">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left tracking-tight mb-8 md:mb-10">
              About <span className="text-[#A03232]">NSS Bennett</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left text-black">
              The National Service Scheme (NSS) at Bennett University is a student-driven initiative that embodies the spirit of service, responsibility, and leadership. It provides students with opportunities to engage in community outreach, social awareness campaigns, and creative projects that foster empathy and civic engagement. NSS Bennett is not only about volunteering but also about nurturing teamwork, discipline, and innovation, ensuring that students grow into socially conscious leaders who contribute meaningfully to society.
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
              Sangam is the meeting point of countless streams of creativity, innovation, and culture just like rivers converging to form a powerful flow. It is a confluence of stories, talents, and diverse voices, each carrying its own rhythm yet blending seamlessly into one vibrant current. Over three days, this festival transforms Bennett University into a living canvas, where hackathons spark innovation, debates sharpen intellect, art speaks louder than words, and cultural nights ignite joy and unity.
              It is not merely an event, but an experience a river of ideas and emotions flowing together, creating a tapestry of diversity and celebration. Sangam embodies the spirit of NSS Bennett, reminding us that service, creativity, and community can merge into something timeless. It is a gathering where every participant adds their drop to the stream, making the current stronger, brighter, and unforgettable.
            </p>
          </div>

          {/* Photo – right on desktop, below text on mobile */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#A03232]/40 order-1 md:order-none">
            <img
              src={logo}
              alt="Sangam Fest / Cultural Event"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#F9E9D6]/60 to-transparent" /> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
