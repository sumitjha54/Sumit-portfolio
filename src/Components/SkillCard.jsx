import React from "react";

const SkillCard = ({ icon: Icon, title, level, comment }) => {
  return (
    <div className="w-full bg-[#0b1220]/80 border border-sky-600/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] transition-all duration-300">

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-sky-500/15 flex items-center justify-center">
            {Icon && <Icon size={24} className="text-sky-400" />}
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>

        <span className="font-semibold text-sky-300">{level}%</span>
      </div>

      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-sky-400 to-blue-600"
          style={{ width: `${level}%` }}
        ></div>
      </div>

      <p className="text-sm text-slate-300 leading-relaxed">
        {comment}
      </p>
    </div>
  );
};

export default SkillCard;
