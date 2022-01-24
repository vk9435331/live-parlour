import React from "react";
import Crausal from "./Crausal";
import OurCustomer from "./OurCustomer";
import ServicesPages from "./ServicesPages";
import Footer from "../FooterPages/Footer";
// import css

const SalloonContent = () => {
  return (
    <div className="container">
      {/* add crausal content */}
      <Crausal />
      <OurCustomer />
      <ServicesPages />
      <Footer />
    </div>
  );
};

export default SalloonContent;
