const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4">
      <div className="flex-1">
        <h2 className="text-primary font-bold text-lg uppercase mb-2">
          About Us
        </h2>
        <h1 className="text-secondary text-4xl font-bold mb-4">
          Welcome to <span className="text-primary">🍴 Restoran</span>
        </h1>
        <p className="text-gray-500 mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p className="text-gray-500 mb-6">
          Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
          magna dolore erat amet.
        </p>
        <div className="flex gap-8">
          <div>
            <h3 className="text-primary text-5xl font-bold">15</h3>
            <p className="text-gray-500">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-primary text-5xl font-bold">50</h3>
            <p className="text-gray-500">Popular Master Chefs</p>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 mt-6 lg:mt-0">
        <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold shadow-md hover:bg-orange-600 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
