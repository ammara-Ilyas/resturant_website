const ReservationForm = () => {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header Section */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-xl font-semibold text-gray-800">La Connessa</h1>
          <p className="text-gray-600">
            <span className="font-medium">Fri, Feb 14</span> · 4:45 PM · 4 people
            (Standard seating)
          </p>
          <div className="mt-2 text-sm text-blue-600 bg-blue-100 p-2 rounded">
            We're holding this table for you for <strong>3:40 minutes</strong>
          </div>
        </div>
  
        {/* Reservation Summary */}
        <div className="mb-6 border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Reservation summary
          </h2>
          <div className="flex justify-between mt-2 text-gray-700">
            <span>Experience</span>
            <span>Valentine's Day Dinner</span>
          </div>
          <div className="flex justify-between mt-2 text-gray-700">
            <span>Total</span>
            <span className="font-medium">$200.00</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Price listed includes all taxes, fees, and service charges.
          </p>
        </div>
  
        {/* Diner Details */}
        <div className="mb-6 border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-800">Diner details</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="First name"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 col-span-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 col-span-2"
            />
            <select className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="">Select an occasion (optional)</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
            <input
              type="text"
              placeholder="Add a special request (optional)"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 col-span-2"
            />
          </div>
        </div>

  
        {/* Submit Button */}
        <button className="w-full bg-orange-600 text-white font-medium py-3 rounded-md hover:bg-red-700 transition duration-300">
          Reserve
        </button>
      </div>
    );
  };
  
  export default ReservationForm;
  