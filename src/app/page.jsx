"use client";
import Image from "next/image";
import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/Feature";
import About from "@/components/home/About";
import ChefsCard from "@/components/home/Chef";
import ReservationForm from "@/components/home/ReservationForm";
import TestimonialSlider from "@/components/home/Testimonial";
import EventSlider from "@/components/home/Event";
// import CatSlider from "@/components/miniWidgets/Slider";
import Wrapper from "@/components/miniWidgets/Wrapper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setMenuList,
  setFilteredMenuList,
  setLoading,
} from "@/store/slice/MenuSlice";
export default function Home() {
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

  return (
    <>
      <Hero />
      <About />
      <FeatureCards />
      {/* <Menu /> */}
      <EventSlider />
      <ChefsCard />
      <ReservationForm />
      <TestimonialSlider />
    </>
  );
}
