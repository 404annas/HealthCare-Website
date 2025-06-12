import React, { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default

  const faqData = [
    {
      id: 1,
      question: "What specialties does your hospital offer?",
      answer:
        "In sapien tincidunt faucibus sagittis pharetra sit turpis. Feugiat eu pulvinar ultricies justo eleifend quis. Faucibus adipiscing pharetra netus egestas iaculis. Enim magna sagittis elementum ut risus scelerisque risus.",
    },
    {
      id: 2,
      question: "How do I schedule a consultation with a specialist?",
      answer:
        "You can schedule a consultation by calling our appointment line, using our online booking system, or visiting our patient portal. Our staff will help you find the right specialist based on your needs and insurance coverage.",
    },
    {
      id: 3,
      question: "What amenities are available for patients and visitors?",
      answer:
        "We offer free WiFi, comfortable waiting areas, cafeteria services, parking facilities, gift shop, chapel services, and family lounges. We also provide interpreter services and accessibility accommodations for all patients.",
    },
    {
      id: 4,
      question: "How can I understand my medical bill and charges?",
      answer:
        "Our billing department provides detailed explanations of all charges. You can request an itemized bill, speak with a financial counselor, and we offer payment plans. We also work with insurance companies to ensure proper coverage.",
    },
    {
      id: 5,
      question: "How do you ensure patient safety and infection control?",
      answer:
        "We follow strict protocols including regular sanitization, proper PPE usage, visitor screening, isolation procedures when necessary, and continuous staff training. Our infection control team monitors all safety measures 24/7.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Frequently Asked Questions
        </h1>

        {/* FAQ Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-gray-100 rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 md:px-8 md:py-8 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset hover:bg-gray-100 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                        openFAQ === index ? "rotate-45" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Click here button */}
      </div>
    </div>
  );
};

export default FAQSection;
