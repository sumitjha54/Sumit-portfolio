import { PROJECTS } from "../utils/data";

const ProjectCard = ({ title, image, description, tags, github, demo }) => {
  return (
    <div className="
      relative w-full max-w-xl 
      bg-gradient-to-br from-[#0f1f38] to-[#0b1627]
      border border-slate-700/40 rounded-2xl 
      p-6 md:p-8 shadow-lg
      hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]
      transition-all duration-300
      flex flex-col gap-6
    ">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full max-h-60 object-cover border border-slate-700/40"
      />

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 text-base leading-relaxed text-center">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-sky-300 bg-[#0f2c52] border border-sky-500/20 
              px-3 py-1 rounded-lg text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center gap-4 mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg border border-sky-500/20 
              bg-[#0f2c52] text-sky-300 text-sm hover:bg-[#123768] 
              transition-all"
          >
            View Code
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg border border-sky-500/20 
              bg-[#0f2c52] text-sky-300 text-sm hover:bg-[#123768] 
              transition-all"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-screen-xl mx-auto px-6 py-16">
      <h2 className="text-primary text-3xl md:text-4xl font-semibold text-center mb-14">
        Projects
      </h2>

      {/* Two Cards Side by Side */}
      <div className="flex flex-row justify-center gap-10 flex-wrap">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
