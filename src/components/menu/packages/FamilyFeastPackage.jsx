import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const FamilyFeastPackage = () => {
  const [packageMenu, setPackageMenu] = useState({
    snacks: [],
    karahi: [],
    biryaniAndRice: [],
    desserts: [],
    beverages: [],
  });

  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [selectedKarahi, setSelectedKarahi] = useState([]);
  const [selectedBiryaniRice, setSelectedBiryaniRice] = useState([]);
  const [selectedDesserts, setSelectedDesserts] = useState([]);
  const [selectedBeverages, setSelectedBeverages] = useState([]);

  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    // Fetch categories dynamically from menuList
    const snacks = menuList.find((item) => item.name === "Snacks");
    const karahi = menuList.find((item) => item.name === "Karahi");
    const biryaniAndRice = menuList.find(
      (item) => item.name === "Biryani and Rice"
    );
    const desserts = menuList.find((item) => item.name === "Desserts");
    const beverages = menuList.find((item) => item.name === "Beverages");

    setPackageMenu({
      snacks: snacks ? snacks.items : [],
      karahi: karahi ? karahi.items : [],
      biryaniAndRice: biryaniAndRice ? biryaniAndRice.items : [],
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
          Family Feast Package Offer
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

        {/* Karahi Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Karahi Option:</h3>
          {packageMenu.karahi.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                name="karahi"
                value={item.name}
                checked={selectedKarahi.includes(item.name)}
                onChange={() => setSelectedKarahi([item.name])}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Biryani and Rice Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Biryani or Rice Option:</h3>
          {packageMenu.biryaniAndRice.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                name="biryaniRice"
                value={item.name}
                checked={selectedBiryaniRice.includes(item.name)}
                onChange={() => setSelectedBiryaniRice([item.name])}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Desserts Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Dessert Option:</h3>
          {packageMenu.desserts.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                name="dessert"
                value={item.name}
                checked={selectedDesserts.includes(item.name)}
                onChange={() => setSelectedDesserts([item.name])}
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

      {/* Debugging Output (optional) */}
      <div style={{ marginTop: "20px" }}>
        <h4>Selected Snacks (Max 3):</h4>
        <ul>
          {selectedSnacks.map((snack, index) => (
            <li key={index}>{snack}</li>
          ))}
        </ul>

        <h4>Selected Karahi Option:</h4>
        <ul>
          {selectedKarahi.map((karahi, index) => (
            <li key={index}>{karahi}</li>
          ))}
        </ul>

        <h4>Selected Biryani or Rice Option:</h4>
        <ul>
          {selectedBiryaniRice.map((biryaniRice, index) => (
            <li key={index}>{biryaniRice}</li>
          ))}
        </ul>

        <h4>Selected Dessert Option:</h4>
        <ul>
          {selectedDesserts.map((dessert, index) => (
            <li key={index}>{dessert}</li>
          ))}
        </ul>

        <h4>Selected Beverages (Max 2):</h4>
        <ul>
          {selectedBeverages.map((beverage, index) => (
            <li key={index}>{beverage}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FamilyFeastPackage;
