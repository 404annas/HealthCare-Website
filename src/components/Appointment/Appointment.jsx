import { FiPlus } from "react-icons/fi";

const Appointment = () => {
  return (
    <section className="py-20 px-24">
      <div className="bg-[#FFDC68] flex items-center justify-between leading-tight px-6 rounded-3xl h-80">
        <div>
          <h1 className="text-[40px] p-semibold">Book your appointment</h1>
          <h1 className="text-[40px] p-semibold">for better health</h1>
          <div className="flex items-center justify-center px-6 py-[10px] bg-black outline-none border border-black rounded-lg text-white gap-2 p-semibold w-fit mt-8 cursor-pointer">
            <p className="bg-[#3FB9FF] rounded-full text-sm">
              <FiPlus />
            </p>
            <p>Appointment Now</p>
          </div>

          <div className="bg-[#FFF9E1] mt-8 p-4 p-medium">
            Monday - Friday &nbsp;<span className="text-gray-500">8AM - 10PM</span>&nbsp; Saturday-Sunday &nbsp;<span className="text-gray-500">9AM - 10PM</span>
          </div>
        </div>

        <div>
          <img
            className="w-[500px] z-10 -translate-y-[25px]"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/6790b3b80e7f30109a765bff_%20Cta%20Image.png"
            alt="Doctor Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Appointment;
