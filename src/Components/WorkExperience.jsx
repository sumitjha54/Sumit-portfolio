import React from 'react';
import { WORK_EXPERIENCE } from '../utils/data';

const ExperienceCard = ({ company, position, duration, description }) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto 
      bg-gradient-to-br from-[#0f1f38] to-[#0b1627] 
      border border-slate-700/40 rounded-2xl 
      p-6 md:p-8 shadow-lg
      hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]
      transition-all duration-300">

      <div className="absolute top-4 right-4 bg-[#0f2c52] text-sky-200 
        text-sm font-medium px-4 py-1.5 rounded-lg 
        border border-sky-500/20">
        {duration}
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-white">
        {company}
      </h3>

      <p className="text-sky-400 text-sm md:text-base font-medium mt-1">
        {position}
      </p>

      <p className="text-slate-300 text-[15px] leading-relaxed mt-4">
        {description}
      </p>
    </div>
  );
};


const WorkExperience = () => {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 pb-20 pt-10"
      id="Workexperience"
    >
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14">
        Work Experience
      </h5>

      <div className="flex flex-col items-center gap-12">
        {WORK_EXPERIENCE.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </div>

    </section>
  );
};

export default WorkExperience;
