"use client";
import { useState } from "react";
import { HeadingText } from "../miniWidgets/Heading";

const VenueOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: "INV904",
      venue: "Pickup Instore @ Reflexon Office",
      address: "51 Forester Street, Surry Hills, NSW, 2010",
      date: "Wednesday, 11 May 2022",
      price: 1.0,
      status: "PENDING",
    },
    {
      id: "INV872",
      venue: "Test Venue",
      address: "Abbotsbury, New South Wales, 2000",
      date: "Thursday, 12 May 2022",
      price: 15.3,
      status: "DELEVERIED",
    },
    {
      id: "INV857",
      venue: "TEST",
      address: "Abbotsbury, New South Wales, TEST",
      date: "Tuesday, 10 May 2022",
      price: 86.5,
      status: "PENDING",
    },
    {
      id: "INV868",
      venue: "TEST",
      address: "Abbotsbury, New South Wales, TEST",
      date: "Tuesday, 10 May 2022",
      price: 86.5,
      status: "DELEVERIED",
    },
  ]);

  const [cancelOrder, setCancelOrder] = useState(null);

  const handleCancel = (order) => {
    if (order.status === "PENDING") {
      setCancelOrder(order);
    }
  };

  const confirmCancel = () => {
    setOrders(orders.filter((order) => order.id !== cancelOrder.id));
    setCancelOrder(null);
  };

  return (
    <div className="p-6">
      <HeadingText heading="Your Venue Bookings" text="Venues" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Venue</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-300">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.venue}</td>
                <td className="p-3">{order.address}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">${order.price.toFixed(2)}</td>
                <td className="p-3 text-orange-500 font-bold">
                  {order.status}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleCancel(order)}
                    className={`px-4 py-2 rounded ${
                      order.status !== "PENDING"
                        ? "bg-gray-400 opacity-50 cursor-not-allowed"
                        : "bg-orange-600 text-white"
                    }`}
                    disabled={order.status !== "PENDING"}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {cancelOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div>
              <h2 className="text-lg font-semibold mb-4">Cancel Order</h2>
              <p className="mb-4">
                If you cancel this order, 50% of the total price will be
                deducted.
              </p>
              <p className="font-bold">
                Refund Amount: ${(cancelOrder.price * 0.5).toFixed(2)}
              </p>
              <div className="mt-4 flex justify-end space-x-3">
                <button
                  onClick={() => setCancelOrder(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Keep Order
                </button>
                <button
                  onClick={confirmCancel}
                  className="bg-orange-600 text-white px-4 py-2 rounded"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VenueOrders;
