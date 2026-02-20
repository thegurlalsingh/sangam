import React from 'react';
import VerticalTimeline from './ExperienceTimeline.jsx';

const EventDetails = () => {
  return (
    <section className="w-full bg-[#F9E9D6] text-[#A03232] pt-32 md:pt-40 pb-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-28">
        {/* Optional centered heading – remove if not needed */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Event <span className="text-[#A03232]">Details</span>
          </h1>
        </div>

        {/* Your timelines */}
        <VerticalTimeline />
        <VerticalTimeline />
        <VerticalTimeline />
      </div>
    </section>
  );
};

export default EventDetails;