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
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`p-6 rounded-lg shadow-md hover:bg-red-600 group hover:text-white duration-300 transition-transform ease-in-out`}
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
  );
}
