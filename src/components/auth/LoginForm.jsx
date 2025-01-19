"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  // State for form data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start loading
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      const isSuccessful = Math.random() > 0.5;
      if (isSuccessful) {
        toast.success("Login successful! 🎉", {
          position: "top-center",
        });
      } else {
        toast.error("Login failed. Please try again.", {
          position: "top-center",
        });
      }

      // Reset form fields
      setLoginData({
        email: "",
        password: "",
      });
    }, 2000);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <div
      className="p-6 w-full max-w-md bg-gray-800/50  h-full shadow-md rounded-md py-5"
      data-aos="fade-up"
      data-aos-delay={300}
    >
      <h1 className="text-2xl font-bold text-center text-orange-600">Login</h1>

      <ToastContainer />

      <form className="flex flex-col gap-6 mt-6" onSubmit={handleSubmit}>
        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:bg-transparent "
          />
        </div>

        {/* Password Input */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <p className="text-end pt-2 px-2">
            Don't have account{" "}
            <Link
              href="/contact/register"
              className="underline text-blue-600 italic"
            >
              Register
            </Link>{" "}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 flex justify-center items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md transition duration-300 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin h-5 w-5 border-2 border-t-2 border-white border-t-transparent rounded-full"></div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
