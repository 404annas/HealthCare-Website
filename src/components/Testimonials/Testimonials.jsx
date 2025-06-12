import React from "react";

export default function Testimonial() {
  return (
    <div className="max-w-6xl mx-auto  bg-white py-4 flex items-center justify-center">
      <div className="bg-white rounded-3xl  p-12 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Real experiences exceptional
            <br />
            healthcare delivered
          </h1>
        </div>

        {/* Testimonial Section */}
        <div className="flex items-start gap-8 mb-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
              alt="Eleanor Pena"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>

          {/* Quote Content */}
          <div className="flex-grow">
            <div className="relative">
              {/* Large Quote Mark */}
              <div className="absolute -left-2 -top-2 text-6xl text-yellow-400 font-bold leading-none"></div>

              {/* Quote Text */}
              <blockquote className="text-2xl  text-gray-900 font-medium leading-relaxed pt-4 pl-8">
                My surgery and recovery were seamless thanks to the skilled and
                empathetic team. I'll always be grateful for their support.
              </blockquote>

              {/* Closing Quote */}
              <span className="text-6xl  text-yellow-400 font-bold leading-none">
                <img
                  src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/677a3d5836f0a6df3a4e5436_Testimonail%20Arrow%201.svg"
                  className="mt-4"
                />
              </span>
            </div>
          </div>
        </div>

        {/* Author Name */}
        <div className="text-right mb-8">
          <p className="text-lg text-gray-600 font-medium">Eleanor Pena</p>
        </div>

        {/* Bottom Section */}

        {/* Decorative Quote Marks */}
        <div className="absolute bottom-8 left-12">
          <div className="text-yellow-200 text-8xl font-bold opacity-30 leading-none">
            "
          </div>
        </div>
      </div>
    </div>
  );
}
