export default function StepSection() {
  return (
    <div className=" p-8">
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-8 gap-2 max-w-4xl mx-auto">
        {/* Step 01 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 bg-green-300 rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-bl-full"></div>
              <span className="text-white text-4xl font-bold relative z-10">
                01
              </span>
            </div>
          </div>
          <h3 className="text-gray-800 text-lg font-semibold leading-tight">
            Schedule Your
            <br />
            Appointment
          </h3>
        </div>

        {/* Step 02 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 bg-pink-300 rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-pink-200 rounded-bl-full"></div>
              <span className="text-white text-4xl font-bold relative z-10">
                02
              </span>
            </div>
          </div>
          <h3 className="text-gray-800 text-lg font-semibold leading-tight">
            Undergo Advanced
            <br />
            Diagnosis
          </h3>
        </div>

        {/* Step 03 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-200 rounded-bl-full"></div>
              <span className="text-white text-4xl font-bold relative z-10">
                03
              </span>
            </div>
          </div>
          <h3 className="text-gray-800 text-lg font-semibold leading-tight">
            Personalized
            <br />
            Treatment Plan
          </h3>
        </div>
      </div>
    </div>
  );
}
