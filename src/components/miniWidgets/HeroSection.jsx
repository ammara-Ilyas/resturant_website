"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../layout/Navbar";
function HeroSection({ text }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the top before animation starts
    });
  }, []);
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
        <h3
          className="text-white font-bold capitalize text-6xl letter-wide absolute right-[40%] top-[50%]"
          data-aos="fade-in"
          data-aos-delay={200}
        >
          {text}
        </h3>
      </div>
    </section>
  );
}

export default HeroSection;
