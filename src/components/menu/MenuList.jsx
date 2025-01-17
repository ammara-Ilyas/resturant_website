import React from "react";
import MenuDisplay from "./MenuDisplay";
import MenuFilter from "./MenuFilter";
import Heading from "../miniWidgets/Heading";
const MenuList = () => {
  return (
    <div className="my-20 w-[90%] mx-auto flex flex-col gap-5 items-center justify-center ">
      <div className="flex items-center w-[70%] justify-center ">
        {" "}
        <span className="h-[2px] w-[8%] mr-1 border-[1px] rounded-md border-custom-color"></span>{" "}
        <div className="w-[7%]">
          {" "}
          <Heading text="Menu" />
        </div>{" "}
        <span className="h-[2px] w-[8%] border-[1px] ml-1 rounded-md border-custom-color"></span>{" "}
      </div>
      <h2 className="text-black mb-6 text-4xl text-center font-serif font-bold  letter-wide">
        Check Our Yummy Menu
      </h2>
      <MenuFilter />
      <MenuDisplay />
    </div>
  );
};

export default MenuList;
