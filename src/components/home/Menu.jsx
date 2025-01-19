import React from "react";
import MenuButton from "../menu/MenuFilter";
import Heading from "../miniWidgets/Heading";
import MenuHome from "../miniWidgets/MenuHomeList";
const Menu = () => {
  return (
    <div className="my-20 w-[100%]  mx-auto flex flex-col gap-5 items-center justify-center ">
      <div className="flex items-center w-[70%] justify-center ">
        {" "}
        <span className="h-[2px] w-[8%] mr-1 border-[1px] rounded-md border-custom-color"></span>{" "}
        <div className="w-auto">
          {" "}
          <Heading text="Menu" />
        </div>{" "}
        <span className="h-[2px] w-[8%] border-[1px] ml-1 rounded-md border-custom-color"></span>{" "}
      </div>
      <h2 className="text-black mb-6 text-3xl sm:text-4xl text-center font-serif font-bold  letter-wide">
        Check Our Yummy Menu
      </h2>
      <div>
        <MenuButton />
      </div>

      <MenuHome />
    </div>
  );
};

export default Menu;
