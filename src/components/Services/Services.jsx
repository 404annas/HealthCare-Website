import React from "react";

const Services = () => {
  return (
    <section className="bg-white px-24 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl p-semibold">Comprehensive services</h1>
          <h1 className="text-4xl p-semibold">for your health needs</h1>
        </div>
        <div className="bg-white text-black p-medium hover:bg-[#3FB9FF] hover:text-white border border-gray-200 rounded-lg transition-all duration-300 cursor-pointer px-4 py-2">
          View More Services
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center bg-[#FBE285] rounded-3xl mt-20 -rotate-3">
          <img
            className="w-96"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd69b/6790b35fa82850ef10dc49a5_Service%20Image%205-p-500.png"
            alt="Card_1 Image"
          />
          <div className="flex flex-col gap-4 ml-20">
            <h1 className="p-semibold text-gray-900 text-xl">
              Emergency Medical Care
            </h1>
            <hr className="w-96 border-t border-[#E5BA61]" />
            <p className="w-[550px] p-regular text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              nulla placeat modi neque aut exercitationem quod voluptatem
              molestias! Debitis, dolor.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-[#F2A6E7] rounded-3xl mt-10 -rotate-3">
          <img
            className="w-96 rounded-3xl"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd69b/6790c0e2794dfeab7e0fc44e_Service%20Details%20Image-p-500.png"
            alt="Card_1 Image"
          />
          <div className="flex flex-col gap-4 ml-20">
            <h1 className="p-semibold text-gray-900 text-xl">
              Pediatric Healthcare Services
            </h1>
            <hr className="w-96 border-t border-[#D97ECC]" />
            <p className="w-[550px] p-regular text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              nulla placeat modi neque aut exercitationem quod voluptatem
              molestias! Debitis, dolor.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-[#D2FF8A] rounded-3xl mt-10 -rotate-3">
          <img
            className="w-96 rounded-3xl"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd69b/6790c343a31e3ddf7a592828_Image02-p-800.png"
            alt="Card_1 Image"
          />
          <div className="flex flex-col gap-4 ml-20">
            <h1 className="p-semibold text-gray-900 text-xl">
              Maternity Care Excellence
            </h1>
            <hr className="w-96 border-t border-[#B0DE67]" />
            <p className="w-[550px] p-regular text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              nulla placeat modi neque aut exercitationem quod voluptatem
              molestias! Debitis, dolor.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-[#A1DFEC] rounded-3xl mt-10 -rotate-3">
          <img
            className="w-96"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd69b/6790b3014da09d1d1121d281_Service%20image%203.png"
            alt="Card_1 Image"
          />
          <div className="flex flex-col gap-4 ml-20">
            <h1 className="p-semibold text-gray-900 text-xl">
              Surgical Expertise Available
            </h1>
            <hr className="w-96 border-t border-[#8CCAD7]" />
            <p className="w-[550px] p-regular text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              nulla placeat modi neque aut exercitationem quod voluptatem
              molestias! Debitis, dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
