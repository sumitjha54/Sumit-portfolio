import React from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
        <div className="w-screen hidden md:flex items-center justify-center py-4 fixed top-0 z-10">
            <nav className="max-w-screen-xl bg-navbg rounded-xl shadow-lg shadow-sky-600/10 mx-auto py-3 px-6">
                <ul className="flex items-center gap-14">
                    <li>
                        <Link
                        to="hero"
                        smooth
                        spy
                        offset={-80}
                        className="menu-item text-xl text-white hover:text-sky-400 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:w-0 after:h-0.5 after:bg-sky-100 after:transition-all hover:after:w-full"
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="skills"
                        smooth
                        spy
                        offset={-80}
                        className="menu-item text-xl text-white hover:text-sky-400 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:w-0 after:h-0.5 after:bg-sky-100 after:transition-all hover:after:w-full"
                        >
                        Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="projects"
                        smooth
                        spy
                        offset={-80}
                        className="menu-item text-xl text-white hover:text-sky-400 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:w-0 after:h-0.5 after:bg-sky-100 after:transition-all hover:after:w-full"
                        >
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="about"
                        smooth
                        spy
                        offset={-80}
                        className="menu-item text-xl text-white hover:text-sky-400 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:w-0 after:h-0.5 after:bg-sky-100 after:transition-all hover:after:w-full"
                        >
                        About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="contact"
                        smooth
                        spy
                        offset={-80}
                        className="menu-item text-xl text-white hover:text-sky-400 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:w-0 after:h-0.5 after:bg-sky-100 after:transition-all hover:after:w-full"
                        >
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  );
};

export default Navbar;