import React from "react";
import { FiHome } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlineInterests } from "react-icons/md";

function HeaderItems() {
  return (
    <ul className=" flex justify-center items-center flex-nowrap  bg-white/[.03] rounded-2xl px-2">
      <li className=" mx-6 my-4">
        <a href="#home">
          <FiHome className=" w-5 h-5 text-white transition-all duration-300 hover:text-orange-400" />
        </a>
      </li>
      <li className=" mx-6 my-4">
        <a href="#projects">
          <FaRegFolder className=" w-5 h-5 text-white transition-all duration-300 hover:text-orange-400" />
        </a>
      </li>
      <li className=" mx-6 my-4">
        <a href="#tools">
          <LiaToolsSolid className=" w-5 h-5 text-white transition-all duration-300 hover:text-orange-400" />
        </a>
      </li>
      <li className=" mx-6 my-4">
        <a href="#interests">
          <MdOutlineInterests className=" w-5 h-5 text-white transition-all duration-300 hover:text-orange-400" />
        </a>
      </li>
    </ul>
  );
}

export default HeaderItems;
