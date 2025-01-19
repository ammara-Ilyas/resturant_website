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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/menu.json");
        let data = await response.json();
        console.log("data in context", data);
        setMenuList(data);
        setFilteredMenuList(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
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
        loading,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
