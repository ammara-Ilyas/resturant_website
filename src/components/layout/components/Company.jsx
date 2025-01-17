import React from "react";

const Company = () => {
  return (
    <div>
      {/* Company */}
      <div>
        <h4 className="text-lg text-orange-400 font-semibold mb-4">Company</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Reservation
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Company;
