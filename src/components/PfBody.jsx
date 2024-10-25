import React from "react";
import NameCard from "./PfBodyComp/NameCard";
import MainBody from "./PfBodyComp/MainBody";

function PfBody() {
  return (
    <div className=" grid laptop-md:grid-cols-3 laptop:grid-cols-3 laptop-md:mx-10 laptop:mx-40 my-8">
      <NameCard />
      <MainBody className="laptop:col-span-2 laptop-md:col-span-2" />
    </div>
  );
}

export default PfBody;
