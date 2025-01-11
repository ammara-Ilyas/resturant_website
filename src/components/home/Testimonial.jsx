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

  // State to track the currently active slide
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle slide change
  const handleSlideChange = (nextSlideIndex) => {
    console.log("slide", nextSlideIndex);
    console.log("active slide", activeIndex);

    setActiveIndex(nextSlideIndex);
  };
  const CustomDot = ({ index, onClick, isActive }) => (
    <li
      onClick={() => onClick()}
      className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
        isActive ? "bg-yellow-500" : "bg-gray-400"
      }`}
    />
  );

  return (
    <div
      className="pt-16 pb-36 bg-black bg-opacity-40 px-28"
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
        // arrows
        centerMode={false}
        autoPlay
        showDots={true}
        autoPlaySpeed={3000}
        className="mb-12"
        containerClass="carousel-container"
        draggable
        focusOnSelect={true}
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        // renderArrowsWhenDisabled={false}
        // renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3, // Show 4 items on desktop
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
        // dotListClass="custom-dot-list-style border-2 flex justify-center gap-2 mt-4"
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable
        afterChange={(nextSlide) => handleSlideChange(nextSlide)} // Track active slide index
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-[95%] bg-opacity-80 border-2 border-red-800 rounded-lg overflow-hidden p-6 transition-all duration-300 ${
              activeIndex % testimonials.length === index
                ? "bg-yellow-400 text-white"
                : "bg-white text-black"
            }`}
          >
            <p>index {index + 1}</p>
            <p>active index {activeIndex % testimonials.length}</p>
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
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
