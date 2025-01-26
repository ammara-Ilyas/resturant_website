import React from "react";
import ReservationForm, { CheckAvailability } from "./ReservationForm";
import SingleEventCard from "./SingleEventCard";
import SingleEventDes from "./SingleEventDes";
import SingleEventSlider from "./SingleEventSlider";
import Ratings, { ReviewList } from "./RatingOverview";
import Gallery from "./EventImageGallery";
const SingleEvent = () => {
  return (
    <div>
      <div
        className="border-2 border-red-800 flex justify-center
     gap-5"
      >
        <div className="border-2 mt-5 w-[50%] border-red-700">
          <SingleEventDes />
          <Gallery />
          <Ratings />
        </div>
        <div className="border-2 w-[40%] border-red-700">
          <CheckAvailability />
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
