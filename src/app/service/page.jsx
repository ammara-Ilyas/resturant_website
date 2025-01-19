import React from "react";
import FeatureCards from "@/components/home/Feature";
import Event from "@/components/home/Event";
import HeroSection from "@/components/miniWidgets/HeroSection";
const page = () => {
  return (
    <>
      <HeroSection text="Services" />
      <Event />
      <FeatureCards />
    </>
  );
};

export default page;
