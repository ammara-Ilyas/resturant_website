"use client";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const router = useRouter();
  const [isBook, setIsBook] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    people: "1",
    date: "",
    time: "",
    specialRequest: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow only numeric input
    if (/^\d*$/.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isLogin = localStorage.getItem("user");
    if (isLogin) {
      // Validate phone number
      if (!formData.phone) {
        toast.error("Phone number is required!");
        return;
      }

      if (formData.phone.length < 10) {
        toast.error("Phone number must be at least 10 digits!");
        return;
      }
      setLoading(true);
      try {
        // Simulate API call
        //   const response = await fetch("/api/bookings", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(formData),
        //   });

        //   if (!response.ok) {
        //     throw new Error("Failed to submit booking.");
        //   }
        console.log("booking form", formData);

        //   const result = await response.json();
        toast.success("Booking submitted successfully!");
        setIsBook(false);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          people: "People 1",
          date: "",
          time: "",
          specialRequest: "",
        });
      } catch (error) {
        toast.error("Error submitting booking. Please try again.");
        console.error("Error:", error);
        setIsBook(false);
      } finally {
        setLoading(false);
        setIsBook(false);
      }
    } else {
      router.push("/contact/login");
      setIsBook(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
        </div>
        {/* Row 2: Phone Number & Number of People */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="Your Phone Number"
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
          <input
            name="people"
            type="number"
            placeholder="1"
            value={formData.people}
            onChange={handleChange}
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
        </div>
        {/* Row 3: Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600"
          />
        </div>
        {/* Row 4: Special Request */}
        <textarea
          rows="4"
          name="specialRequest"
          value={formData.specialRequest}
          onChange={handleChange}
          placeholder="Special Request"
          className="p-3 rounded bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring focus:ring-orange-600 mb-4"
        ></textarea>
        {/* Submit Button with Loader */}
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 flex justify-center items-center"
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "BOOK NOW"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
