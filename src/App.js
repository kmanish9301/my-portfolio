import React from "react";
import "./App.css";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Experience from "./Components/experience/Experience";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Projects from "./Components/projects/Projects";
import Skills from "./Components/skillsBanner/Skills";

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText relative">
      <div className="parallax-stars">
        <div className="stars"></div>
      </div>
      <div className="moon"></div>
      <div className="max-w-screen-xl mx-auto w-full">
        <Navbar />
        <Home />
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
