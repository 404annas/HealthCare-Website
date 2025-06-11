import Appointment from "./Appointment/Appointment"
import Hero from "./Hero/Hero"
import Navbar from "./Navbar/Navbar"
import Services from "./Services/Services"
import Testimonials from "./Testimonials/Testimonials"

const HealthCareWeb = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Appointment />
      <Testimonials />
    </div>
  )
}

export default HealthCareWeb
