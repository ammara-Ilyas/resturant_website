"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MenuPackageForm, { PaymentForm } from "./MenuPackageForm";
import { useSelector, useDispatch } from "react-redux";
// export const SelectedForm = () => {
//   const { totalPrice, IsMenuForm, isBook } = useSelector(
//     (state) => state.event
//   );
//   // console.log("is book in selected form", isBook);

//   const [isOpen, setIsOpen] = useState(true);
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in milliseconds
//       offset: 100, // Offset from the top before animation starts
//     });
//   }, []);
//   return (
//     isOpen && (
//       <div className="bg-[#0b132a] relative min-h-screen py-10 flex items-center justify-center">
//         {/* Close button */}
//         <div
//           className="w-full flex items-center justify-center"
//           data-aos="fade-up"
//           data-aos-delay={300}
//         >
//           {IsMenuForm == "payment" ? <PaymentForm /> : <MenuForm />}
//         </div>
//         <button
//           className="absolute top-5 right-5 text-white text-2xl font-bold z-50"
//           onClick={() => setIsOpen(false)}
//         >
//           &times;
//         </button>
//       </div>
//     )
//   );
// };

export const MenuForm = () => {
  const [selectedParty, setSelectedParty] = useState("");
  const [partyOptions, setPartyOptions] = useState([]);
  const [menuOptions, setMenuOptions] = useState([]);
  const [isMenu, setisMenu] = useState(true);

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

  const handleProceed = () => {
    console.log("selected party", selectedParty);
    console.log("is menu", isMenu);

    setisMenu(false);
  };
  return (
    <>
      {isMenu ? (
        <div className="bg-white text-white rounded-2xl shadow-md w-full max-w-lg">
          <h1 className="text-lg text-center font-bold bg-orange-600 text-white py-2 px-4 rounded-t-lg">
            Select Menu Package
          </h1>
          <div className=" p-8">
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
            {/* Submit Button */}
            <button
              onClick={handleProceed}
              className="w-full bg-orange-600 text-white font-medium py-3 rounded-md hover:bg-orange-700 transition duration-300"
            >
              Proceed
            </button>
          </div>
        </div>
      ) : (
        <div className="border-2 border-red-600">
          <SelectedMenu selectedParty={selectedParty} setisMenu={setisMenu} />
        </div>
      )}
    </>
  );
};

export const SelectedMenu = ({ selectedParty, setisMenu }) => {
  console.log("selected party in selected menu", selectedParty);

  return (
    <>
      {selectedParty && (
        <div className="bg-opacity-15 bg-white">
          <div className="w-full flex items-center justify-center   bg-gray-100">
            <MenuPackageForm selectedPackage={selectedParty} />
          </div>
          <div className="flex flex-row items-center justify-between">
            {/* Submit Button */}
            <button
              onClick={() => setisMenu(true)}
              className="w-full  bg-orange-600 text-white font-medium py-3 rounded-md hover:bg-orange-700 transition duration-300"
            >
              Previous
            </button>{" "}
            {/* Submit Button */}
            <button className="w-full bg-orange-600 text-white font-medium py-3 rounded-md hover:bg-orange-700 transition duration-300">
              Proceed
            </button>
          </div>
        </div>
      )}
    </>
  );
};
