import React, { useRef, useState, useEffect } from "react";
import profileImage from "../../assets/MyPhoto.jpeg";
import { TypeAnimation } from "react-type-animation";
import "../style.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(true);
  const buttonRef = useRef(null);
  const targetRef = useRef(null);

  const handleScrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleGetInTouch = () => {
    window.open("https://www.linkedin.com/in/mkharbade09/");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport
        threshold: 0.1, // Trigger when 10% of the button is visible
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="w-full h-auto pb-20 flex flex-col items-center border-b-black mt-10"
    >
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="glassmorphism p-4 rounded-full">
            <img
              className="rounded-full md:max-w-[70%] sm:max-w-[50%] xs:max-w-[60%] mx-auto custom-border-radius"
              src={profileImage}
              alt="Profile"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center gap-4 text-black dark:text-white">
          <h1 className="text-4xl font-semibold font-serif">
            Hello, I'm Manish
          </h1>
          <h3 className="capitalize text-rose-400 text-designColor">
            I'm a{" "}
            <span className="text-green-500 dark:text-green-700">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </span>
          </h3>
          <p>
            Dedicated Software Engineer with 2 years of experience specializing
            in frontend development. I am skilled in creating responsive,
            user-friendly web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              className="px-6 py-1 bg-rose-500 text-white rounded-xl bg-lightText text-bodyColor z-10"
              onClick={handleGetInTouch}
            >
              Get In Touch
            </button>
            <a
              href="/manish_resume.pdf"
              download
              className="px-6 py-1 bg-blue-500 text-white rounded-xl bg-designColor text-light z-10"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="z-10 mt-10">
        <button
          className={`px-6 py-1 bg-green-500 text-white rounded-xl border-r-2 border-l-2 border-t-2  ${
            isVisible ? "" : "opacity-0 transition-opacity duration-500"
          }`}
          onClick={handleScrollToTarget}
          ref={buttonRef}
        >
          Click to know more
        </button>
        {/* Target section for scrolling */}
        <div ref={targetRef} className="mt-10 h-[10px] bg-gray-200 z-10">
          {/* Content or styling for the target section */}
        </div>
      </div>
    </section>
  );
};

export default About;
