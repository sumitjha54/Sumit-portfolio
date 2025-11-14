import PROFILE_PIC from "../assets/PROFILE_PIC.jpg";
import profile from "../assets/profile.png";
import devconnect from "../assets/devconnect.png";
import webber from "../assets/webber.png";
import {
  FaJava,
  FaGithub,
  FaGit,
  FaNetworkWired,
  FaDatabase,
  FaLinux,
  FaServer,
  FaDocker,
} from "react-icons/fa";

import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";

import {
  SiMongodb,
  SiPostgresql,
  SiCss3,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const PROFILE_DATA = {
  profilePicture: PROFILE_PIC,
  name: "Sumit Jha",
  tagline:
    "B.Tech. Undergrad at MNNIT Allahabad with expertise in C++, Python, and full-stack development.",
  jobTitle: "Full-stack Developer ",
  location: "Bangalore, Karnataka, India",
  Experience: "Fresher",
  skills: [
    "C/C++",
    "JavaScript",
    "HTML",
    "React.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "RESTful APIs",
    "Git",
  ],
  email: "sumitjha.2266@gmail.com",
  phone: "+91 9305064289",
  website: "https://github.com/sumitjha54",
  linkedin: "https://www.linkedin.com/in/sumitjha50/",
};

export const SKILLS = [
  {
    id: "01",
    icon: IoLogoJavascript,
    title: "JavaScript",
    level: 92,
    category: "Frontend",
    comment:
      "JavaScript is my bread and butter. I have been using it with React.js and Node.js for full-stack web development projects.",
  },
  {
    id: "02",
    icon: IoLogoHtml5,
    title: "HTML",
    level: 99,
    category: "Frontend",
    comment:
      "HTML is the foundation of every web project I work on. I have a deep understanding of clean and semantic structure.",
  },
  {
    id: "03",
    icon: IoLogoReact,
    title: "React JS",
    level: 95,
    category: "Frontend",
    comment:
      "Developed scalable front-end solutions with React, including AI career platforms and autonomous web app builders.",
  },
  {
    id: "04",
    icon: IoLogoNodejs,
    title: "Node JS",
    level: 85,
    category: "Backend",
    comment:
      "Built backend services and APIs with Node.js and Express.js, focusing on performance and AI integration.",
  },
  {
    id: "05",
    icon: SiMongodb,
    title: "MongoDB",
    level: 88,
    category: "Database",
    comment:
      "Managed NoSQL databases effectively for AI career platforms and web applications.",
  },
  {
    id: "06",
    icon: SiPostgresql,
    title: "PostgreSQL",
    level: 80,
    category: "Database",
    comment:
      "PostgreSQL is my preferred relational database. I use it for scalable, production-ready backend applications.",
  },
  {
    id: "07",
    icon: SiCss3,
    title: "CSS",
    level: 90,
    category: "Frontend",
    comment:
      "CSS gives life to my user interfaces. I have strong expertise in layouts, animations, and responsive design.",
  },
  {
    id: "08",
    icon: FaGithub,
    title: "GitHub",
    level: 92,
    category: "Tools",
    comment:
      "Experienced in using GitHub for version control, collaboration, and project management with clean branching workflows.",
  },
  {
    id: "09",
    icon: FaGit,
    title: "Git",
    level: 70,
    category: "Tools",
    comment:
      "Used Git for version control and collaborative software development across multiple projects.",
  },
  {
    id: "10",
    icon: SiPostman, // ⬅️ yahan change
    title: "Postman",
    level: 65,
    category: "Tools",
    comment:
      "Utilized Postman for API design, testing, and integration in backend and network projects.",
  },

  {
    id: "11",
    icon: VscVscode, // ⬅️ yahan change
    title: "VS Code",
    level: 70,
    category: "Tools",
    comment:
      "Developed and debugged full-stack applications using Visual Studio Code with a productive setup.",
  },
  {
    id: "12",
    icon: FaDatabase,
    title: "MySQL",
    level: 80,
    category: "Database",
    comment:
      "Managed relational databases with MySQL for backend data storage, retrieval, and schema design.",
  },
  {
    id: "13",
    icon: SiNextdotjs,
    title: "Next.js",
    level: 80,
    category: "Frontend",
    comment:
      "Built server-side rendered and static web applications using Next.js for improved performance and SEO.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "SmartDesk AI",
    image: profile,
    description:
      "Full-stack AI ticketing agent that auto-categorizes, prioritizes and assigns support tickets using Google Gemini API and Inngest.",
    tags: ["Node.js", "Express", "MongoDB", "Gemini API", "Inngest", "JWT"],
    github: "https://github.com/sumitjha54/AI-ticket-system",
    demo: "",
  },
  {
    id: 2,
    title: "DevConnect",
    image: devconnect,
    description:
      "Q&A platform inspired by Stack Overflow with auth, voting, markdown support, search and theming built with Next.js and Appwrite.",
    tags: ["Next.js", "Appwrite", "Tailwind CSS"],
    github: "https://github.com/sumitjha54/Stack-Overflow",
    demo: "",
  },
  {
    id: 3,
    title: "ClipIQ",
    image: webber,
    description:
      "Cloud-based subject-focused video cropping & compression using Cloudinary AI APIs; focused on UI polish and video processing pipelines.",
    tags: ["Next.js", "Prisma", "NeonDB", "Cloudinary"],
    github: "https://github.com/sumitjha54/ClipIQ---AI-powered-SAAS",
    demo: "",
  },
];

export const ABOUT_ME_DATA = {
  introduction:
    "Hi, I'm Sumit Jha, an aspiring developer and passionate problem solver who loves and strives to solve real world problems.",
  background:
    "I am currently pursing my Bachelor's degree from Motilal Nehru National Institute of Technology, Allahabad. Throughout my college life, I've developed a passion for web technologies and frameworks.",
  skills:
    "I'm proficient in a variety of technologies including C++, React.js, JavaScript, Git/Github, Next.js and Node.js. I enjoy solving real issues and creating impactful applications using modern development practices.",
  projects:
    "Some of my notable projects include a Acloud-based platform to perform subject-focused cropping and video compression, DevConnect which is a fully functional Q&A platform inspired by Stack Overflow and  SmartDesk AI, A full-stack AI agent that automatically categorizes, prioritizes, and assigns support tickets",
  interests:
    "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and playing strategy-based video games.",
  careerGoals:
    "In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to impactful projects.",
  stats: {
    Experience: "Fresher",
    numberOfProjects: 3,
    certificationsEarned: 1,
  },
};
