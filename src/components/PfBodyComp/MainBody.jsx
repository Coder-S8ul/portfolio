import React from "react";
import Home from "./MainBodyComp/Home";
import Projects from "./MainBodyComp/Projects";
import Tools from "./MainBodyComp/Tools";
import Interests from "./MainBodyComp/Interests";

function MainBody({ className }) {
  return (
    <div className={`${className}`}>
      <Home />
      <Projects />
      <Tools />
      <Interests />
    </div>
  );
}

export default MainBody;
