import { useState } from "react"
import React from 'react'
import SkillCard from "./SkillCard"
import { SKILLS } from "../utils/data"

const TABS = ["All", "Frontend", "Backend", "Tools", "Database"];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="max-w-screen-xl mx-auto px-6 py-24">
      
      {/* Section heading */}
      <h2 className="text-4xl font-bold text-white text-center mb-3">
        Technical Proficiency
      </h2>

      <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10">
        A versatile developer with expertise in modern technologies, tools, and frameworks — dedicated to building efficient, scalable, and user-centric solutions.
      </p>

      {/* Tabs */}
      <div className="flex gap-4 justify-center mb-10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_0_20px_rgba(56,189,248,0.45)]"
                  : "bg-[#0f172a] text-slate-300 border border-sky-500/20"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;