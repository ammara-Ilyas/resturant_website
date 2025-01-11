"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const ImageGrid = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the top before animation starts
      delay: 100, // Delay in milliseconds
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-2 p-4 ">
      <div className=" w-[48%] h-[50%] ">
        {" "}
        <Image
          src="/images/about/about-1.jpg"
          alt={`Image `}
          width={500}
          height={500}
          className="w-[100%] h-[100%]  shadow-lg "
          data-aos="zoom-in"
        />{" "}
      </div>
      <div className=" w-[48%] h-[40%] mt-auto mr-auto">
        <Image
          src="/images/about/about-2.jpg"
          alt={`Image `}
          width={500}
          height={500}
          className="w-[78%] mt-auto h-[80%] shadow-lg"
          data-aos="zoom-in"
        />{" "}
      </div>
      <div className=" w-[48%] h-[50%] ">
        <Image
          src="/images/about/about-3.jpg"
          alt={`Image `}
          width={500}
          height={500}
          className="w-[78%] mb-auto ml-auto h-[85%] shadow-lg"
          data-aos="zoom-in"
        />{" "}
      </div>{" "}
      <div className=" w-[48%] h-[50%] ">
        {" "}
        <Image
          src="/images/about/about-1.jpg"
          alt={`Image `}
          width={500}
          height={500}
          className="w-[100%] h-[100%]  shadow-lg "
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
