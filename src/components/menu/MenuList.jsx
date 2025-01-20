import React from "react";
import MenuDisplay from "../miniWidgets/MenuDisplay";
import MenuFilter from "./MenuFilter";
import Heading from "../miniWidgets/Heading";
import { HeadingText } from "../miniWidgets/Heading";
import { MenuDessert, MenuFood } from "../miniWidgets/MenuDisplay";
const MenuList = () => {
  return (
    <div className="flex flex-col ">
      <div className=" w-[80%] mx-auto">
        <MenuDisplay />
      </div>
      <div className="mt-20 flex flex-col items-center justify-center">
        <HeadingText heading="Check Out Our Sweets" text="Dessert" />
        <MenuDessert />
      </div>
      <div className="mt-20 flex flex-col items-center justify-center">
        <HeadingText heading="Check Out Our Food" text="Dessert" />
        <MenuFood />
      </div>
    </div>
  );
};

export default MenuList;
