"use client";
import { useState, useRef, useEffect } from "react";
import { EventCard } from "../miniWidgets/Card";
import Heading from "../miniWidgets/Heading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
const CustomDot = ({ onClick, ...rest }) => {
  const { active, index } = rest; // Get dot's index and active state
  // console.log("rest", rest);

  const handleClick = () => {
    console.log(`Dot clicked for card index: ${index}`); // Log the card index
    onClick();
  };

  return (
    <li
      style={{
        display: "inline-block",
        cursor: "pointer",
        background: active ? "#FF5722" : "#CCC",
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        border: "2px solid green",
      }}
      onClick={handleClick}
    />
  );
};

const EventSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the top before animation starts
    });
  }, []);
  const testimonials = [
    {
      party: "Custom Parties",
      price: 275,
      image: "/images/events/event_01.avif",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus magni repudiandae earum totam ea tenetur, officiis facilis? A, consectetur.",
    },
    {
      party: "Private Parties",
      price: 265,
      image: "/images/events/event_02.jpg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus magni repudiandae earum totam ea tenetur, officiis facilis? A, consectetur.",
    },
    {
      party: "Wedding Parties",
      price: 255,
      image: "/images/events/event_03.jpg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus magni repudiandae earum totam ea tenetur, officiis facilis? A, consectetur.",
    },
    {
      party: "Birthday Parties",
      price: 290,
      image: "/images/events/event_04.jpg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus magni repudiandae earum totam ea tenetur, officiis facilis? A, consectetur.",
    },
    {
      party: "Custom Parties",
      price: 300,
      image: "/images/events/event_05.jpg",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus magni repudiandae earum totam ea tenetur, officiis facilis? A, consectetur.",
    },
  ];

  // State to track the currently active slide
  const carouselRef = useRef(null); // Ref to access the carousel instance
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to programmatically center the active card
  const centerActiveCard = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index); // Navigate to the specific slide
    }
    setActiveIndex(index); // Update active index
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Show 4 items on desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // Show 2 items on tablets
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show 1 item on mobile
    },
  };
  return (
    <div className="my-20 ">
      <div className="flex items-center w-[70%] justify-center mx-auto ">
        {" "}
        <span className="h-[2px] w-[8%] mr-1 border-[1px] rounded-md border-custom-color"></span>{" "}
        <div className="w-[6%]">
          {" "}
          <Heading text="Event" />
        </div>{" "}
        <span className="h-[2px] w-[8%] border-[1px] ml-2 rounded-md border-custom-color"></span>{" "}
      </div>
      <h2 className="text-black text-4xl mt-2 mb-6 text-center font-serif font-bold  letter-wide">
        Our Special Events
      </h2>

      <div className="w-[100%] mx-auto ">
        <Carousel
          ref={carouselRef} // Attach the ref here
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          showDots={false}
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
          renderDotsOutside
          responsive={responsive}
          // dotListClass="custom-dot-list-style border-2 flex justify-center gap-2 mt-4"
          customDot={<CustomDot />}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          swipeable
          afterChange={(nextSlideIndex) => setActiveIndex(nextSlideIndex)} // Track active index
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-l-[1px]"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 300}
            >
              <EventCard testimonial={testimonial} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default EventSlider;
