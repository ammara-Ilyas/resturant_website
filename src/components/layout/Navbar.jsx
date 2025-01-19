"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../miniWidgets/Button";
import { useRouter } from "next/navigation";
import Logo from "./components/Logo";
import Image from "next/image";
const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(true);
  };
  const links = [
    {
      nav: "home",
      link: "/",
    },
    {
      nav: "services",
      link: "/",
    },
    {
      nav: "about",
      link: "/about",
    },
    {
      nav: "menu",
      link: "/menu",
    },
  ];
  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 font-sans text-white ${
          isScrolled ? "bg-gray-900 shadow-lg" : `bg-opacity-20`
        }`}
      >
        <div className="flex justify-between items-center flex-row px-10">
          {" "}
          {/* Logo */}
          <Logo />
          {/* Links */}
          <div className="hidden md:flex items-center justify-center gap-2">
            <>
              {links.map((page, i) => (
                <Link
                  key={i}
                  href={page.link}
                  className={`relative  mx-3 py-[2px] border-b-2 border-transparent hover:border-transparent group text-sm font-semibold cursor-pointer uppercase 
                  ${
                    router.pathname === page.link
                      ? "text-yellow-600"
                      : "text-white"
                  }
                  `}
                >
                  {page.nav}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Button text="Book a tabel" />
            </>
          </div>
          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block md:hidden">
            <AiOutlineMenu size={20} className="text-white" />
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <div
          className={`${
            nav
              ? "fixed md:hidden left-0 top-0 w-[80%] h-full ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          } text-white pt-8`}
        >
          {/* Mobile Logo */}
          {/* Logo */}
          <div className=" flex items-center justify-between px-10 ">
            <div className="text-2xl font-bold bg-white p-2 rounded px-3 text-black">
              <span className="text-red-500">R</span>umble
            </div>
            <AiOutlineClose
              size={20}
              className="text-white"
              onClick={() => setNav(false)}
            />
          </div>
          {/* Mobile Navigation Items */}
          <div className="flex flex-col gap-2 mt-9">
            {" "}
            <>
              {links.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="p-4 border-b rounded-xl text-white hover:bg-red-600 duration-300 hover:text-white cursor-pointer border-gray-600  font-semibold capitalize"
                >
                  {item.nav}
                </Link>
              ))}
              {/* <Butnton text="Booking" /> */}
            </>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
