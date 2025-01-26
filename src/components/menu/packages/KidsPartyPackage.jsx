import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const KidsPartyPackage = () => {
  const [packageMenu, setPackageMenu] = useState({
    snacks: [],
    desserts: [],
    beverages: [],
  });

  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [selectedDesserts, setSelectedDesserts] = useState([]);
  const [selectedBeverages, setSelectedBeverages] = useState([]);

  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    // Fetch categories dynamically from menuList
    const snacks = menuList.find((item) => item.name === "Snacks");
    const desserts = menuList.find((item) => item.name === "Desserts");
    const beverages = menuList.find((item) => item.name === "Beverages");

    setPackageMenu({
      snacks: snacks ? snacks.items : [],
      desserts: desserts ? desserts.items : [],
      beverages: beverages ? beverages.items : [],
    });
  }, [menuList]);

  const handleCheckboxChange = (event, stateUpdater, maxSelection) => {
    const value = event.target.value;
    stateUpdater((prev) => {
      if (prev.includes(value)) {
        // Remove if already selected
        return prev.filter((item) => item !== value);
      } else if (prev.length < maxSelection) {
        // Allow up to the max selection
        return [...prev, value];
      }
      return prev; // Do nothing if already at max selection
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="bg-white text-black p-8    rounded-2xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Kids Party Package Offer
        </h2>

        {/* Snacks Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Three Snacks:</h3>
          {packageMenu.snacks.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedSnacks.includes(item.name)}
                onChange={(e) => handleCheckboxChange(e, setSelectedSnacks, 3)}
                disabled={
                  !selectedSnacks.includes(item.name) &&
                  selectedSnacks.length >= 3
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Desserts Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select One Dessert:</h3>
          {packageMenu.desserts.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedDesserts.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedDesserts, 1)
                }
                disabled={
                  !selectedDesserts.includes(item.name) &&
                  selectedDesserts.length >= 1
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Beverages Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Two Beverages:</h3>
          {packageMenu.beverages.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedBeverages.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedBeverages, 2)
                }
                disabled={
                  !selectedBeverages.includes(item.name) &&
                  selectedBeverages.length >= 2
                }
              />
              {item.name}
            </label>
          ))}
        </div>
      </form>

      {/* Additional Services */}
      <div>
        <h3 className="font-semibold">Additional Services:</h3>
        <ul>
          <li>Balloons</li>
          <li>Fun Decor</li>
        </ul>
      </div>

      {/* Debugging Output */}
      <div style={{ marginTop: "20px" }}>
        <h4>Selected Snacks (Max 3):</h4>
        <ul>
          {selectedSnacks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Selected Dessert (Max 1):</h4>
        <ul>
          {selectedDesserts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Selected Beverages (Max 2):</h4>
        <ul>
          {selectedBeverages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KidsPartyPackage;
