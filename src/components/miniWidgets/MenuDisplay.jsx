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
    <div>
      <div className="p-4 max-w-screen-lg mx-auto w-full mt-28">
        <SortComponent setIsGrid={setIsGrid} isGrid={isGrid} />

        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <CircularProgress />
          </div>
        ) : (
          <div
            className={`${
              isGrid === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : ""
            } grid grid-cols-1 gap-6 `}
          >
            {/* Render the menu grid */}
            {currentItems &&
              currentItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white flex flex-col items-center pt-4 group font-sans letter-wide"
                >
                  {/* Clickable Image Container */}
                  <div
                    className="border-2 border-yellow-600 -rotate-12 group-hover:rotate-0 group-hover:scale-105 duration-300 transition-transform ease-in-out p-2 h-[260px] w-[260px]"
                    onClick={() => handleIndex(index)}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={160}
                      className="object-cover p-2"
                    />
                  </div>

                  {/* Item details */}
                  <div className="p-4 text-center mt-7">
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

            {/* Pagination */}
            {menuList.length > itemsPerPage && (
              <div className="flex justify-center mt-6 ">
                <Pagination
                  count={Math.ceil(menuList.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </div>
            )}
          </div>
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
            <Slider
              sliderData={FilteredMenuList}
              initialIndex={selectedIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuDisplay;
