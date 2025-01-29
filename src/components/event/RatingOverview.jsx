import React from "react";
import { Rating } from "@mui/material";
const Ratings = () => {
  const totalReviews = 1325;
  const overallRating = 4.5;

  const ratingsDistribution = [
    { stars: 5, count: 800 },
    { stars: 4, count: 350 },
    { stars: 3, count: 100 },
    { stars: 2, count: 50 },
    { stars: 1, count: 25 },
  ];

  const review = [
    {
      name: "food",
      rating: 4.1,
    },
    {
      name: "services",
      rating: 4.5,
    },
    {
      name: "ambience",
      rating: 3.7,
    },
    {
      name: "value",
      rating: 3.9,
    },
  ];
  return (
    <div
      id="review"
      className="w-[100%] mx-auto bg-white shadow-md rounded-lg  border-black "
    >
      <h2 className="text-lg font-bold bg-orange-600 text-white py-2 px-4 rounded-t-lg">
        What {totalReviews.toLocaleString()} people are saying
      </h2>
      <p className=" text-sm m-2 mx-8">Overall Rating and Reviews</p>
      <div className="flex flex-row mx-2">
        {" "}
        <div className="mb-4  font-semibold text-sm w-[50%] p-2 px-4">
          <p className="ml-3">
            Reviews can only be made by diners who have eaten at this restaurant
          </p>
          <div className="flex items-center ">
            <div className="text-2xl font-bold ml-3 text-orange-600">
              <Rating
                value={overallRating}
                precision={0.1}
                readOnly
                sx={{ color: "orange" }}
              />
            </div>{" "}
            {overallRating}
            <div className="ml-2 text-gray-600">based on recent ratings</div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2 text-sm">
            {review.map((item, i) => (
              <div className="flex items-center flex-col" key={i}>
                <span className="ml-2 font-bold">{item.rating}</span>
                <span className="font-medium text-gray-800">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%]">
          {ratingsDistribution.map((rating) => (
            <div
              key={rating.stars}
              className="flex items-center space-x-1  mb-2"
            >
              <div className="w-5 text-gray-700 font-medium">
                {rating.stars}
              </div>
              <div className="flex-1 border-[1px] rounded-md">
                <div
                  className="bg-orange-600 h-2 rounded-md"
                  style={{
                    width: `${(rating.count / totalReviews) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="w-12 text-right text-gray-700">
                {((rating.count / totalReviews) * 100).toFixed(1)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ratings;

const reviews = [
  {
    id: 1,
    user: {
      name: "Anthony",
      location: "Philadelphia",
      avatar: "A",
      reviewsCount: 1,
    },
    rating: 1,
    date: "January 14, 2025",
    details: { food: 1, service: 1, ambience: 1 },
    reviewText:
      "I waited 30 minutes after my reservation time and there were still ten parties ahead of us for seating.",
    helpfulCount: 0,
    response: null,
  },
  {
    id: 2,
    user: {
      name: "Francesca",
      location: "San Francisco",
      avatar: "F",
      reviewsCount: 1,
    },
    rating: 2,
    date: "January 1, 2025",
    details: { food: 2, service: 2, ambience: 3 },
    reviewText:
      "Had reservations at 9 but got seated at 10. Food was cold when it was brought out.",
    helpfulCount: 1,
    response: {
      responder: "STK - San Francisco",
      date: "January 2, 2025",
      responseText:
        "Hi Francesca - I'm sorry your holiday did not go as planned. I hope ...",
    },
  },
];

export const ReviewList = () => {
  return (
    <div className="max-w-2xl mx-auto py-6">
      <h2 className="text-lg font-semibold mb-4">1,325 Reviews</h2>
      <select className="block mb-6 border border-gray-300 rounded-md p-2 text-sm w-full max-w-xs">
        <option>Lowest rating</option>
        <option>Highest rating</option>
        <option>Most recent</option>
      </select>

      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-200 pb-6 mb-6">
          {/* User Info */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold text-lg">
              {review.user.avatar}
            </div>
            <div>
              <div className="font-semibold">{review.user.name}</div>
              <div className="text-sm text-gray-500">
                {review.user.location}
              </div>
              <div className="text-sm text-gray-500">
                {review.user.reviewsCount} review
              </div>
            </div>
          </div>

          {/* Review Details */}
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full ${
                    i < review.rating ? "bg-red-500" : "bg-gray-200"
                  }`}
                ></div>
              ))}
            </div>
            <div className="text-sm text-gray-500">Dined on {review.date}</div>
          </div>
          <div className="text-sm text-gray-700 mb-4">
            <strong>Overall {review.rating} </strong>• Food{" "}
            {review.details.food} • Service {review.details.service} • Ambience{" "}
            {review.details.ambience}
          </div>
          <p className="text-gray-700 text-sm mb-4">{review.reviewText}</p>

          {/* Restaurant Response */}
          {review.response && (
            <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700 mb-4">
              <strong>{review.response.responder}</strong>{" "}
              <span className="text-gray-500">
                Responded on {review.response.date}
              </span>
              <p className="mt-2">{review.response.responseText}</p>
            </div>
          )}

          {/* Helpful Section */}
          <div className="flex items-center space-x-2">
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 9l-6 6m0 0l6-6m-6 6V9"
                />
              </svg>
              Is this helpful?
            </button>
            {review.helpfulCount > 0 && (
              <span className="text-sm text-gray-500">
                {review.helpfulCount} person found this helpful
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
