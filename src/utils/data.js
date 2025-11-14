import PROFILE_PIC from '../assets/PROFILE_PIC.jpeg'
import profile from '../assets/profile.png'
import webber from '../assets/webber.png'
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
  SiIntellijidea,
  SiJupyter,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const PROFILE_DATA = {
  profilePicture: PROFILE_PIC, 
  name: "Parth Kumar",
  tagline:
    "Computer Science student at MNNIT Allahabad with expertise in Java, Python, and full-stack development.",
  jobTitle: "Computer Science Student / AI & Full-stack Developer Intern",
  location: "Lucknow, UP, India",
  Experience: "2 Months",
  skills: [
    "Java",
    "Python",
    "C/C++",
    "SQL",
    "JavaScript",
    "HTML",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Docker",
    "AWS",
    "RESTful APIs",
  ],
  email: "parthk2704@gmail.com",
  phone: "+91 8532036865",
  website: "https://github.com/27-Parth",
  linkedin: "https://linkedin.com/in/parth-274l1",
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
    icon: FaJava,
    title: "Java",
    level: 75,
    category: "Tools",
    comment:
      "Utilized Java extensively for core programming and AI development in network projects.",
  },
  {
    id: "09",
    icon: FaGithub,
    title: "GitHub",
    level: 92,
    category: "Tools",
    comment:
      "Experienced in using GitHub for version control, collaboration, and project management with clean branching workflows.",
  },
  {
    id: "10",
    icon: FaGit,
    title: "Git",
    level: 70,
    category: "Tools",
    comment:
      "Used Git for version control and collaborative software development across multiple projects.",
  },
  {
    id: "11",
    icon: SiPostman, // ⬅️ yahan change
    title: "Postman",
    level: 65,
    category: "Tools",
    comment:
      "Utilized Postman for API design, testing, and integration in backend and network projects.",
  },
  {
    id: "12",
    icon: SiJupyter, // ⬅️ yahan change
    title: "Jupyter",
    level: 60,
    category: "Tools",
    comment:
      "Leveraged Jupyter notebooks for prototyping AI models, data analysis, and experimentation.",
  },
  {
    id: "13",
    icon: FaNetworkWired,
    title: "WebSockets",
    level: 60,
    category: "Tools",
    comment:
      "Implemented WebSocket-based real-time communication in web and network applications.",
  },
  {
    id: "14",
    icon: VscVscode, // ⬅️ yahan change
    title: "VS Code",
    level: 70,
    category: "Tools",
    comment:
      "Developed and debugged full-stack applications using Visual Studio Code with a productive setup.",
  },
  {
    id: "15",
    icon: SiIntellijidea,
    title: "IntelliJ IDEA",
    level: 70,
    category: "Tools",
    comment:
      "Used IntelliJ IDEA for Java development, refactoring, and debugging in AI and network projects.",
  },
  {
    id: "16",
    icon: FaDatabase,
    title: "MySQL",
    level: 65,
    category: "Database",
    comment:
      "Managed relational databases with MySQL for backend data storage, retrieval, and schema design.",
  },
  {
    id: "17",
    icon: FaLinux,
    title: "Linux",
    level: 75,
    category: "Tools",
    comment:
      "Operated Linux environments for development, deployment, and testing of network and software solutions.",
  },
  {
    id: "18",
    icon: FaNetworkWired,
    title: "Open5Gs",
    level: 60,
    category: "Tools",
    comment:
      "Worked with Open5Gs for 5G network implementation and testing in telecom-oriented projects.",
  },
  {
    id: "19",
    icon: FaServer,
    title: "srsRAN",
    level: 60,
    category: "Tools",
    comment:
      "Applied srsRAN software suite for software-defined radio and 4G/5G network experimentation.",
  },
  {
    id: "20",
    icon: FaDocker,
    title: "Docker",
    level: 65,
    category: "Tools",
    comment:
      "Utilized Docker containers to streamline deployment and scaling of applications and services.",
  },
];


export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "Indian Space Research Organization (ISRO)",
    position: "Systems and Network Intern",
    duration: "May 2025 – July 2025",
    description:
      "Researched and developed AI-driven solutions for 5G networks focusing on optimized data routing. Pioneered AI-driven 6G network architectures improving traffic management by 50%. " +
      "Deployed unified SMF managing 16+ data tunnels, enhancing policy enforcement by over 30%.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Pro-File",
    image: profile,
    description: "A AI career sensai, which uses real world and current insights to help people find a job.",
    tags: ["React", "Node.js", "Vite", "Gemini API", "ShadCN", "Prisma", "NeonDB"],
    github: "https://github.com/27-Parth/pro-file",
    demo: "https://pro-file-sigma.vercel.app"
  },
{
  id: 2,
  title: "Webber.ai",
  image: webber,
  description: "A tool for generating websites quickly by leveraging Stackblitz containers, allowing users to build sites in minutes directly in the browser.",
  tags: ["Node.js", "React.js", "JavaScript", "Stackblitz"],
  github: "https://github.com/27-Parth/webber",
}
];


export const ABOUT_ME_DATA = {
  introduction:
    "Hi, I'm Parth, an aspiring developer and passionate problem solver who loves and strives to solve real world problems.",
  background:
    "I am currently pursing my Bachelor's degree in Computer Science and Engineering from the Motilal Nehru National Institute of Technology. Throughout my college life, I've developed a passion for web technologies and frameworks.",
  skills:
    "I'm proficient in a variety of technologies including Java, React.js, JavaScript, Linux, Shell Scripts and Node.js. I enjoy solving real issues and creating impactful applications using modern development practices.",
  projects:
    "Some of my notable projects include a Career Coach website built which helps the user to get Realtime Industry and Job insights, Webber.ai which leverages Ai for building websites in minutes, and various mini projects & extensions.",
  interests:
    "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and playing strategy-based video games.",
  careerGoals:
    "In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to impactful projects.",
  stats: {
    Experience: "2 months",
    numberOfProjects: 5,
    certificationsEarned: 3,
  },
};
