"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../miniWidgets/Heading";
export default function FeatureCards() {
  const features = [
    {
      id: 1,
      icon: "👨‍🍳", // You can replace this with an actual icon component/image
      title: "Master Chefs",
      description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      id: 2,
      icon: "🍴",
      title: "Quality Food",
      description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      id: 3,
      icon: "🛒",
      title: "Online Order",
      description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      id: 4,
      icon: "🎧",
      title: "24/7 Service",
      description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      highlight: true, // To mark the highlighted card
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the top before animation starts
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex items-center w-[70%] justify-center">
        {" "}
        <span className="h-[2px] w-[8%] mr-1 border-[1px] rounded-md border-custom-color"></span>{" "}
        <div className="w-auto">
          {" "}
          <Heading text="Sevices" />
        </div>{" "}
        <span className="h-[2px] w-[8%] border-[1px] ml-1 rounded-md border-custom-color"></span>{" "}
      </div>
      <h2 className="text-black mb-6 text-4xl font-serif font-bold  letter-wide">
        Our Fast Sevices
      </h2>
      <div
        style={{
          backgroundImage: "url('/images/bg-hero.jpg')",
          backgroundOrigin: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-gray-800  bg-opacity-60 py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 300}
                  key={feature.id}
                  className={`p-6 rounded-lg bg-white  shadow-md duration-300 transition-all hover:bg-orange-600 group hover:text-white  ease-in-out`}
                >
                  <div className={`text-4xl mb-4 group-hover:text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
