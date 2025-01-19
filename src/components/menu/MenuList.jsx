import React from "react";
import MenuDisplay from "../miniWidgets/MenuDisplay";
import MenuFilter from "./MenuFilter";
import { MenuSidebarFilter } from "./MenuFilter";
import Heading from "../miniWidgets/Heading";
const MenuList = () => {
  return (
    <div className="flex border-2">
      <div className="border-2 w-[25%]">
        <MenuSidebarFilter />
      </div>
      <div className="border-2 w-[75%] ">
        <MenuDisplay />
      </div>
    </div>
  );
};

export default MenuList;
