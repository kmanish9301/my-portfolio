import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Skills from './Components/skillsBanner/Skills'
import Experience from './Components/experience/Experience'
import Projects from './Components/projects/Projects'
import Contact from './Components/contact/Contact'
import About from './Components/about/About'

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className='max-w-screen-2xl mx-auto px-16'>
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App