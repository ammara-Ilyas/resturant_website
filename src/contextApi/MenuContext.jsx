"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [category, setCategory] = useState("Starters");
  const [menuList, setMenuList] = useState([]);
  const [FilteredMenuList, setFilteredMenuList] = useState([]);
  // Menu data

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data/menu.json");
      const data = await res.json();
      console.log("data", data);
      setMenuList(data);
      setFilteredMenuList(data);
    };
    fetchData();
  }, []);
  return (
    <MenuContext.Provider
      value={{
        category,
        setCategory,
        FilteredMenuList,
        setFilteredMenuList,
        menuList,
        setMenuList,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
