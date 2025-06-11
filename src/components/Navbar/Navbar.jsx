import React from "react";
import { FiPlus } from "react-icons/fi";
import { GoDash } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex items-center justify-between px-20 py-4">
        <img
          className="w-[140px]"
          src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/677a3d58978263d5cc6a6bd2_Nav%20Logo.svg"
          alt="Logo"
        />

        <div className="flex items-center justify-center p-medium text-md">
          <div className="group relative flex items-center">
            <p className="text-gray-600 hover:text-[#3FB9FF] transition-all duration-300 cursor-pointer">
              Home
            </p>
            <span className="text-[#3FB9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
              <GoDash />
            </span>
          </div>

          <div className="group relative flex items-center ml-12">
            <p className="text-gray-600 hover:text-[#3FB9FF] transition-all duration-300 cursor-pointer">
              About
            </p>
            <span className="text-[#3FB9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
              <GoDash />
            </span>
          </div>

          <div className="group relative flex items-center ml-12">
            <p className="text-gray-600 hover:text-[#3FB9FF] transition-all duration-300 cursor-pointer">
              Service
            </p>
            <span className="text-[#3FB9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
              <GoDash />
            </span>
          </div>

          <div className="group relative flex items-center ml-12">
            <p className="text-gray-600 hover:text-[#3FB9FF] transition-all duration-300 cursor-pointer">
              Pages
            </p>
            <span className="text-[#3FB9FF] ml-1">
              <FaAngleDown />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-[10px] bg-black outline-none border border-black rounded-lg text-white gap-2 p-semibold">
          <p className="bg-[#3FB9FF] rounded-full text-sm">
            <FiPlus />
          </p>
          <p>Appointment Now</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
