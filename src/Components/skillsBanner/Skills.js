import React from "react";
import antDesignIcon from "../../assets/ant-design.svg";
import cssIcon from "../../assets/css.svg";
import expressIcon from "../../assets/express.png";
import gitIcon from "../../assets/git.svg";
import githubIcon from "../../assets/github.svg";
import htmlIcon from "../../assets/html.svg";
import jsIcon from "../../assets/javascript.svg";
import jiraIcon from "../../assets/jira.svg";
import muiIcon from "../../assets/material-ui.svg";
import mongodbIcon from "../../assets/mongodb.svg";
import nodeIcon from "../../assets/nodejs.svg";
import postmanIcon from "../../assets/postman.svg";
import reactIcon from "../../assets/react.svg";
import reduxIcon from "../../assets/redux-saga.svg";
import scssIcon from "../../assets/scss.svg";
import vscodeIcon from "../../assets/vscode.svg";

import "../style.css";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full h-auto pb-20 mt-20 flex justify-center align-middle flex-col"
    >
      <p className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Skills
      </p>

      <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 ml-10">
        <div className="w-full">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Frontend Technology
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-start mt-4">
            <img alt="" src={htmlIcon} className="skillsIcons" />
            <img alt="" src={cssIcon} className="skillsIcons" />
            <img alt="" src={scssIcon} className="skillsIcons" />
            <img alt="" src={jsIcon} className="skillsIcons" />
            <img alt="" src={reactIcon} className="skillsIcons" />
            <img alt="" src={reduxIcon} className="skillsIcons" />
          </div>
        </div>

        <div className="w-full">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            React UI Framework
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-start mt-4">
            <img alt="" src={muiIcon} className="skillsIcons" />
            <img alt="" src={antDesignIcon} className="skillsIcons" />
          </div>
        </div>

        <div className="w-full">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Backend Technology
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-start mt-4">
            <img alt="" src={nodeIcon} className="skillsIcons" />
            <img alt="" src={expressIcon} className="skillsIcons" />
            <img alt="" src={mongodbIcon} className="skillsIcons" />
          </div>
        </div>

        <div className="w-full">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Version Control
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-start mt-4">
            <img alt="" src={gitIcon} className="skillsIcons" />
            <img alt="" src={githubIcon} className="skillsIcons" />
          </div>
        </div>

        <div className="w-full sm:ml-8 md:ml-10 lg:ml-7 xl:ml-7">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Tools for Development and Agile
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-start mt-4">
            <img alt="" src={vscodeIcon} className="skillsIcons" />
            <img alt="" src={postmanIcon} className="skillsIcons" />
            <img alt="" src={jiraIcon} className="skillsIcons" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
