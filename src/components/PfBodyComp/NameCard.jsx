import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CgMail } from "react-icons/cg";

function NameCard() {
  return (
    <div className="">
      <div className=" mx-5 laptop-md:sticky laptop-md:top-20 flex flex-col justify-center items-center bg-white tablet:mx-20 laptop-md:mx-3 tablet:my-5 rounded-2xl">
        <img
          src="./pics/pfp.jpg"
          className=" w-52 h-52 rounded-2xl mt-8 tablet:mt-10 object-cover"
          alt="My Logo"
        ></img>
        <h1 className=" text-3xl tablet:text-4xl text-black font-bold my-4 text-nowrap">
          Sahil Antil
        </h1>
        <p className=" mx-8 my-8 text-center font-medium text-gray-500 leading-tight max-w-80">
          I'm a passionate and motivated newbie full stack{" "}
          <span className=" text-nowrap">web developer,</span> eager to learn
          and grow as I begin my journey in the tech industry.
        </p>
        <div className=" flex justify-center items-center">
          <a
            href="https://www.instagram.com/skti.jaat_?utm_source=qr&igsh=cXFhdW42ZW1yMzN4"
            target="_blank"
            className=" mx-5 mb-6 p-2 bg-gray-300 hover:bg-orange-400 cursor-pointer rounded-xl transition-all duration-700"
          >
            <FaInstagram className="  w-5 h-5 cursor-pointer " />
          </a>
          <a
            href="https://github.com/Coder-S8ul/"
            target="_blank"
            className=" mx-5 mb-6 p-2 bg-gray-300 hover:bg-orange-400 cursor-pointer rounded-xl transition-all duration-700"
          >
            <FiGithub className="  w-5 h-5 cursor-pointer " />
          </a>
          <a
            onClick={() => window.open("mailto:sahilantil769@gmail.com")}
            className=" mx-5 mb-6 p-2 bg-gray-300 hover:bg-orange-400 cursor-pointer rounded-xl transition-all duration-700"
          >
            <CgMail className="  w-5 h-5 cursor-pointer " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NameCard;
