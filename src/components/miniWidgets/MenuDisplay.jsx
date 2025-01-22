"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useMenu } from "@/contextApi/MenuContext";
import Slider from "./Slider";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import { SortComponent } from "../menu/MenuFilter";

const MenuDisplay = () => {
  const { menuList, FilteredMenuList, loading } = useMenu();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isGrid, setIsGrid] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Handle Pagination
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Function to handle item selection
  const handleIndex = (index) => {
    console.log("Selected index:", index);
    setSelectedIndex(index);
  };

  // Function to close the modal
  const handleClose = () => {
    setSelectedIndex(null);
  };

  // Calculate Paginated Items
  const currentItems = useMemo(() => {
    if (!FilteredMenuList || FilteredMenuList.length === 0) return [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return FilteredMenuList.slice(indexOfFirstItem, indexOfLastItem);
  }, [FilteredMenuList, currentPage]);

  return (
    <div className="p-4 max-w-screen-lg mx-auto w-full">
      <SortComponent setIsGrid={setIsGrid} isGrid={isGrid} />

      {/* Loading Indicator */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div
            className={`${
              isGrid === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : ""
            } grid grid-cols-1 gap-6 `}
          >
            {currentItems &&
              currentItems.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white ${
                    isGrid === "grid"
                      ? "flex-col "
                      : " flex-row w-[100%] border-red-800 md:border-green-500 md:w-[80%] lg::w-[70%] mx-auto justify-between"
                  } flex items-center justify-evenly pt-4 group font-sans letter-wide shadow-lg `}
                >
                  <div
                    key={index}
                    className={`relative group flex                        ${
                      isGrid === "grid"
                        ? " flex-col border-orange-600 -rotate-[8deg] "
                        : "flex-row w-[100%] border-2 rotate-0 "
                    } items-center px-0 justify-center border-2 rounded-lg  p-2 group-hover:rotate-0 group-hover:scale-105 duration-300 transition-transform ease-in-out cursor-pointer`}
                    onClick={() => handleIndex(index)}
                  >
                    {/* Image Container */}
                    <div
                      className={`
                        ${
                          isGrid === "grid"
                            ? " border-none"
                            : "  border-orange-600 p-2 flex rounded-md -rotate-[8deg]  "
                        } 
                       border-2 `}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={150}
                        height={150}
                        className={` ${
                          isGrid === "grid" ? " " : " w-[300px]  "
                        } rounded-lg  `}
                      />
                    </div>

                    {/* Item Details */}
                    <div
                      className={` w-full bg-white bg-opacity-90 p-4 text-center 
                        ${
                          isGrid === "grid"
                            ? "flex flex-col "
                            : "flex flex-row justify-evenly "
                        }`}
                    >
                      <h4 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <div>
                        <p className="text-gray-500 text-sm">
                          {item.description}
                        </p>
                        <p className="text-orange-600 text-lg font-bold mt-2">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* Pagination */}
          {menuList.length > itemsPerPage && (
            <div className="flex justify-end   w-full mt-10">
              <Pagination
                count={Math.ceil(menuList.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </div>
          )}
        </>
      )}

      {/* Render the modal for the Slider */}
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
          <Slider sliderData={FilteredMenuList} initialIndex={selectedIndex} />
        </div>
      )}
    </div>
  );
};

export default MenuDisplay;

export const MenuDessert = () => {
  const { menuList, FilteredMenuList, loading } = useMenu();
  const [selectedIndex, setSelectedIndex] = useState(null);
  // Function to close the modal
  const handleClose = () => {
    setSelectedIndex(null);
  };
  let displayItem = FilteredMenuList.slice(0, 8);
  return (
    <>
      <div>
        {loading ? (
          // Show MUI CircularProgress when loading is true
          <div className="flex justify-center items-center h-40 ">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 py-6">
            {displayItem.map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-4  border-[1px] rounded-md shadow-md px-5 py-3"
              >
                <div
                  className="w-20 h-20 relative"
                  onClick={() => setSelectedIndex(i)}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <p className="text-lg font-bold text-orange-500">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Render the modal for the Slider */}
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
          <Slider sliderData={FilteredMenuList} initialIndex={selectedIndex} />
        </div>
      )}
    </>
  );
};

export const MenuFood = () => {
  const { menuList, FilteredMenuList, loading } = useMenu();
  const [selectedIndex, setSelectedIndex] = useState(null);
  // Function to close the modal
  const handleClose = () => {
    setSelectedIndex(null);
  };
  let displayItem = FilteredMenuList.slice(0, 8);
  return (
    <>
      <div>
        {loading ? (
          // Show MUI CircularProgress when loading is true
          <div className="flex justify-center items-center h-40 ">
            <CircularProgress />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
            {displayItem.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 shadow-md rounded-lg p-4 flex flex-col items-center"
              >
                <div className=" rounded-md  rotate-45">
                  {" "}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="rounded-lg  w-[160px]"
                    onClick={() => setSelectedIndex(i)}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description}
                  </p>
                  <span className="text-lg font-bold text-orange-600">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
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
          <Slider sliderData={FilteredMenuList} initialIndex={selectedIndex} />
        </div>
      )}
    </>
  );
};
