import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import WorkExperience from './Components/WorkExperience'

const App = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className='relative z-10'>
        <Navbar/>
        <Hero/>
        <Skills/>
        <WorkExperience />
        <Projects/>
        <AboutMe/>
        <Contact/>

      </div>
    </>
  )
}

export default App