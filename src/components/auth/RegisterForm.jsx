"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
const RegisterForm = () => {
  const router = useRouter();

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for loading spinner
  const [isLoading, setIsLoading] = useState(false);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password mismatch validation
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-right",
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const isSuccessful = true; // Set this based on your API response

      if (isSuccessful) {
        toast.success("Registration successful! 🎉", {
          position: "top-right",
        });

        // Reset form fields after successful submission
        setRegisterData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        toast.error("Registration failed. Please try again.", {
          position: "top-right",
        });
      }

      // Stop loading
      setIsLoading(false);
    }, 2000);
    router.push("/contact/login");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <div
      className="p-6 w-full max-w-md bg-gray-800 shadow-md rounded-md"
      data-aos="fade-up"
      data-aos-delay={300}
    >
      <h1 className="text-2xl font-bold text-center text-orange-600">
        Register
      </h1>
      {/* <ToastContainer /> */}

      <form className="flex flex-col gap-6 mt-6" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>

        {/* Password Input */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registerData.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={registerData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <p className="text-end pt-2 px-2">
            Already have account{" "}
            <Link
              href="/contact/login"
              className="underline text-blue-600 italic"
            >
              Login
            </Link>
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
            // Circular Progress Icon (Spinner)
            <div className="animate-spin h-5 w-5 border-2 border-t-2 border-white border-t-transparent rounded-full"></div>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
