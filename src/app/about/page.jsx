import React from "react";
import About from "@/components/home/About";
import HeroSection from "@/components/miniWidgets/HeroSection";
import ChefsCard from "@/components/home/Chef";
const page = () => {
  return (
    <>
      <HeroSection text="About Us" />
      <About />
      <ChefsCard />
    </>
  );
};

export default page;
