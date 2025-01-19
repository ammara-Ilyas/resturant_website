"use client";
import React, { useEffect, useState } from "react";
import { useMenu } from "@/contextApi/MenuContext";
import { HiOutlineViewList } from "react-icons/hi";
import { MdGridView } from "react-icons/md";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const MenuButton = () => {
  const { FilteredMenuList, menuList, setMenuList } = useMenu();
  const [cetegories, setCategories] = useState([
    "Breakfast",
    "Lunch",
    "Dinner",
    "Starters",
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
    <div className="flex justify-center space-x-4 mb-8 text-lg">
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

  const [sortOption, setSortOption] = useState("Recommended");
  const [searchQuery, setSearchQuery] = useState("");

  // console.log("sort change", sortOption);
  useEffect(() => {
    if (sortOption === "Price: Low to High") {
      setMenuList((prevmenuList) =>
        [...prevmenuList].sort((a, b) => a.pricePerDay - b.pricePerDay)
      );
    } else if (sortOption === "Price: High to Low") {
      setMenuList((prevmenuList) =>
        [...prevmenuList].sort((a, b) => b.pricePerDay - a.pricePerDay)
      );
    }
  }, [sortOption]);
  const handleSortChange = (event) => setSortOption(event.target.value);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    console.log("search query", searchQuery);

    const filteredMenu = FilteredMenuList.filter((menu) =>
      menu.model.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setMenuList(filteredMenu);
  };

  return (
    <>
      {/* Search and Sort Section */}
      <div className="flex items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Search cars..."
          onChange={handleSearchChange}
          className="border rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none"
        />
        <div className="flex items-center justify-center">
          <div className="   text-amber-800 flex  items-center justify-center ">
            <button
              className={`${
                isGrid === "list"
                  ? "bg-red-600 text-white "
                  : "bg-white text-amber-800"
              } text-3xl p-1 bg-red-600 rounded-l-md`}
              onClick={() => setIsGrid("list")}
            >
              <HiOutlineViewList />
            </button>
            <button
              className={`${
                isGrid === "grid"
                  ? "bg-red-600 text-white "
                  : "bg-white text-amber-800"
              } text-3xl p-1 bg-red-600 rounded-r-md`}
              onClick={() => setIsGrid("grid")}
            >
              <MdGridView />
            </button>
          </div>
          <FormControl className="ml-4  min-w-[150px]">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortOption}
              onChange={handleSortChange}
              className="bg-white mt-2 "
            >
              {" "}
              <MenuItem value="Recommended">Recommended</MenuItem>
              <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
              <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}

export const MenuSidebarFilter = () => {
  const { FilteredMenuList, menuList, setMenuList } = useMenu();
  const [cetegories, setCategories] = useState([
    "Breakfast",
    "Lunch",
    "Dinner",
    "Starters",
  ]);
  const [selectedCate, setSelectedCate] = useState("");

  useEffect(() => {
    setMenuList(
      FilteredMenuList.filter((item) => item.category === selectedCate)
    );
    // console.log("menu list in filter", menuList);
    // console.log("selected category", selectedCate);
  }, [selectedCate]);
  return (
    <div className="flex justify-center flex-col border-2 space-y-4 mb-8 text-lg">
      {cetegories &&
        cetegories.map((cat) => (
          <button
            key={cat}
            className="text-gray-600 hover:text-red-500"
            onClick={() => setSelectedCate(cat)}
          >
            {cat}
          </button>
        ))}
    </div>
  );
};
