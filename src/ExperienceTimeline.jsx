import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
      position: "Senior Software Engineer",
      duration: "2021 - Present",
      achievements: [
        "Led development of cloud-native applications",
        "Improved system performance by 40%",
        "Mentored junior developers"
      ],
      skills: ["React", "Node.js", "AWS"]
    },
    {
      id: 2,
      company: "Digital Innovations Lab",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      position: "Full Stack Developer",
      duration: "2019 - 2021",
      achievements: [
        "Developed enterprise-level applications",
        "Reduced loading time by 60%",
        "Implemented CI/CD pipeline"
      ],
      skills: ["JavaScript", "Python", "Docker"]
    },
    {
      id: 3,
      company: "StartUp Ventures",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      position: "Frontend Developer",
      duration: "2017 - 2019",
      achievements: [
        "Built responsive web applications",
        "Increased user engagement by 45%",
        "Optimized frontend performance"
      ],
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ];

  const [color, setColor] = React.useState("rgb(239, 68, 68)");

  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r}, ${g}, ${b})`);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8">
            Day <span className="text-green-400">1</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed pb-10">
            NSS Bennett is a vibrant community at Bennett University dedicated to social service, leadership, and nation-building.
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full transition-colors duration-1000 ease-in-out" 
            style={{ backgroundColor: color }}
          />

          {/* Experience cards */}
          {experiences.map((experience, index) => (
            <TimelineCard
              key={experience.id}
              experience={experience}
              index={index}
              timelineColor={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineCard = ({ experience, index, timelineColor }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-8`}
    >
      <div className="w-1/2 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-12 h-12 rounded-full object-cover"
              loading="lazy"
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">{experience.position}</h3>
              <div className="flex items-center text-gray-600">
                <FaBuilding className="mr-2" />
                <span>{experience.company}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <FaCalendarAlt className="mr-2" />
                <span>{experience.duration}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <div key={i} className="flex items-start">
                <FaBriefcase className="mt-1 mr-2 text-blue-500 flex-shrink-0" />
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-10 flex justify-center">
        <div 
          className="w-5 h-5 rounded-full border-4 border-white shadow transition-colors duration-1000 ease-in-out"
          style={{ backgroundColor: timelineColor }}
        />
      </div>

      <div className="w-1/2" />
    </motion.div>
  );
};

export default ExperienceTimeline;