import Appointment from "./Appointment/Appointment";
import {
  AffordableRate,
  CareJourney,
  FAQSection,
  Footer,
  Testimonial,
} from "./components";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const HealthCareWeb = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <CareJourney />
      <Appointment />
      <FAQSection />
      <Testimonial />
      <AffordableRate />
      <Footer />
    </div>
  );
};

export default HealthCareWeb;
