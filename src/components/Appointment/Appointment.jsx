import React from "react";
import horizon from "../../assets/horizonpic.svg";
const Appointment = () => {
  return (
    // Section with responsive padding for different screen sizes
    <section className="py-10 px-4 sm:px-6 md:py-20 md:px-24">
      {/* Main card container with responsive layout and styling */}
      <div className="bg-gradient-to-br from-primary to-secondary flex flex-col md:flex-row items-center md:justify-between leading-tight px-4 py-8 sm:px-6 sm:py-10 md:px-6 md:py-0 rounded-3xl h-auto md:h-80 ">
        {/* Text content area */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:flex-shrink-0">
          {/* Main headings with responsive font sizes */}
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] text-white font-medium">
            Book your appointment
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] text-white font-medium">
            for better health
          </h1>
          {/* Appointment button */}
          <div className="flex items-center justify-center md:justify-start px-6 py-[10px] bg-secondary outline-none rounded-lg text-white gap-2 font-semibold w-fit mx-auto md:mx-0 mt-8 cursor-pointer shadow-lg hover:bg-opacity-90 transition-colors duration-300">
            {/* Plus icon (replaced with inline SVG to remove external dependency) */}
            <p className="bg-[#3FB9FF] rounded-full text-sm p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </p>
            <p>Appointment Now</p>
          </div>

          {/* Working hours section */}
          <div className="mt-8 p-4 font-medium text-sm text-gray-300">
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
              {/* Monday - Friday hours */}
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center md:justify-start">
                <span className="font-medium text-white">Monday - Friday:</span>
                <span className="text-white">8AM - 10PM</span>
              </div>
              {/* Saturday - Sunday hours */}
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center md:justify-start">
                <span className="font-medium text-white">
                  Saturday - Sunday:
                </span>
                <span className="text-white">9AM - 10PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image container */}
        <div className="w-full md:w-auto flex justify-center items-center mt-4 md:mt-0 md:ml-auto">
          <img
            // Responsive image sizing: w-4/5 on smallest, w-1/2 on small, w-[500px] on medium and up
            className="w-4/4 sm:w-1/2 md:w-[500px] h-auto z-10 md:-translate-y-[25px] translate-y-8 object-contain"
            src={horizon} // Placeholder for horizon.svg
            alt="Doctor Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Appointment;
