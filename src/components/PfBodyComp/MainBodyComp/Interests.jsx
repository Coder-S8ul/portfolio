import React from "react";
import InterestsComp from "./InterestsComp/InterestsComp";

function Interests() {
  const likes = [
    {
      index: 0,
      name: "Curious to discover...",
      stuff: [
        {
          index: 0,
          name: "Figma",
          description: "UI/UX designer",
          pic: "/pics/interests/figma.png",
          link: "https://www.figma.com/",
        },
        {
          index: 1,
          name: "Framer Motion",
          description: "Animation Library",
          pic: "/pics/interests/framer.png",
          link: "https://www.framer.com/motion/",
        },
      ],
    },
    {
      index: 1,
      name: "Leisure Activities...",
      stuff: [
        {
          index: 0,
          name: "Music",
          description: "Exploring new sounds",
          pic: "/pics/interests/music.png",
          link: "https://open.spotify.com/playlist/37i9dQZEVXbMDoHDwVN2tF?si=j0x6cn0PShyP9ezZ6KAyuQ&pi=a-SJ9XsoetSQeQ",
        },
        {
          index: 1,
          name: "Gaming",
          description: "Exploring virtual realms",
          pic: "/pics/interests/gaming.png",
          link: "https://playvalorant.com/en-gb/",
        },
      ],
    },
  ];
  return (
    <div
      id="interests"
      className=" mx-5 tablet:mx-16 laptop-md:mx-8 mb-5 tablet:mb-0 mt-16 tablet:mt-24"
    >
      <h1 className=" text-4xl tablet:text-6xl laptop-md:text-7xl laptop:text-8xl font-bold">
        <span className=" text-headMain block">Interests</span>
        <span className=" text-headShade">& Hobbies</span>
      </h1>
      <div className=" flex flex-col justify-center tablet:py-10">
        {likes.map((like) => (
          <InterestsComp key={like.index} name={like.name} stuff={like.stuff} />
        ))}
      </div>
    </div>
  );
}

export default Interests;
