import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
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

export function CheckAvailability() {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCheckAvailability = async () => {
    if (!date || !startTime || !endTime) {
      setMessage("Please fill all fields");
      return;
    }

    setLoading(true);
    setMessage("");

    // Simulating an API call
    setTimeout(() => {
      setLoading(false);
      setMessage("Availability confirmed!");
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Check Availability</h2>

      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-600 mb-2">
          When
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="start-time" className="block text-gray-600 mb-2">
            Start Time
          </label>
          <input
            type="time"
            id="start-time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />
        </div>
        <div>
          <label htmlFor="end-time" className="block text-gray-600 mb-2">
            End Time
          </label>
          <input
            type="time"
            id="end-time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>

      <button
        onClick={handleCheckAvailability}
        disabled={loading}
        className={`w-full flex justify-center items-center bg-red-500 text-white py-2 px-4 rounded-md font-semibold ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
        }`}
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Check Availability"
        )}
      </button>

      {message && (
        <p className="mt-4 text-center text-sm font-medium text-gray-700">
          {message}
        </p>
      )}
    </div>
  );
}

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    occasion: "",
    requirements: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // Replace with your form submission logic
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      setSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Get a Quote Today!
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700">Your Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">
            Number of Guests (Tentative)
          </label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tentative Dates</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Occasion</label>
          <input
            type="text"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            placeholder="Wedding, Birthday, Farewell, etc."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Any Other Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
        </button>

        {success && (
          <p className="text-green-500 text-center mt-4">
            Form submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
};
