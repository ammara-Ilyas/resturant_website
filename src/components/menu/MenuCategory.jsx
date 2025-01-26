"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const MenuCategory = ({ category }) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      offset: 100, // Offset from the top before animation starts
    });
  });
  return (
    <section
      className="relative h-[20vh] mx-9 rounded-lg bg-black bg-opacity-50 "
      style={{
        backgroundImage: `url("/images/bg-hero.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70  rounded-lg h-full ">
        <div className="flex items-center justify-center h-full">
          <h3
            className="text-white font-bold capitalize text-4xl sm:text-6xl  letter-wide "
            data-aos="fade-down"
            data-aos-delay={50}
          >
            {category}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;
