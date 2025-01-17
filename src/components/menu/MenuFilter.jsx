"use client";
import React, { useEffect, useState } from "react";
import { useMenu } from "@/contextApi/MenuContext";
const MenuFilter = () => {
  const { FilteredMenuList, menuList, setMenuList } = useMenu();
  const [cetegories, setCategories] = useState([]);
  useEffect(() => {
    const cates = Array.from(
      new Set(FilteredMenuList.map((item) => item.category))
    );
    console.log("cate", cates);
    console.log("menu list", menuList, "filtered list", FilteredMenuList);

    setCategories(cates);
  }, []);
  const handleFltered = (cate) => {
    setMenuList(FilteredMenuList.filter((item) => item.category == cate));
  };
  return (
    <div className="flex justify-center space-x-4 mb-8 text-lg">
      {cetegories &&
        cetegories.map((cat) => (
          <button
            key={cat}
            className="text-gray-600 hover:text-red-500"
            onClick={() => handleFltered(cat)}
          >
            {cat}
          </button>
        ))}
    </div>
  );
};

export default MenuFilter;
