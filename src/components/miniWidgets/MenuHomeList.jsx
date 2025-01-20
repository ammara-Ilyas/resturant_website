"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useMenu } from "@/contextApi/MenuContext";
import Slider from "./Slider";
const MenuHome = () => {
  const { menuList } = useMenu();
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Function to handle item selection
  const handleIndex = (index) => {
    console.log("Selected index:", index);
    setSelectedIndex(index);
  };

  // Function to close the modal
  const handleClose = () => {
    setSelectedIndex(null);
  };
  const displayitems = menuList.slice(0, 6);

  return (
    <div className=" w-[80%] mx-auto">
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 items-center gap-8 w-[100%] mx-auto">
        {menuList &&
          displayitems.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center pt-4  group font-sans letter-wide"
            >
              <div
                className="border-2 border-orange-600 -rotate-12 group-hover:rotate-0 duration-300 transition-transform ease-in-out p-2 h-[260px] w-[260px]"
                onClick={() => handleIndex(index)}
              >
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
                <p className="text-orange-600 text-lg font-bold mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
      </div>
      {selectedIndex !== null && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-90 h-screen w-full flex items-center justify-center z-50">
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-2xl font-bold z-50"
            onClick={handleClose}
          >
            &times;
          </button>

          {/* Slider component */}
          <Slider sliderData={menuList} initialIndex={selectedIndex} />
        </div>
      )}
    </div>
  );
};

export default MenuHome;
