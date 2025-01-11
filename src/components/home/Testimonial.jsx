"use client";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Client 1",
      profession: "Designer",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Client 2",
      profession: "Developer",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      message:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Client 3",
      profession: "Manager",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      message:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <div
      className="pt-16 pb-36  bg-black bg-opacity-40 px-28"
      style={{
        paddingBottom: "30px",
        position: "relative",
        backgroundImage: `url("/images/bg_02.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000} // Set to 3000ms (3 seconds)
        centerMode={false}
        className="mb-12"
        containerClass="carousel-container"
        // dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4, // Show 4 items on desktop
            partialVisibilityGutter: 30, // Adjust gutter between cards
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2, // Show 2 items on tablets
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1, // Show 1 item on mobile
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        // showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="w-[95%] bg-white bg-opacity-80 rounded-lg overflow-hidden">
          <div className="w-full max-w-3xl mx-auto p-4">
            <h2 className="text-center text-2xl font-bold mb-4">
              Our Clients Say!!!
            </h2>
            <div className="relative">
              <div className="flex transition-transform duration-500 ease-in-out">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`w-full 
                       
                     
                      `}
                  >
                    <p className="mb-4">{testimonial.message}</p>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full w-12 h-12"
                      />
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.profession}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
