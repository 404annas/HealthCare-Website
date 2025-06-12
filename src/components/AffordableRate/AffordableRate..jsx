import React from "react";

const pricingPlans = [
  {
    id: 1,
    price: "$ 19.00 USD",
    description: "Pay per Appointment",
    bgColor: "bg-secondary/50",
    features: [
      "Have up to 12 monthly appointment at any time",
      "Initial consultation with a healthcare provider.",
      "Includes essential tests such as basic blood tests.",
    ],
  },
  {
    id: 2,
    price: "$ 599.00 USD",
    description: "Join to medicare plan",
    bgColor: "bg-primary/50",
    features: [
      "Have up to 12 monthly appointment at any time",
      "Initial consultation with a healthcare provider.",
      "Includes essential tests such as basic blood tests.",
    ],
  },
];

const AffordableRate = () => {
  return (
    <div className=" bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Affordable healthcare
        </h1>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${plan.bgColor} rounded-xl p-6 relative`}
            >
              {/* Price Section */}
              <div className="bg-white rounded-lg p-6 mb-6 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {plan.price}
                    </div>
                    <div className="text-gray-600">{plan.description}</div>
                  </div>
                  {/* Heart Icon */}
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Choose Plan Button */}
              <button className="w-full bg-gray-800 text-white py-2 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffordableRate;
