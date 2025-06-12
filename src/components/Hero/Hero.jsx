import React from "react";
import { FiPlus } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { BiPlusCircle } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="container mx-auto px-8 md:px-10 py-24 flex gap-2">
      <div className="flex flex-col md:w-1/2">
        <div className="w-fit md:flex hidden items-center  gap-2 border border-gray-200 rounded-full py-1 px-3 p-medium text-sm">
          <img
            className="bg-primary rounded-full p-1"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/677a3d583e354eaf7124dcf3_Hero%20Icon.svg"
            alt=""
          />
          <p>Your Health, Our Priority</p>
        </div>

        <div className="flex flex-col  gap-6 my-5 md:my-10">
          <p className="font-semibold text-4xl   md:text-[63px] leading-none">
            Advanced treatment <span className="text-secondary">caring</span>{" "}
            for every patient
          </p>
          <p className="font-medium text-gray-500 ">
            Fermentum phasellus mauris non mattis quam. Arcu tincidunt in
            fermentum pulvinar sem magna urna aenean.
          </p>
        </div>

        <div className="flex items-center">
          <button className="px-6 py-1 md:text-md text-sm md:py-3 font-bold bg-secondary text-white rounded-lg">
            Appointment Now
          </button>

          <div className="flex  items-center  px-6 md:py-[10px] p-regular text-gray-800">
            <p className="bg-primary rounded-full p-1 text-white">
              <MdCall />
            </p>
            <p className="text-secondary">
              <GoDash />
            </p>
            <p>440 461-586853</p>
          </div>
        </div>

        <div>
          <img
            className="md:inline hidden relative top-20 left-[100%] border border-[#D6EFFE] rounded-full p-3"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/677be17b1ffb390852b1c6f1_4%2B89898989898989898989898989165.svg"
            alt="Play Icon"
          />
        </div>

        <div className="flex items-center md:ml-0 ml-10 mt-10">
          <img
            className="border border-white rounded-full"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/6790e0e337c7cd524d2996ee_Hero%20Image%204.png"
            alt="Person_1"
          />
          <img
            className="-translate-x-6 border-2 border-white rounded-full"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/6790e0e301f8e764976bb0e8_Hero%20Image%203.png"
            alt="Person_2"
          />
          <img
            className="-translate-x-12 border-2 border-white rounded-full"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/6790e0e3a40eb325c49a3632_Hero%20Image%202.png"
            alt="Person_3"
          />
          <img
            className="-translate-x-[72px] border-2 border-white rounded-full"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/6790e0e31c3f4e18442b642f_Hero%20Image%201.png"
            alt="Person_4"
          />
          <div className="-translate-x-[92px] px-5 text-sm flex flex-col items-center justify-center bg-secondary border border-white rounded-full w-30 md:w-20 h-20 ">
            <p className="p-medium text-white">10K+</p>
            <p className="text-[10px] p-regular text-white">Skilled Doctor</p>
          </div>
        </div>
      </div>

      <div className="md:inline hidden">
        <img
          src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/679231c329792017aaacc0e8_Header%20Image%20.png"
          alt="Hero_Img"
        />
      </div>
    </section>
  );
};

export default Hero;
