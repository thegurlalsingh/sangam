import React from 'react';

const PersonCard = ({ image, name, description, role = '' }) => {
  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#A03232]/20 hover:border-[#A03232]/50">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-[#A03232] mb-2">
          {name}
        </h3>
        {role && (
          <p className="text-sm md:text-base text-black/80 font-medium mb-3">
            {role}
          </p>
        )}
        <p className="text-black/90 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PersonCard;