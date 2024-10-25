import React from "react";

function ToolsComp({ name, pic, description, link }) {
  return (
    <a
      href={`${link}`}
      target="_blank"
      className=" flex items-center transition-all duration-300 bg-headMain/5 tablet:bg-inherit hover:bg-headMain/5 rounded-xl"
    >
      <div className=" p-2 w-8 tablet:w-10 laptop-md:w-14 m-5 object-cover bg-white rounded-xl ">
        <img src={`${pic}`} />
      </div>
      <div>
        <h1 className=" text-headMain tablet:text-xl laptop-md:text-2xl font-semibold">
          {name}
        </h1>
        <p className=" text-paraMain text-nowrap">{description}</p>
      </div>
    </a>
  );
}

export default ToolsComp;
