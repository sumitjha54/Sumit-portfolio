import React from "react";
import { PROFILE_DATA } from "../utils/data";

import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FaBriefcase, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";

const Hero = () => {
  const {
    profilePicture,
    name,
    tagline,
    jobTitle,
    location,
    Experience,
    email,
    skills,
  } = PROFILE_DATA;

  const skillList = skills || [];

  return (
    <section
      id="hero"
      className="relative max-w-screen-xl mx-auto px-6 pt-24 pb-20 flex flex-col md:flex-row md:items-center gap-12"
    >
      {/* Left background effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-1/3 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.35),transparent_60%)]" />
      </div>

      {/* LEFT SIDE */}
      <div className="relative z-[1] flex-1 text-center md:text-left space-y-4">
        <span className="text-sm md:text-base tracking-[0.25em] uppercase text-slate-300">
          {jobTitle || "A Full Stack Developer"}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {name}
        </h1>

        <p className="text-base md:text-lg text-slate-200 max-w-xl mx-auto md:mx-0">
          {tagline}
        </p>

        <div className="pt-4">
          <a
            href="#contact"
            className="inline-block bg-[#1b74ff] hover:bg-[#1763d6] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT SIDE – CARD */}
      <div className="relative z-[1] flex-1 flex justify-center md:justify-end">
        <div className="w-full max-w-sm bg-[#111827]/90 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/40 border border-white/5">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 to-blue-700 blur-md" />
              <img
                src={profilePicture}
                alt={name}
                className="relative w-full h-full rounded-full object-cover border-[4px] border-sky-400 shadow-[0_0_35px_rgba(56,189,248,0.8)]"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                {name}
              </h2>
              <p className="text-sm text-slate-300">
                {jobTitle || "Full Stack Developer"}
              </p>
              {location && (
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1 mt-1">
                  <IoLocationOutline className="text-slate-400" />
                  {location}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#020617]/60 rounded-2xl px-4 py-3 flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center">
              <IoMailOutline className="text-sky-400" />
            </div>
            <p className="text-sm text-slate-100 truncate">{email}</p>
          </div>

          {/* Experience */}
          <div className="bg-[#020617]/60 rounded-2xl px-4 py-3 flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <FaBriefcase className="text-emerald-400" />
            </div>
            <p className="text-sm text-slate-100">{Experience}</p>
          </div>

          {/* Skills from PROFILE_DATA.skills */}
          <div className="bg-[#020617]/60 rounded-2xl px-4 py-3 mb-5">
            <div className="flex flex-wrap gap-2">
              {skillList.slice(0, 12).map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-slate-800 text-xs text-slate-100 border border-slate-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <a
                href="https://github.com/sumitjha54"
                className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-slate-100 hover:bg-slate-800 transition"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumitjha50/"
                className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-slate-100 hover:bg-slate-800 hover:text-sky-400 transition"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumitjha50/"
                className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-slate-100 hover:bg-slate-800 hover:text-sky-400 transition"
              >
                <RxTwitterLogo size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
