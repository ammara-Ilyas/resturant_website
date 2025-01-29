import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOrderedMenu } from "../redux/actions/menuActions"; // Ensure this action exists

export const OutstandingPackage = () => {
  const dispatch = useDispatch();
  const { menuList } = useSelector((state) => state.menu);
  const { orderedMenu } = useSelector((state) => state.order);

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

  useEffect(() => {
    setPackageMenu({
      bbq: menuList.find((item) => item.name === "BBQ")?.items || [],
      karahi: menuList.find((item) => item.name === "Karahi")?.items || [],
      biryaniAndRice:
        menuList.find((item) => item.name === "Biryani and Rice")?.items || [],
      desserts: menuList.find((item) => item.name === "Desserts")?.items || [],
      snacks: menuList.find((item) => item.name === "Snacks")?.items || [],
      beverages:
        menuList.find((item) => item.name === "Beverages")?.items || [],
    });
  }, [menuList]);

  const handleCheckboxChange = (event, stateUpdater, maxSelection) => {
    const value = event.target.value;
    stateUpdater((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else if (prev.length < maxSelection) {
        return [...prev, value];
      }
      return prev;
    });
  };

  const handleProceed = () => {
    const orderedPackage = {
      selectedBBQ,
      selectedKarahi,
      selectedBiryaniRice,
      selectedDesserts,
      selectedSnacks,
      selectedBeverages,
    };

    dispatch(
      updateOrderedMenu({ ...orderedMenu, OutstandingPackage: orderedPackage })
    );
    console.log("Updated Ordered Menu:", orderedPackage);
  };

  return (
    <div className="flex bg-white text-black flex-col rounded-2xl shadow-md items-center justify-center overflow-y-auto mt-28 w-full">
      <h2 className="text-lg font-bold bg-orange-600 mb-2 w-full text-white text-center py-2 px-4 rounded-t-lg">
        Outstanding Package Offer
      </h2>
      <form className="bg-white text-black p-8 rounded-2xl shadow-md w-full max-w-lg">
        <p className="font-semibold mx-10">
          Additional Services: Premium Decor, Live Music
        </p>

        {[
          "bbq",
          "karahi",
          "biryaniAndRice",
          "desserts",
          "snacks",
          "beverages",
        ].map((category, index) => (
          <div key={index}>
            <h3 className="font-semibold">Select {category} Options:</h3>
            {packageMenu[category].map((item, idx) => (
              <label key={idx} style={{ display: "block", margin: "5px 0" }}>
                <input
                  type="checkbox"
                  value={item.name}
                  checked={eval(
                    `selected${
                      category.charAt(0).toUpperCase() + category.slice(1)
                    }`
                  ).includes(item.name)}
                  onChange={(e) =>
                    handleCheckboxChange(
                      e,
                      eval(
                        `setSelected${
                          category.charAt(0).toUpperCase() + category.slice(1)
                        }`
                      ),
                      category === "bbq" ? 3 : 2
                    )
                  }
                  disabled={
                    !eval(
                      `selected${
                        category.charAt(0).toUpperCase() + category.slice(1)
                      }`
                    ).includes(item.name) &&
                    eval(
                      `selected${
                        category.charAt(0).toUpperCase() + category.slice(1)
                      }`
                    ).length >= (category === "bbq" ? 3 : 2)
                  }
                />
                {item.name}
              </label>
            ))}
          </div>
        ))}

        <button
          type="button"
          onClick={handleProceed}
          className="w-full bg-orange-600 text-white font-medium py-3 rounded-md hover:bg-orange-700 transition duration-300"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default OutstandingPackage;
