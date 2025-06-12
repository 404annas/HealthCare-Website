import React from "react";
import { FiChevronsRight } from "react-icons/fi";

const stepsData = [
  {
    id: 1,
    title: "Identifying Care Needs",
    description:
      "Tincidunt sem justo at enim. Sit aenean aliquet aliquam eget maecenas et viverra.",
    bgColor: "bg-primary",
    stepNumber: "01",
    textColor: "text-white", // Default text color for the badge
  },
  {
    id: 2,
    title: "Researching Options",
    description:
      "Tincidunt sem justo at enim. Sit aenean aliquet aliquam eget maecenas et viverra.",
    bgColor: "bg-gradient-to-b from-primary to-secondary", // Equivalent to blue-200
    stepNumber: "02",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Selecting Care Monitoring", // Assuming this was meant to be different from Researching Options
    description:
      "Tincidunt sem justo at enim. Sit aenean aliquet aliquam eget maecenas et viverra.",
    bgColor: "bg-secondary", // Equivalent to pink-200
    stepNumber: "03",
    textColor: "text-white",
  },
];

export default function CareJourney() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-2 bg-white font-inter">
      {/* Header */}
      <div className="text-center mb-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Navigating your care journey.
        </h1>
      </div>

      {/* Steps Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8 mb-10 px-4">
        {stepsData.map((step) => (
          <div
            key={step.id} // Use unique id as key
            className="flex flex-col lg:flex-row items-center lg:items-stretch group"
          >
            {/* Content Card */}
            <div className="bg-gray-100 rounded-xl p-4 md:p-8 max-w-md flex-1 flex flex-col justify-between transform transition-transform duration-300">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-10">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Step Number Badge */}
            <div
              className={`relative ${step.bgColor} rounded-2xl w-32 md:w-20 flex-shrink-0 flex flex-col justify-between items-center py-8 lg:py-6 mt-6 lg:mt-0 lg:-ml-2 shadow-xl transform transition-transform duration-300`}
            >
              {/* Arrow Icon - Replaced with inline SVG */}
              <div
                className={`flex justify-start ${step.textColor} font-extrabold text-2xl opacity-90 absolute top-4 right-4`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <polyline points="13 17 18 12 13 7"></polyline>
                  <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
              </div>
              <div className="flex flex-col items-center justify-end h-full">
                <div className={`text-4xl font-extrabold ${step.textColor}`}>
                  {step.stepNumber}
                </div>
                <div className="text-sm font-medium text-white mt-1">Step</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center px-4">
        <button className="bg-secondary  text-white font-semibold px-8 py-2 rounded-xl  shadow-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 flex items-center text-md justify-center mx-auto ">
          <span className="mr-3">📅</span>
          Book an appointment
        </button>
      </div>
    </div>
  );
}
