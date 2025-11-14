import React from "react";
import { ABOUT_ME_DATA } from "../utils/data";
import Profile_pic_image from '../assets/Profile_pic_image.jpeg'

const AboutMe = () => {
  return (
    <section
      id="about"
      className="max-w-screen-xl mx-auto px-6 py-20 md:py-24"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center md:text-left mb-12">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT — IMAGE */}
        <div className="col-span-1 flex justify-center">
          <img
            src={Profile_pic_image}
            alt="profile"
            className="w-full h-[350px] md:h-[420px] object-cover rounded-3xl shadow-[0_0_45px_rgba(56,189,248,0.4)]"
          />
        </div>

        {/* RIGHT — TEXT CONTENT */}
        <div className="col-span-2 flex flex-col gap-6 bg-[#0b1220]/70 p-8 rounded-3xl border border-sky-400/20 shadow-[0_0_25px_rgba(56,189,248,0.25)]">
          <p className="text-slate-300 leading-relaxed text-[15px] md:text-base">
            {ABOUT_ME_DATA.introduction} {ABOUT_ME_DATA.background}{" "}
            {ABOUT_ME_DATA.interests}
          </p>

          <p className="text-slate-300 leading-relaxed text-[15px] md:text-base">
            {ABOUT_ME_DATA.skills} {ABOUT_ME_DATA.careerGoals}
          </p>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {/* Experience */}
        <div className="bg-[#0b1220]/80 p-6 rounded-2xl border border-sky-400/20 shadow-[0_0_20px_rgba(56,189,248,0.25)] text-center">
          <h3 className="text-3xl font-bold text-white">
            {ABOUT_ME_DATA.stats.Experience}
          </h3>
          <p className="text-slate-300 tracking-wide mt-2">
            Experience
          </p>
        </div>

        {/* Projects Completed */}
        <div className="bg-[#0b1220]/80 p-6 rounded-2xl border border-sky-400/20 shadow-[0_0_20px_rgba(56,189,248,0.25)] text-center">
          <h3 className="text-3xl font-bold text-white">
            {ABOUT_ME_DATA.stats.numberOfProjects}
          </h3>
          <p className="text-slate-300 tracking-wide mt-2">
            Projects Completed Successfully
          </p>
        </div>

        {/* Certifications */}
        <div className="bg-[#0b1220]/80 p-6 rounded-2xl border border-sky-400/20 shadow-[0_0_20px_rgba(56,189,248,0.25)] text-center">
          <h3 className="text-3xl font-bold text-white">
            {ABOUT_ME_DATA.stats.certificationsEarned}
          </h3>
          <p className="text-slate-300 tracking-wide mt-2">
            Certifications Earned
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;