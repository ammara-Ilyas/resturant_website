import React from "react";
import Heading from "../miniWidgets/Heading";
import VideoPopup from "../miniWidgets/Video";
import BookingForm from "../miniWidgets/BookingForm";
const ReservationForm = () => {
  return (
    <div className="bg-gray-50 py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 px-8  items-center">
          {/* Left Section: Image with Play Button */}
          {/* <div className="relative">
            <img
              src="/images/dining.jpg"
              alt="Dining"
              className="rounded-lg shadow-lg object-cover w-full"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-5.197-3.507A1 1 0 008 8.507v6.986a1 1 0 001.555.832l5.197-3.507a1 1 0 000-1.664z"
                  />
                </svg>
              </button>
            </div>
          </div> */}
          <VideoPopup />
          {/* Right Section: Form */}
          <div className="bg-[#0b132a] text-white shadow-lg p-8">
            <div className="flex items-center ">
              <div>
                {" "}
                <Heading text="Reservation" />
              </div>{" "}
              <span className="h-[2px] w-[7%] items-center border-[1px] rounded-md border-yellow-500"></span>{" "}
            </div>

            <h3 className="text-3xl font-bold mb-6 font-sans letter-wide">
              Book A Table Online
            </h3>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
