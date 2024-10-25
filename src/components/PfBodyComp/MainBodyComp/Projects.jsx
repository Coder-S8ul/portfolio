import React from "react";
import { LuExternalLink } from "react-icons/lu";

function Projects() {
  return (
    <div
      id="projects"
      className=" mx-5 tablet:mx-16 laptop-mid:mx-8 my-16 tablet:my-24"
    >
      <h1 className="text-4xl tablet:text-6xl laptop-md:text-7xl laptop:text-8xl font-bold">
        <span className=" text-headMain block">Recent</span>
        <span className=" text-headShade">Projects</span>
      </h1>
      <div className="flex flex-col gap-2 tablet:gap-0 my-4 tablet:my-10 laptop-md:my-20 relative">
        <a
          href="#app"
          className=" flex rounded-2xl items-center transition-all duration-300 bg-headShade/5 tablet:bg-inherit hover:bg-headShade/5 group"
        >
          <img
            src="/pics/projects/project1.png"
            className=" border-2 w-24 tablet:w-36 laptop-md:w-48 border-orange-500 rounded-xl m-3 tablet:m-4"
            alt="Project 1"
          />
          <div>
            <h1 className=" text-headMain text-xl tablet:text-2xl font-semibold">
              My Portfolio
            </h1>
            <p className=" text-paraMain">Tech Stack: React TailWindCss</p>
          </div>
          <LuExternalLink className=" text-orange-500 right-5 absolute transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-5" />
        </a>
        <a className=" flex rounded-2xl items-center bg-headShade/5 tablet:bg-inherit hover:bg-headShade/5 group p-2 tablet:p-5">
          <div>
            <h1 className=" text-headMain text-xl tablet:text-2xl font-semibold">
              More exciting things coming soon...
            </h1>
            <p className=" text-paraMain">Tech Stack: React TailWindCss</p>
          </div>
          <LuExternalLink className=" text-orange-500 right-5 absolute transition-transform transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-5" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
