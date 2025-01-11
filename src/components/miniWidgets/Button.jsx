import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-yellow-500 uppercase text-white hover:bg-yellow-600 font-serif py-3 px-6 rounded-sm">
      {text}
    </button>
  );
};

export default Button;
