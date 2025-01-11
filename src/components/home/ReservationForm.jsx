import React from "react";

const ReservationForm = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Image with Play Button */}
          <div className="relative">
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
          </div>

          {/* Right Section: Form */}
          <div className="bg-[#0b132a] text-white rounded-lg shadow-lg p-8">
            <h2 className="text-lg text-orange-400 font-semibold">
              Reservation
            </h2>
            <h3 className="text-3xl font-bold mb-6">Book A Table Online</h3>
            <form>
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-400"
                />
              </div>
              {/* Row 2: Date & Time, Number of People */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="datetime-local"
                  className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-400"
                />
                <select className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-400">
                  <option>People 1</option>
                  <option>People 2</option>
                  <option>People 3</option>
                  <option>People 4</option>
                </select>
              </div>
              {/* Row 3: Special Request */}
              <textarea
                rows="4"
                placeholder="Special Request"
                className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-400 mb-4"
              ></textarea>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300"
              >
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
