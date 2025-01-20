"use client";
import React, { useEffect, useState } from "react";
import { useMenu } from "@/contextApi/MenuContext";
import { HiOutlineViewList } from "react-icons/hi";
import { MdGridView } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const MenuButton = () => {
  const { FilteredMenuList, menuList, setMenuList } = useMenu();
  const [cetegories, setCategories] = useState([
    "Breakfast",
    "Lunch",
    "Dinner",
    "Starters",
    "Dessert",
  ]);
  const [selectedCate, setSelectedCate] = useState("Breakfast");

  useEffect(() => {
    setMenuList(
      FilteredMenuList.filter((item) => item.category === selectedCate)
    );
    console.log("menu list in filter", menuList);
    console.log("selected category", selectedCate);
  }, [selectedCate]);
  return (
    <div className="flex flex-col gap-2 sm:flex-row justify-center space-x-2 md:space-x-4 mb-8 text-lg">
      {cetegories &&
        cetegories.map((cat) => (
          <button
            key={cat}
            className={` ${
              selectedCate == cat
                ? "bg-orange-600 text-white"
                : "bg-gray-50 text-black"
            }  border-2 py-2 px-5 rounded-full hover:bg-orange-600 shadow-md `}
            onClick={() => setSelectedCate(cat)}
          >
            {cat}
          </button>
        ))}
    </div>
  );
};

export default MenuButton;

export function SortComponent({ setIsGrid, isGrid }) {
  const { setMenuList, menuList, FilteredMenuList } = useMenu();

  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Starters",
    "Dessert",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    let filteredMenu = FilteredMenuList;

    if (selectedCategory !== "All") {
      filteredMenu = filteredMenu.filter(
        (item) => item.category === selectedCategory
      );
    } else if (selectedCategory == "All") {
      setMenuList(menuList);
    }

    // Update the menu list
    setMenuList(filteredMenu);
  }, [selectedCategory, searchQuery, FilteredMenuList, setMenuList]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      // console.log("search query in filter", searchQuery);
      const filteredMenu = FilteredMenuList.filter((menu) =>
        menu.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // console.log("filteredmenu", filteredMenu);

      setMenuList(filteredMenu);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between mb-8">
        {/* Search Bar */}
        <div className="border-2 border-white hover:border-orange-600 focus:border-orange-600 rounded-xl px-3 shadow-md duration-300 transition-all ease-in-out flex flex-row items-center justify-between w-[80%] sm:w-[50%]">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search menu..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full border-none focus:outline-none"
          />
          <FaSearch
            className="text-gray-600 cursor-pointer"
            onClick={() => handleSearch()}
          />
        </div>

        {/* Category and View Buttons */}
        <div className="flex items-center justify-center">
          <div className="text-orange-600 flex items-center justify-center">
            {/* List View Button */}
            <button
              className={`${
                isGrid === "list"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600"
              } text-3xl p-1 bg-orange-600 rounded-l-md`}
              onClick={() => setIsGrid("list")}
            >
              <HiOutlineViewList />
            </button>

            {/* Grid View Button */}
            <button
              className={`${
                isGrid === "grid"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600"
              } text-3xl p-1 bg-orange-600 rounded-r-md`}
              onClick={() => setIsGrid("grid")}
            >
              <MdGridView />
            </button>
          </div>

          {/* Dropdown for Category Filtering */}
          <select
            className="border-2 rounded-md px-4 py-2 text-gray-600 ml-6 focus:border-orange-600"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
