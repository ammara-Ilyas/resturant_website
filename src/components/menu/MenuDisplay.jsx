"use client";
import React from "react";
import Image from "next/image";
import { useMenu } from "@/contextApi/MenuContext";
import Heading from "../miniWidgets/Heading";
const MenuDisplay = () => {
  const { menuList } = useMenu();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-8 w-[90%] mx-auto">
      {menuList &&
        menuList.map((item, index) => (
          <div
            key={index}
            className="bg-white flex flex-col items-center pt-4  group font-sans letter-wide"
          >
            <div className="border-2 border-yellow-600 -rotate-12 group-hover:rotate-12 duration-300 transition-transform ease-in-out p-2 h-[260px] w-[260px]">
              {" "}
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={160}
                className="object-cover  p-2"
              />
            </div>
            <div className="p-4 text-center mt-7 ">
              <h4 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h4>
              <p className="text-gray-500 text-sm">{item.description}</p>
              <p className="text-yellow-600 text-lg font-bold mt-2">
                {item.price}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MenuDisplay;
