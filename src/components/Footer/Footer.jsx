import React from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Phone, // For "Schedule a call" card
  AtSign, // For "Book an Appointment" card (representing email/contact)
  Mail, // For "Send a Message" card
  ArrowUpRight, // For the arrow icon in the cards
  Globe, // For the logo placeholder
} from "lucide-react";
import logo from "../../assets/logoh.png";

// Data for the top section cards
const footerCards = [
  {
    id: "schedule-call",
    title: "Schedule a call",
    icon: Phone,
    arrowBgColor: "bg-blue-500",
  },
  {
    id: "book-appointment",
    title: "Book an Appointment",
    icon: AtSign,
    arrowBgColor: "bg-pink-500",
  },
  {
    id: "send-message",
    title: "Send a Message",
    icon: Mail,
    arrowBgColor: "bg-amber-500",
  },
];

// Data for the middle section navigation links
const footerNavigation = [
  {
    id: "main-page",
    title: "Main page",
    links: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Contact", href: "#" },
    ],
  },
  {
    id: "inner-page-1",
    title: "Inner page",
    links: [
      { text: "Service", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Price", href: "#" },
    ],
  },
  {
    id: "inner-page-2",
    title: "Inner page",
    links: [
      { text: "Our Doctor", href: "#" },
      { text: "Blog Details", href: "#" },
      { text: "Service details", href: "#" },
    ],
  },
  // Social media icons will be rendered separately as their structure is slightly different
];

// Footer component
export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {footerCards.map((card) => (
            <div
              key={card.id}
              className="relative bg-white p-6 rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon (absolute position for visual effect) */}
              <div className="absolute top-0 left-0 -ml-4 -mt-4 w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center transform scale-100 group-hover:scale-105 transition-transform duration-300">
                {/* Dynamically render the Lucide icon component */}
                <card.icon
                  className="h-10 w-10 text-gray-600"
                  strokeWidth={1.5}
                />
              </div>
              {/* Arrow icon (top right) */}
              <div
                className={`absolute top-4 right-4 ${card.arrowBgColor} p-2 rounded-full flex items-center justify-center cursor-pointer transform group-hover:scale-110 transition-transform duration-300`}
              >
                <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <p className="text-xl font-semibold text-gray-800 ml-20 pt-4">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        {/* Logo Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 mb-12 py-8 border-b border-gray-200">
          <div className="flex h-20 items-center space-x-3">
            {/* Logo Placeholder */}
            <img src={logo} className="max-w-[180px]" />
          </div>
          <p className="text-gray-600 text-center md:text-left max-w-md">
            Dedicated to providing exceptional care and support to help
            individuals achieve their full potential.
          </p>
        </div>

        {/* Middle Section: Navigation Links and Social Icons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-gray-700">
          {/* Navigation Columns */}
          {footerNavigation.map((col) => (
            <div key={col.id} className="col-span-1">
              <h4 className="font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Icons - span remaining columns on larger screens */}
          <div className="col-span-2 md:col-span-1 flex md:flex-col justify-center md:justify-start items-center md:items-end space-x-4 md:space-x-0 md:space-y- pt-4 md:pt-0">
            {/* Instagram */}
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Instagram className="h-6 w-6" />
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Twitter className="h-6 w-6" />
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 text-gray-600 text-sm space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <span className="text-center md:text-left">
              All Right Reserved{" "}
              <span className="text-red-800">Horizon Ability Care</span>
            </span>
            <span className="text-center md:text-left">
              Designed by{" "}
              <a
                href="https://www.techxudo.com/"
                target="_blank"
                className="text-blue-600 hover:underline"
                rel="noopener noreferrer"
              >
                Techxudo
              </a>
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <a href="#" className="">
              2025
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
