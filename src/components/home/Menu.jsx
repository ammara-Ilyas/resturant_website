import React from "react";

const PopularMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Chicken Burger",
      price: "$115",
      description: "Lorem ipsum clita erat amet dolor justo diam",
      image: "/images/chicken-burger-1.jpg",
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: "$115",
      description: "Lorem ipsum clita erat amet dolor justo diam",
      image: "/images/chicken-burger-2.jpg",
    },
    {
      id: 3,
      name: "Chicken Burger",
      price: "$115",
      description: "Lorem ipsum clita erat amet dolor justo diam",
      image: "/images/chicken-burger-3.jpg",
    },
    {
      id: 4,
      name: "Chicken Burger",
      price: "$115",
      description: "Lorem ipsum clita erat amet dolor justo diam",
      image: "/images/chicken-burger-4.jpg",
    },
    {
      id: 5,
      name: "Chicken Burger",
      price: "$115",
      description: "Lorem ipsum clita erat amet dolor justo diam",
      image: "/images/chicken-burger-5.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-orange-500">Food Menu</h2>
          <h3 className="text-4xl font-extrabold text-gray-800 mt-2">
            Most Popular Items
          </h3>
          {/* Tabs */}
          <div className="flex justify-center items-center gap-8 mt-6">
            <div className="flex items-center text-orange-500">
              <span className="text-2xl">☕</span>
              <span className="ml-2 font-semibold">Popular Breakfast</span>
            </div>
            <div className="flex items-center text-gray-500">
              <span className="text-2xl">🍔</span>
              <span className="ml-2 font-semibold">Special Launch</span>
            </div>
            <div className="flex items-center text-gray-500">
              <span className="text-2xl">🍽️</span>
              <span className="ml-2 font-semibold">Lovely Dinner</span>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b border-gray-200 pb-4"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              {/* Details */}
              <div className="ml-4 flex-1">
                <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              {/* Price */}
              <div className="text-orange-500 font-bold">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
