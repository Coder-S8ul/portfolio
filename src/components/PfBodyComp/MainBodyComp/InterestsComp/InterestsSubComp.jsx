import React from "react";
import { LuExternalLink } from "react-icons/lu";

function InterestsSubComp({ name, description, pic, link }) {
  return (
    <a
      href={`${link}`}
      target="_blank"
      className=" relative group flex items-center transition-all duration-300 bg-headShade tablet:bg-inherit hover:bg-headShade rounded-xl"
    >
      <div className=" w-8 tablet:w-12 laptop-md:w-16 m-3 bg-white p-2 rounded-xl">
        <img src={`${pic}`} />
      </div>
      <div>
        <h1 className=" tablet:text-xl laptop-md:text-2xl text-headMain font-semibold">
          {name}
        </h1>
        <p className=" text-paraMain">{description}</p>
      </div>
      <LuExternalLink className=" text-orange-500 right-5 absolute transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-5" />
    </a>
  );
}

export default InterestsSubComp;
