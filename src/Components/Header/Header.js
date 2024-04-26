import React from "react";
import logo from "../Assests/logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#2699fb] text-white">
      <div className="container mx-auto px-2 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2 rounded-full" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-xl items-center">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Our story
              </Link>
            </li> 
            <li>
              <Link to="/membership" className="hover:text-gray-300">
                Membership
              </Link>
            </li>
            <li>
              <Link to="/write" className="hover:text-gray-300">
                Write
              </Link>
            </li>
            <li>
              <Link to="/signin" className="hover:text-gray-300">
                Sign in
              </Link>
            </li>

            <button className="bg-black rounded-lg hover:bg-yellow-300 hover:text-black text-[16px] px-5">
              <Link to="/getunlimited">Get unlimited access</Link>
            </button>
          </ul>
        </nav>
        <button className="block md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden bg-gray-500 py-2">
        <ul className="flex flex-col space-y-2 items-center">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Our story
            </Link>
          </li>
          <li>
            <Link to="/membership" className="hover:text-gray-300">
              Membership
            </Link>
          </li>
          <li>
            <Link to="/write" className="hover:text-gray-300">
              Write
            </Link>
          </li>
          <li>
            <Link to="/signin" className="hover:text-gray-300">
              Sign in
            </Link>
          </li>

          <button className="bg-black rounded-lg hover:bg-yellow-300 hover:text-black text-[16px] px-5">
          <Link to="/getunlimited">Get unlimited access</Link>
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
