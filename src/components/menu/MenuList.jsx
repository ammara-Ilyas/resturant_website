import React from "react";
import MenuDisplay from "../miniWidgets/MenuDisplay";
import MenuFilter from "./MenuFilter";
import Heading from "../miniWidgets/Heading";
const MenuList = () => {
  return (
    <div className="flex ">
      <div className=" w-[80%] mx-auto">
        <MenuDisplay />
      </div>
    </div>
  );
};

export default MenuList;
