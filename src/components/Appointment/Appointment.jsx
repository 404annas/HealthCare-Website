import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
const Appointment = () => {
  return (
    <section className="py-20 px-24">
      <div className="bg-gradient-to-br from-primary to-secondary flex items-center justify-between leading-tight px-6 rounded-3xl h-80">
        <div>
          <h1 className="text-[40px] text-white font-medium">
            Book your appointment
          </h1>
          <h1 className="text-[40px] text-white font-medium">
            for better health
          </h1>
          <div className="flex items-center justify-center px-6 py-[10px] bg-secondary outline-none  rounded-lg text-white gap-2 p-semibold w-fit mt-8 cursor-pointer">
            <p className="bg-[#3FB9FF] rounded-full text-sm">
              <FiPlus />
            </p>
            <p>Appointment Now</p>
          </div>

          <div className="mt-8 p-4 p-medium text-sm text-gray-300">
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
              <div className="flex gap-2">
                <span className="font-medium text-white">Monday - Friday:</span>
                <span className="text-white">8AM - 10PM</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium text-white">
                  Saturday - Sunday:
                </span>
                <span className="text-white">9AM - 10PM</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            className="w-[500px] z-10 -translate-y-[25px]"
            src="https://cdn.prod.website-files.com/6773d815f54a86fa2d5bd652/6790b3b80e7f30109a765bff_%20Cta%20Image.png"
            alt="Doctor Image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Appointment;
