import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Skills from "./Components/skillsBanner/Skills";
import Experience from "./Components/experience/Experience";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import About from "./Components/about/About";
import "./App.css";

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText relative">
      <div className="parallax-stars">
        <div className="stars"></div>
      </div>
      <div className="moon"></div>
      <div className="max-w-screen-xl mx-auto w-full">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
