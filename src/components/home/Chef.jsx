import React from "react";

const chefsData = [
  {
    name: "Walter White",
    title: "Master Chef",
    description:
      "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    imgSrc: "/images/chef1.jpg", // Replace with the actual image URL
  },
  {
    name: "Sarah Jhonson",
    title: "Patissier",
    description:
      "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
    imgSrc: "/images/chef2.jpg", // Replace with the actual image URL
  },
  {
    name: "William Anderson",
    title: "Cook",
    description:
      "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
    imgSrc: "/images/chef3.jpg", // Replace with the actual image URL
  },
];

const ChefsCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {chefsData.map((chef, index) => (
        <div
          key={index}
          className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden border"
        >
          <img
            src={chef.imgSrc}
            alt={chef.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">{chef.name}</h3>
            <p className="text-sm font-medium text-gray-500">{chef.title}</p>
            <p className="text-gray-600 mt-3 text-sm">{chef.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefsCard;
