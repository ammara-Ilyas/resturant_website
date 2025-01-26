import React, { useState } from "react";
import OutstandingPackage from "./packages/OutstandardPackage";
import FamilyFeastPackage from "./packages/FamilyFeastPackage";
// import StandardPackage from "./packages/StandardPackage";
import {
  TeaPackage,
  NormalPackage,
  StandardPackage,
} from "./packages/Packages";
import CorporateEventPackage from "./packages/CooperatePackage";
import LuxuryBanquetPackage from "./packages/LuxuryPackage";
import KidsPartyPackage from "./packages/KidsPartyPackage";
import CulturalCelebrationPackage from "./packages/CultureCelebrationPckage";
// Import other package components as needed

const MenuPackageForm = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelection = (packageName, selectedOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [packageName]: selectedOption,
    }));
  };

  return (
    <div className="menu-package-form">
      <h1 className="text-2xl font-bold text-center mb-6">
        Select Your Menu Package
      </h1>
      <TeaPackage
        selected={selectedOptions["Tea Package"]}
        onSelection={(option) => handleSelection("Tea Package", option)}
      />
      <NormalPackage
        selected={selectedOptions["Normal Package"]}
        onSelection={(option) => handleSelection("Normal Package", option)}
      />
      {/* <StandardPackage
        selected={selectedOptions["Standard Package"]}
        onSelection={(option) => handleSelection("Standard Package", option)}
      /> */}
      <StandardPackage />
      <OutstandingPackage />
      <FamilyFeastPackage />
      <CorporateEventPackage />
      <LuxuryBanquetPackage />
      <KidsPartyPackage />
      <CulturalCelebrationPackage />
      {/* Add other package components similarly */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Your Selected Options:</h2>
        <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>
      </div>
    </div>
  );
};

export default MenuPackageForm;
