"use client";
import { useState, useRef, useEffect } from "react";
import { EventCard } from "../miniWidgets/Card";
import Heading, { HeadingText } from "../miniWidgets/Heading";
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
const events = [
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
    price: 275,
    image: "/images/events/event_01.avif",
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
const EventSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const centerActiveCard = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
    }
    setActiveIndex(index);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1, // Show 1 item on mobile
    },
  };
  return (
    <div className="my-20 ">
      <HeadingText heading=" Our Special Events" text="Event" />

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
          {events.map((testimonial, index) => (
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

export const EventGrid = () => {
  return (
    <div className="border-2 grid gap-[1px] grid-col-1 md:grid-cols-2 lg:grid-cols-3">
      {events.map((testimonial, index) => (
        <div
          key={index}
          className="  w-[100%]"
          // data-aos="fade-in"
          // data-aos-delay={index * 300}
        >
          <EventCard testimonial={testimonial} />
        </div>
      ))}
    </div>
  );
};
