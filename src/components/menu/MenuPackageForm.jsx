import React, { useState } from "react";
import OutstandingPackage from "./packages/OutstandardPackage";
import FamilyFeastPackage from "./packages/FamilyFeastPackage";
import { useSelector } from "react-redux";
import {
  TeaPackage,
  NormalPackage,
  StandardPackage,
} from "./packages/Packages";
import CorporateEventPackage from "./packages/CooperatePackage";
import LuxuryBanquetPackage from "./packages/LuxuryPackage";
import KidsPartyPackage from "./packages/KidsPartyPackage";
import CulturalCelebrationPackage from "./packages/CultureCelebrationPckage";

// Map each package name to its corresponding component
const packageComponents = {
  "Tea Package": TeaPackage,
  "Normal Package": NormalPackage,
  "Standard Package": StandardPackage,
  "Outstanding Package": OutstandingPackage,
  "Family Feast Package": FamilyFeastPackage,
  "Corporate Event Package": CorporateEventPackage,
  "Luxury Banquet Package": LuxuryBanquetPackage,
  "Kids Party Package": KidsPartyPackage,
  "Cultural Celebration Package": CulturalCelebrationPackage,
};

const MenuPackageForm = ({ selectedPackage }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelection = (packageName, selectedOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [packageName]: selectedOption,
    }));
  };

  // Find the selected package component
  const SelectedPackageComponent = packageComponents[selectedPackage];

  return (
    <div className="menu-package-form border-2 mt-32  py-10 ">
      {/* Render the selected package only */}
      {SelectedPackageComponent ? (
        <SelectedPackageComponent
          selected={selectedOptions[selectedPackage]}
          onSelection={(option) => handleSelection(selectedPackage, option)}
        />
      ) : (
        <p className="text-gray-500 text-center">
          No package found for the selected party.
        </p>
      )}
    </div>
  );
};

export default MenuPackageForm;

export const PaymentForm = () => {
  const [amount, setAmount] = useState(500); // Default payment amount
  const { totalPrice, IsMenuForm, isBook } = useSelector(
    (state) => state.event
  );
  return (
    <div className="w-full flex items-center justify-center overflow-y-auto bg-gray-100">
      <div className="bg-white  rounded-lg  mt-20 w-full max-w-md">
        <h2 className="text-lg font-bold bg-orange-600 text-white py-2 px-4 rounded-t-lg">
          Pay Invoice
        </h2>
        {/* Header */}

        {/* Card logos */}
        <div className="flex space-x-2 mb-4 p-6">
          <img src="/images/visa.jpeg" alt="Visa" className="w-12" />
          <img src="/images/master.jpeg" alt="MasterCard" className="w-12" />
          <img src="/images/amex.png" alt="American Express" className="w-12" />
          <img src="/images/discover.jpeg" alt="Discover" className="w-12" />
        </div>

        {/* Payment amount */}
        <div className="mb-4  p-6">
          <div className="flex justify-between mx-10 items-center ">
            <h4 className="text-2xl font-semibold">Payment</h4>
            <p className="text-gray-900 text-xl font-bold mt-1">
              ${Math.round(totalPrice)}
            </p>
          </div>
        </div>

        {/* Payment form */}
        <form className=" p-6">
          {/* Name on card */}
          <div className="mb-4 ">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name on card
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Card number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Card number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Expiry date and security code */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Expiry date
              </label>
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Security code
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* ZIP/Postal code */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              ZIP/Postal code
            </label>
            <input
              type="text"
              placeholder="12345"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Pay button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};
