"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMenuList,
  setLoading,
  setFilteredMenuList,
} from "@/store/slice/MenuSlice";

const MenuProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { menuList, filteredMenuList, category, loading, isBook } = useSelector(
    (state) => state.menu
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/menu.json");
        const data = await response.json();
        dispatch(setMenuList(data.categories));
        dispatch(setFilteredMenuList(data.categories));
        console.log("menu list", menuList);
        console.log("menu filter list", filteredMenuList);
      } catch (error) {
        console.error(error);
      }
      dispatch(setLoading(false));
    };
    fetchData();
  }, [dispatch]);

  console.log("menu items", menuList);
  console.log("menu filtered items", filteredMenuList);

  return <>{children}</>;
};

export default MenuProvider;
