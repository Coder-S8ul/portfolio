import React from "react";
import InterestsSubComp from "./InterestsSubComp";

function InterestsComp({ name, stuff }) {
  return (
    <div className="px-5 py-4 mt-5 bg-headShade/5 rounded-xl">
      <h1 className=" mb-5 tablet:text-3xl laptop-md:text-4xl text-gray-300 font-bold text-nowrap">
        {name}
      </h1>
      <div className=" flex flex-col gap-2 tablet:gap-0 justify-center p-4">
        {stuff.map((hobby) => (
          <InterestsSubComp
            key={hobby.index}
            name={hobby.name}
            description={hobby.description}
            pic={hobby.pic}
            link={hobby.link}
          />
        ))}
      </div>
    </div>
  );
}

export default InterestsComp;
