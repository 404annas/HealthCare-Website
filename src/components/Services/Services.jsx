import React from "react";
import { motion } from "framer-motion";
import { TbChevronsUpRight } from "react-icons/tb";
const Services = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: {
      rotate: -3,
      opacity: 0.8,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    visible: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const services = [
    {
      id: 1,
      title: "Emergency Medical Care",
      image:
        "https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd69b/6790b35fa82850ef10dc49a5_Service%20Image%205-p-500.png",
      bgColor: "bg-primary/50",
      borderColor: "border-[#E5BA61]",
      fallbackBg: "#FBE285",
    },
    {
      id: 2,
      title: "Pediatric Healthcare Services",
      image:
        "https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd69b/6790c0e2794dfeab7e0fc44e_Service%20Details%20Image-p-500.png",
      bgColor: "bg-secondary/40",
      borderColor: "border-[#D97ECC]",
      fallbackBg: "#F2A6E7",
    },
    {
      id: 3,
      title: "Maternity Care Excellence",
      image:
        "https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd69b/6790c343a31e3ddf7a592828_Image02-p-800.png",
      bgColor: "bg-primary/40",
      borderColor: "border-[#B0DE67]",
      fallbackBg: "#D2FF8A",
    },
    {
      id: 4,
      title: "Surgical Expertise Available",
      image:
        "https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd69b/6790b3014da09d1d1121d281_Service%20image%203.png",
      bgColor: "bg-secondary/40",
      borderColor: "border-[#8CCAD7]",
      fallbackBg: "#A1DFEC",
    },
  ];

  return (
    <section className="bg-white px-4 md:px-12 lg:px-24 py-16 md:py-20 font-inter">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Comprehensive services
          </h1>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            for your health needs
          </h1>
        </div>
        <button className="bg-white text-gray-800 font-semibold hover:bg-blue-500 hover:text-white border border-gray-200 rounded-lg transition-all duration-300 cursor-pointer px-6 py-3 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
          View More Services
        </button>
      </div>

      {/* Services Cards Container */}
      <div className="flex flex-col items-center">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="w-full max-w-6xl"
            initial="hidden"
            animate="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
              margin: "-50px",
            }}
            variants={cardVariants}
          >
            <div
              className={`flex flex-col lg:flex-row items-center ${
                service.bgColor
              } rounded-3xl ${
                index === 0 ? "mt-12 md:mt-10" : "mt-8 md:mt-10"
              } shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group`}
            >
              {/* Arrow Element */}
              <div
                className={`absolute top-0 border-8  border-white  right-4 w-20 h-20  rounded-full flex items-center justify-center  transform -translate-y-20  group-hover:translate-y-0 transition-transform duration-500 ease-out`}
              >
                <TbChevronsUpRight size={30} />
              </div>

              {/* Image */}
              <img
                className="w-full lg:w-96 h-auto rounded-2xl flex-shrink-0 object-cover mb-6 lg:mb-0 lg:mr-8"
                src={service.image}
                alt={`${service.title} Image`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/400x300/${service.fallbackBg.replace(
                    "#",
                    ""
                  )}/333333?text=Image+Missing`;
                }}
              />
              {/* Content */}
              <div className="flex flex-col gap-3 md:gap-4 text-center lg:text-left">
                <h2 className="font-bold text-gray-900 text-xl md:text-2xl">
                  {service.title}
                </h2>
                <hr
                  className={`w-24 md:w-full max-w-md mx-auto lg:mx-0 border-t-2 ${service.borderColor}`}
                />
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Alias nulla placeat modi neque aut exercitationem quod
                  voluptatem molestias! Debitis, dolor.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
