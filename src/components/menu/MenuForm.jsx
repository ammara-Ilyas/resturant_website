"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const MenuForm = () => {
  const [selectedParty, setSelectedParty] = useState("");
  const [isMenu, setisMenu] = useState(true);
  const [partyOptions, setPartyOptions] = useState([]);
  const [menuOptions, setMenuOptions] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the top before animation starts
    });
  }, []);
  // Use useEffect with an empty dependency array to fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/menupackage.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("data in menuform", data.packages);

        setPartyOptions(data.packages.map((item) => item.name));
        setMenuOptions(data.packages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleSelection = (event) => {
    setSelectedParty(event.target.value);
  };

  return isMenu ? (
    <div className="bg-[#0b132a] relative min-h-screen py-10 flex items-center justify-center">
      <div
        className="bg-white text-white p-8 rounded-2xl shadow-md w-full max-w-lg"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Select Menu Package
        </h1>
        <form>
          {partyOptions.length > 0 ? (
            partyOptions.map((party, index) => (
              <div key={index} className="mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="party"
                    value={party}
                    checked={selectedParty === party}
                    onChange={handleSelection}
                    className="mr-3 h-5 w-5 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="text-gray-700 text-lg">{party}</span>
                </label>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Loading options...</p>
          )}
        </form>
        {selectedParty && (
          <div className="mt-6 p-4 bg-orange-100 rounded-lg">
            <h2 className="text-lg font-semibold text-orange-600">
              Selected Party: {selectedParty}
            </h2>
            <p className="text-gray-700 mt-2">
              Render specific content here based on the selected party.
            </p>
          </div>
        )}
      </div>
      {/* Close button */}
      <button
        className="absolute top-5 right-5 text-white text-2xl font-bold z-50"
        onClick={() => setisMenu(false)}
      >
        &times;
      </button>
    </div>
  ) : (
    <div>Hello</div>
  );
};

export default MenuForm;
