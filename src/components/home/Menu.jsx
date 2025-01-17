import React from "react";
import MenuSlider from "../miniWidgets/MenuSlider";
const PopularMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Chicken Burger",
      price: "$115",
      description: "Lorem ipsum clita erat amet dolor justo diam",
      image: "/images/bg-hero.jpg",
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: "$115",
      description: "Lorem ipsum clita erat amet dolor justo diam",
      image: "/images/bg-hero.jpg",
    },
    {
      id: 3,
      name: "Chicken Burger",
      price: "$115",
      description: "Lorem ipsum clita erat amet dolor justo diam",
      image: "/images/bg-hero.jpg",
    },
    {
      id: 4,
      name: "Chicken Burger",
      price: "$115",
      description: "Lorem ipsum clita erat amet dolor justo diam",
      image: "/images/bg-hero.jpg",
    },
    {
      id: 5,
      name: "Chicken Burger",
      price: "$115",
      description: "Lorem ipsum clita erat amet dolor justo diam",
      image: "/images/bg-hero.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <MenuSlider products={menuItems} />
    </div>
  );
};

export default PopularMenu;
