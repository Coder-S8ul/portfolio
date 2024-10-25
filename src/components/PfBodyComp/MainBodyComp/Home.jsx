import React from "react";

function Home() {
  return (
    <div
      id="home"
      className=" mx-5 tablet:mx-16 laptop-md:mx-8 my-10 tablet:my-5"
    >
      <h1 className=" text-4xl tablet:text-6xl laptop-md:text-7xl laptop:text-8xl font-bold">
        <span className=" text-nowrap text-headMain block">Full Stack</span>{" "}
        <span className=" text-nowrap text-headShade">Web Developer</span>
      </h1>
      <p className=" tablet:text-lg  tablet:my-5  tablet:w-[450px] text-paraMain">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
      <div className="flex justify-start items-center gap-10 my-8 tablet:my-16">
        <div>
          <h1 className=" text-2xl tablet:text-4xl laptop-md:text-5xl laptop:text-6xl text-headMain font-semibold">
            +0.5
          </h1>
          <p className=" text-paraMain">Years of Experience</p>
        </div>
        <div>
          <h1 className=" text-2xl tablet:text-4xl laptop-md:text-5xl laptop:text-6xl text-headMain font-semibold">
            +1
          </h1>
          <p className=" text-paraMain">Projects Completed</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
