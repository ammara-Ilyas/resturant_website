"use client";
import React, { useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "photo", label: "Photo" },
  { id: "menu", label: "Menu" },
  { id: "review", label: "Review" },
];
export const ScrollToSection = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* Navigation Links */}
      <div className="flex space-x-4 bg-orange-600 text-white my-3 font-semibold rounded-t-lg py-1 ">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className="px-4 py-2  rounded-md transition-all duration-200 capitalize"
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const SingleEventDes = () => {
  const [showFullText, setShowFullText] = useState(false);

  const text = [
    "Good for special occasions",
    "Great for creative cocktails",
    "Lively",
  ];
  return (
    <div>
      <ScrollToSection />
      <div className="flex jb items-center justify-center gap-4 mx-auto">
        {text.map((btn, i) => (
          <button
            className="border-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 duration-300 transition-all ease-in-out cursor-text"
            key={i}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="mt-6  ">
        <h2 className="text-lg font-bold  px-4 rounded-t-lg">Overview</h2>
        <div className="mt-3 px-6">
          {" "}
          <p className="text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fermentum, sem in lacinia luctus, metus nisi gravida sapien, ac
            bibendum libero metus at urna. Vestibulum in augue vitae mi faucibus
            venenatis et at purus. Praesent tincidunt dolor atiaculis malesuada.
            Nam vulputate ligula vel nulla hendrerit, sitamet cursus ligula
            cursus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi consequatur dicta obcaecati aut, qui praesentium debitis.
            Dolor quod ullam cum.
          </p>
          {showFullText ? (
            <>
              <p className="text-gray-600 leading-6 pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                expedita, pariatur optio error laborum eaque perspiciatis?
                Reprehenderit harum voluptas exercitationem.
              </p>
              <p className="text-gray-600 leading-6 pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                perferendis rem sint, natus saepe magni vero, porro inventore at
                amet sed facilis beatae. A assumenda deleniti inventore,
                corrupti deserunt fugiat!
              </p>
              <span
                className="text-orange-600 text-sm cursor-pointer hover:text-orange-700 "
                onClick={() => setShowFullText(false)}
              >
                Read less
              </span>
            </>
          ) : (
            <span
              className="text-orange-600 text-sm cursor-pointer hover:text-orange-700 "
              onClick={() => setShowFullText(true)}
            >
              Read more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleEventDes;
