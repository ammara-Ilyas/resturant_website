import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const TeaPackage = () => {
  const [teaMenu, setTeaMenu] = useState({
    tea: ["Tea", "Coffee"],
    snacks: [],
  });

  const [selectedTea, setSelectedTea] = useState(""); // Track selected tea/coffee
  const [selectedSnacks, setSelectedSnacks] = useState([]); // Track selected snacks

  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    // Fetch snacks from the menu list
    const snacks = menuList.find((item) => item.name === "Snacks");
    if (snacks) {
      setTeaMenu((prev) => ({ ...prev, snacks: snacks.items }));
    }
  }, [menuList]);

  const handleTeaChange = (event) => {
    setSelectedTea(event.target.value);
  };

  const handleSnackChange = (event) => {
    const value = event.target.value;
    setSelectedSnacks((prev) => {
      if (prev.includes(value)) {
        // Remove if already selected
        return prev.filter((item) => item !== value);
      } else if (prev.length < 2) {
        // Allow up to 2 selections
        return [...prev, value];
      }
      return prev;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
        Tea Package Offer
      </h2>
      <form className="bg-white text-black p-8 border-2 border-red-600   rounded-2xl shadow-md w-full max-w-lg">
        {/* Tea/Coffee Radio Inputs */}
        <div className="">
          <h3 className="font-semibold">Select One</h3>
          {teaMenu.tea.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                name="tea-package"
                value={item}
                checked={selectedTea === item}
                onChange={handleTeaChange}
              />
              {item}
            </label>
          ))}
        </div>

        {/* Snacks Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Two Snacks</h3>
          {teaMenu.snacks.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedSnacks.includes(item.name)}
                onChange={handleSnackChange}
                disabled={
                  !selectedSnacks.includes(item.name) &&
                  selectedSnacks.length >= 2
                } // Disable if 2 are already selected
              />
              {item.name}
            </label>
          ))}
        </div>
      </form>

      {/* Debugging Output (optional) */}
      <div style={{ marginTop: "20px" }}>
        <h4>Selected Tea/Coffee:</h4>
        <p>{selectedTea}</p>
        <h4>Selected Snacks:</h4>
        <ul>
          {selectedSnacks.map((snack, index) => (
            <li key={index}>{snack}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const NormalPackage = () => {
  const [packageMenu, setPackageMenu] = useState({
    snacks: [],
    biryaniAndRice: [],
    beverages: [],
  });

  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [selectedBiryaniRice, setSelectedBiryaniRice] = useState("");
  const [selectedBeverage, setSelectedBeverage] = useState("");

  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    // Fetch categories dynamically from menuList
    const snacks = menuList.find((item) => item.name === "Snacks");
    const biryaniAndRice = menuList.find(
      (item) => item.name === "Biryani and Rice"
    );
    const beverages = menuList.find((item) => item.name === "Beverages");

    setPackageMenu({
      snacks: snacks ? snacks.items : [],
      biryaniAndRice: biryaniAndRice ? biryaniAndRice.items : [],
      beverages: beverages ? beverages.items : [],
    });
  }, [menuList]);

  // Snack selection handler
  const handleSnackChange = (event) => {
    const value = event.target.value;
    setSelectedSnacks((prev) => {
      if (prev.includes(value)) {
        // Remove if already selected
        return prev.filter((item) => item !== value);
      } else if (prev.length < 3) {
        // Allow up to 3 selections
        return [...prev, value];
      }
      return prev; // Do nothing if already 3 selected
    });
  };

  // Biryani and Rice selection handler
  const handleBiryaniRiceChange = (event) => {
    setSelectedBiryaniRice(event.target.value);
  };

  // Beverage selection handler
  const handleBeverageChange = (event) => {
    setSelectedBeverage(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="bg-white text-black p-8 border-2 border-red-600   rounded-2xl shadow-md w-full max-w-lg">
        <h2>Normal Package Offer</h2>
        <p>Welcome Drink included!</p>

        {/* Snacks Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Three Snacks:</h3>
          {packageMenu.snacks.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "8px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedSnacks.includes(item.name)}
                onChange={handleSnackChange}
                disabled={
                  !selectedSnacks.includes(item.name) &&
                  selectedSnacks.length >= 3
                } // Disable if 3 are already selected
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
                name="biryani-rice"
                value={item.name}
                checked={selectedBiryaniRice === item.name}
                onChange={handleBiryaniRiceChange}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Beverages Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Beverage:</h3>
          {packageMenu.beverages.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                name="beverages"
                value={item.name}
                checked={selectedBeverage === item.name}
                onChange={handleBeverageChange}
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

        <h4>Selected Biryani or Rice:</h4>
        <p>{selectedBiryaniRice}</p>

        <h4>Selected Beverage:</h4>
        <p>{selectedBeverage}</p>
      </div>
    </div>
  );
};

export const StandardPackage = () => {
  const [packageMenu, setPackageMenu] = useState({
    bbq: [],
    karahi: [],
    biryaniAndRice: [],
    desserts: [],
    beverages: [],
  });

  const [selectedBBQ, setSelectedBBQ] = useState([]);
  const [selectedKarahi, setSelectedKarahi] = useState("");
  const [selectedBiryaniRice, setSelectedBiryaniRice] = useState("");
  const [selectedDessert, setSelectedDessert] = useState("");
  const [selectedBeverage, setSelectedBeverage] = useState("");

  const { menuList } = useSelector((state) => state.menu);

  useEffect(() => {
    // Fetch categories dynamically from menuList
    const bbq = menuList.find((item) => item.name === "BBQ");
    const karahi = menuList.find((item) => item.name === "Karahi");
    const biryaniAndRice = menuList.find(
      (item) => item.name === "Biryani and Rice"
    );
    const desserts = menuList.find((item) => item.name === "Desserts");
    const beverages = menuList.find((item) => item.name === "Beverages");

    setPackageMenu({
      bbq: bbq ? bbq.items : [],
      karahi: karahi ? karahi.items : [],
      biryaniAndRice: biryaniAndRice ? biryaniAndRice.items : [],
      desserts: desserts ? desserts.items : [],
      beverages: beverages ? beverages.items : [],
    });
  }, [menuList]);

  // BBQ selection handler
  const handleBBQChange = (event) => {
    const value = event.target.value;
    setSelectedBBQ((prev) => {
      if (prev.includes(value)) {
        // Remove if already selected
        return prev.filter((item) => item !== value);
      } else if (prev.length < 2) {
        // Allow up to 2 selections
        return [...prev, value];
      }
      return prev; // Do nothing if already 2 selected
    });
  };

  // Karahi selection handler
  const handleKarahiChange = (event) => {
    setSelectedKarahi(event.target.value);
  };

  // Biryani and Rice selection handler
  const handleBiryaniRiceChange = (event) => {
    setSelectedBiryaniRice(event.target.value);
  };

  // Dessert selection handler
  const handleDessertChange = (event) => {
    setSelectedDessert(event.target.value);
  };

  // Beverage selection handler
  const handleBeverageChange = (event) => {
    setSelectedBeverage(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="bg-white text-black p-8 border-2 border-red-600   rounded-2xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Standard Package Offer
        </h2>
        <p>Additional Services: Basic Decor</p>

        {/* BBQ Checkbox Inputs */}
        <div>
          <h3 className="font-semibold">Select Two BBQ Options:</h3>
          {packageMenu.bbq.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="checkbox"
                value={item.name}
                checked={selectedBBQ.includes(item.name)}
                onChange={handleBBQChange}
                disabled={
                  !selectedBBQ.includes(item.name) && selectedBBQ.length >= 2
                } // Disable if 2 are already selected
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
                checked={selectedKarahi === item.name}
                onChange={handleKarahiChange}
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
                name="biryani-rice"
                value={item.name}
                checked={selectedBiryaniRice === item.name}
                onChange={handleBiryaniRiceChange}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Dessert Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Dessert Option:</h3>
          {packageMenu.desserts.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                name="desserts"
                value={item.name}
                checked={selectedDessert === item.name}
                onChange={handleDessertChange}
              />
              {item.name}
            </label>
          ))}
        </div>

        {/* Beverages Radio Inputs */}
        <div>
          <h3 className="font-semibold">Select One Beverage:</h3>
          {packageMenu.beverages.map((item, index) => (
            <label key={index} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                name="beverages"
                value={item.name}
                checked={selectedBeverage === item.name}
                onChange={handleBeverageChange}
              />
              {item.name}
            </label>
          ))}
        </div>
      </form>

      {/* Debugging Output (optional) */}
      <div style={{ marginTop: "20px" }}>
        <h4>Selected BBQ Options (Max 2):</h4>
        <ul>
          {selectedBBQ.map((bbq, index) => (
            <li key={index}>{bbq}</li>
          ))}
        </ul>

        <h4>Selected Karahi:</h4>
        <p>{selectedKarahi}</p>

        <h4>Selected Biryani or Rice:</h4>
        <p>{selectedBiryaniRice}</p>

        <h4>Selected Dessert:</h4>
        <p>{selectedDessert}</p>

        <h4>Selected Beverage:</h4>
        <p>{selectedBeverage}</p>
      </div>
    </div>
  );
};
