import React from "react";
import Navbar from "../layout/Navbar";
function HeroSection({ text }) {
  return (
    <section
      className="relative h-[55vh] bg-black bg-opacity-50 w-100vh"
      style={{
        backgroundImage: `url("/images/bg-hero.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 border-b-8 border-orange-600">
        <Navbar />
        <h3 className="text-white font-bold capitalize text-6xl letter-wide absolute right-[40%] top-[50%]">
          {text}
        </h3>
      </div>
    </section>
  );
}

export default HeroSection;
