import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { GoDash } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa";
import { Menu, PlusCircle, X } from "lucide-react";
import logo from "../../assets/logoh.png";

const navLinks = [
  { text: "Home", href: "#", type: "link" },
  { text: "About", href: "#", type: "link" },
  { text: "Service", href: "#", type: "link" },
  {
    text: "Pages",
    href: "#",
    type: "dropdown",
    subLinks: [
      { text: "Our Doctor", href: "#" },
      { text: "Blog Details", href: "#" },
      { text: "Service details", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="w-[180px] h-auto" src={logo} alt="Company Logo" />
        </div>

        <div className="hidden md:flex items-center space-x-12 text-md">
          {navLinks.map((link) => (
            <div key={link.text} className="group relative flex items-center">
              <a
                href={link.href}
                className="text-primary hover:text-secondary transition-colors duration-300 cursor-pointer"
              >
                {link.text}
              </a>
              {link.type === "link" && (
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
                  <GoDash />
                </span>
              )}
              {link.type === "dropdown" && (
                <span className="text-primary group-hover:text-secondary ml-1">
                  <FaAngleDown />
                </span>
              )}
              {/* Dropdown Menu for "Pages" */}
              {link.type === "dropdown" && link.subLinks && (
                <div className="absolute left-0 top-full  hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-48 z-10">
                  {link.subLinks.map((subLink) => (
                    <a
                      key={subLink.text}
                      href={subLink.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                    >
                      {subLink.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-center px-6 py-[10px] bg-secondary outline-none   rounded-lg text-white gap-1 font-semibold hover:bg-primary  transition-colors duration-300 cursor-pointer">
          <PlusCircle />
          <p>Appointment Now</p>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-center py-8">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="flex flex-col items-center space-y-6 mt-12 text-xl">
            {navLinks.map((link) => (
              <React.Fragment key={link.text}>
                <a
                  href={link.href}
                  className="text-gray-800 hover:text-[#3FB9FF] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </a>
                {link.type === "dropdown" && link.subLinks && (
                  <div className="flex flex-col items-center space-y-3 pl-4">
                    {link.subLinks.map((subLink) => (
                      <a
                        key={subLink.text}
                        href={subLink.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subLink.text}
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}

            <div className="mt-8">
              <a
                href="#"
                className="flex items-center justify-center px-8 py-3 bg-black outline-none border border-black rounded-lg text-white gap-2 font-semibold hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <p className="bg-[#3FB9FF] rounded-full text-sm p-1">
                  <FiPlus />
                </p>
                <p>Appointment Now</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
