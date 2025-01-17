import React from "react";
import Navbar from "../layout/Navbar";
function HeroSection() {
  return (
    <section
      className="relative h-[45vh] bg-black bg-opacity-50 w-100vh"
      style={{
        backgroundImage: `url("/images/bg-hero.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 border-b-8 border-red-600">
        <Navbar />
      </div>
    </section>
  );
}

export default HeroSection;
