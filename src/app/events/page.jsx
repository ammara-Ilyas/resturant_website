import React from "react";
import { EventGrid } from "@/components/home/Event";
import { HeadingText } from "@/components/miniWidgets/Heading";
import HeroSection from "@/components/miniWidgets/HeroSection";
const page = () => {
  return (
    <>
      <HeroSection text="Events" />
      <div className="mt-9">
        <HeadingText heading="Our Special Events" text="Event" />
        <EventGrid />
      </div>
    </>
  );
};

export default page;
