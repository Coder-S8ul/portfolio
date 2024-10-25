import React from "react";
import ToolsComp from "./ToolsComp/ToolsComp";

function Tools() {
  const frameTools = [
    {
      index: 1,
      name: "React",
      pic: "./pics/frametools/react.png",
      description: "React Framework",
      link: "https://react.dev/blog/2023/03/16/introducing-react-dev",
    },
    {
      index: 2,
      name: "TailWindCss",
      pic: "./pics/frametools/tailwindcss.png",
      description: "CSS Framework",
      link: "https://tailwindcss.com/",
    },
    {
      index: 3,
      name: "Node.js",
      pic: "./pics/frametools/nodejs.png",
      description: "Server Runtime",
      link: "https://nodejs.org/en",
    },
    {
      index: 4,
      name: "Postgre SQL",
      pic: "./pics/frametools/postgres.png",
      description: "PostgreSQL Database",
      link: "https://www.postgresql.org/",
    },
    {
      index: 5,
      name: "ChatGPT",
      pic: "./pics/frametools/chatgpt.png",
      description: "AI Assistant",
      link: "https://chatgpt.com/",
    },
    {
      index: 6,
      name: "GitHub",
      pic: "./pics/frametools/github.png",
      description: "Code Repository",
      link: "https://github.com/",
    },
  ];
  return (
    <div
      id="tools"
      className=" mx-5 tablet:mx-16 laptop-md:mx-8 my-16 tablet:my-24"
    >
      <h1 className="text-4xl tablet:text-6xl laptop-md:text-7xl laptop:text-8xl font-bold">
        <span className=" block text-headMain">Frameworks</span>
        <span className=" text-headShade text-nowrap">& Tools</span>
      </h1>
      <div className=" grid tablet:grid-cols-2 tablet:grid-flow-row gap-2 tablet:gap-4 my-5 tablet:my-10">
        {frameTools.map((tool) => (
          <ToolsComp
            key={tool.index}
            name={tool.name}
            pic={tool.pic}
            description={tool.description}
            link={tool.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Tools;
