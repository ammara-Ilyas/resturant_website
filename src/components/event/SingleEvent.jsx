import React, { useState, useEffect } from "react";
import ReservationForm, {
  CheckAvailability,
  QuoteForm,
} from "./ReservationForm";
import SingleEventCard from "./SingleEventCard";
import SingleEventDes from "./SingleEventDes";
import SingleEventSlider from "./SingleEventSlider";
import Ratings, { ReviewList } from "./RatingOverview";
import Gallery from "./EventImageGallery";
const SingleEvent = () => {
  return (
    <div>
      <div
        className="flex justify-center
     gap-5"
      >
        <div className="  w-[65%] ml-10 ">
          <SingleEventDes />
          <Gallery />
          <PartyMenuDisplay />
          <Ratings />
        </div>
        <div className=" w-[40%] ">
          <ReservationForm />
        </div>
      </div>
      <div>
        <ReviewList />
      </div>
    </div>
  );
};

export default SingleEvent;

export const PartyMenuDisplay = () => {
  const [partyMenu, setPartyMenu] = useState([]);
  const [partyMenuName, setPartyMenuName] = useState("");
  const [partyMenuItems, setPartyMenuItems] = useState([]);
  const [partyMenuPrice, setPartyMenuPrice] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/menupackage.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("data in menuform", data.packages);

        setPartyMenu(data.packages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleMenu = (menu) => {
    setPartyMenuPrice(menu.price);
    setPartyMenuItems(menu.includes);
    setPartyMenuName(menu.name);
  };
  return (
    <div>
      <div className="my-5 shadow-md rounded-lg" id="menu">
        <h2 className="text-lg font-bold bg-orange-600 mb-4 text-white py-2 px-4 rounded-t-lg">
          Menu display
        </h2>
        <ul className="flex flex-row  rounded-md flex-wrap gap-2 px-5">
          {partyMenu &&
            partyMenu.map((menu, i) => (
              <li
                key={i}
                className={`${
                  partyMenuName == menu.name
                    ? "text-orange-600 underline"
                    : "text-black "
                }  mb-2   py-1 px-2 rounded-lg`}
              >
                <button
                  type="button"
                  onClick={() => handleMenu(menu)}
                  className=""
                >
                  {menu.name}
                </button>
              </li>
            ))}
        </ul>
        <div className="p-5 px-7">
          {/* <p className="font-semibold text-lg">Pacage: {partyMenuName} </p> */}
          <p className="font-semibold text-lg">Price: {partyMenuPrice} </p>
          {partyMenuItems &&
            partyMenuItems.map((item, i) => (
              <div key={i} className="">
                <p className="border-b border-gray-400 my-1 inline-block pr-3">
                  {item}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
