import React from "react";
import aboutUsImage from "../../assets/aboutUs.svg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-auto sm:mt-10 md:mt-20 lg:mt-20 xl:mt-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-6 md:px-10">
        <div className="w-full lg:w-1/2">
          <p className="text-center lg:text-left font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8">
            About Me
          </p>
          <p className="tracking-widest text-justify mb-6">
            I am a highly organized and diligent individual with 2 years of
            experience working as a Software Engineer - Frontend Developer. I am
            seeking a responsible position where I can further expand my
            knowledge, skills, and experience in a dynamic and challenging
            environment.
          </p>
          <p className="tracking-widest text-justify mb-6">
            I hold a degree in Electrical Engineering from Priyadarshini College
            of Engineering, Nagpur University. My academic journey also includes
            completing my HSC from Janta Mahavidyalay, Chandrapur, and SSC from
            Bhawanji Bhai Chavhan High School.
          </p>
          <p className="tracking-widest text-justify">
            To enhance my technical expertise, I have successfully completed the
            Advanced Java Stack course from Edubridge India Pvt. Ltd. I am eager
            to apply my learning and contribute meaningfully to the projects I
            undertake, while continuing to grow professionally.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={aboutUsImage}
            alt="About Me"
            className="w-2/5 lg:w-3/5 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
