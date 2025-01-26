"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../miniWidgets/Heading";
import BookingForm from "./BookingForm";
const Booking = () => {
  const [isBook, setIsBook] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <>
      {isBook && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-90 h-screen w-full flex items-center justify-center z-50">
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-2xl font-bold z-50"
            onClick={() => setIsBook(false)}
          >
            &times;
          </button>
          {/* Slider component */}
          <div
            className="bg-[#0b132a] text-white shadow-lg p-8"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="flex items-center ">
              <div>
                {" "}
                <Heading text="Reservation" />
              </div>{" "}
              <span className="h-[2px] w-[7%] items-center border-[1px] rounded-md border-orange-500"></span>{" "}
            </div>

            <h3 className="text-3xl font-bold mb-6 font-sans letter-wide">
              Book A Table Online
            </h3>
            <BookingForm />
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default Booking;
