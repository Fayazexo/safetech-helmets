import React from "react";
import ContactFormSix from "./ContactFormSix";
import Icofont from "react-icofont";
import Map from "../Maps/Map";

const ContactFour = () => (
  <>
    <section className="contact-us white-bg" id="contact">
      <div className="container">
        <div className="clearfix">
          <div className="bg-flex-right col-md-6 map-section">
            <Map />
          </div>
          <div className="col-about-left col-md-6 text-left">
            <h2>Get in Touch</h2>
            <h4 className="text-uppercase">Find your brand's voice</h4>
            <ContactFormSix />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactFour;
