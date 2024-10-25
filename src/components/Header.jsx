import React from "react";
import HeaderItems from "./HeaderComp/Items";

function Header() {
  const headItems = {};
  return (
    <div className=" flex justify-center items-center">
      <div className=" mt-4 tablet:m-8">
        <HeaderItems />
      </div>
    </div>
  );
}

export default Header;
