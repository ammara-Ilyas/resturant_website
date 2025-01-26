import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const LuxuryBanquetPackage = () => {
  const [packageMenu, setPackageMenu] = useState({
    bbq: [],
    karahi: [],
    biryaniAndRice: [],
    desserts: [],
    snacks: [],
    beverages: [],
  });

  const [selectedBBQ, setSelectedBBQ] = useState([]);
  const [selectedKarahi, setSelectedKarahi] = useState([]);
  const [selectedBiryaniRice, setSelectedBiryaniRice] = useState([]);
  const [selectedDesserts, setSelectedDesserts] = useState([]);
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [selectedBeverages, setSelectedBeverages] = useState([]);

  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    // Fetch categories dynamically from menuList
    const bbq = menuList.find((item) => item.name === "BBQ");
    const karahi = menuList.find((item) => item.name === "Karahi");
    const biryaniAndRice = menuList.find(
      (item) => item.name === "Biryani and Rice"
    );
    const desserts = menuList.find((item) => item.name === "Desserts");
    const snacks = menuList.find((item) => item.name === "Snacks");
    const beverages = menuList.find((item) => item.name === "Beverages");

    setPackageMenu({
      bbq: bbq ? bbq.items : [],
      karahi: karahi ? karahi.items : [],
      biryaniAndRice: biryaniAndRice ? biryaniAndRice.items : [],
      desserts: desserts ? desserts.items : [],
      snacks: snacks ? snacks.items : [],
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
          Luxury Banquet Package Offer
        </h2>

        {/* BBQ Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Four BBQ Options:</h3>
          {packageMenu.bbq.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedBBQ.includes(item.name)}
                onChange={(e) => handleCheckboxChange(e, setSelectedBBQ, 4)}
                disabled={
                  !selectedBBQ.includes(item.name) && selectedBBQ.length >= 4
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Karahi Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Two Karahi Options:</h3>
          {packageMenu.karahi.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedKarahi.includes(item.name)}
                onChange={(e) => handleCheckboxChange(e, setSelectedKarahi, 2)}
                disabled={
                  !selectedKarahi.includes(item.name) &&
                  selectedKarahi.length >= 2
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Biryani and Rice Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Two Biryani or Rice Options:</h3>
          {packageMenu.biryaniAndRice.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedBiryaniRice.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedBiryaniRice, 2)
                }
                disabled={
                  !selectedBiryaniRice.includes(item.name) &&
                  selectedBiryaniRice.length >= 2
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Desserts Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Three Desserts:</h3>
          {packageMenu.desserts.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedDesserts.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedDesserts, 3)
                }
                disabled={
                  !selectedDesserts.includes(item.name) &&
                  selectedDesserts.length >= 3
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Snacks Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Two Snacks:</h3>
          {packageMenu.snacks.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedSnacks.includes(item.name)}
                onChange={(e) => handleCheckboxChange(e, setSelectedSnacks, 2)}
                disabled={
                  !selectedSnacks.includes(item.name) &&
                  selectedSnacks.length >= 2
                }
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Beverages Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Three Beverages:</h3>
          {packageMenu.beverages.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedBeverages.includes(item.name)}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedBeverages, 3)
                }
                disabled={
                  !selectedBeverages.includes(item.name) &&
                  selectedBeverages.length >= 3
                }
              />
              {item.name}
            </label>
          ))}
        </div>
      </form>

      {/* Debugging Output */}
      <div style={{ marginTop: "20px" }}>
        <h4>Selected BBQ (Max 4):</h4>
        <ul>
          {selectedBBQ.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Selected Karahi (Max 2):</h4>
        <ul>
          {selectedKarahi.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Selected Biryani and Rice (Max 2):</h4>
        <ul>
          {selectedBiryaniRice.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Selected Desserts (Max 3):</h4>
        <ul>
          {selectedDesserts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Selected Snacks (Max 2):</h4>
        <ul>
          {selectedSnacks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4>Selected Beverages (Max 3):</h4>
        <ul>
          {selectedBeverages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LuxuryBanquetPackage;
