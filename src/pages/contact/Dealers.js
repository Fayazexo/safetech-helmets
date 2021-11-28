import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleContact from "../../components/PageTitle/PageTitleContact";
import DealersContact from "../../components/ContactUs/DealersContact";
import FooterOne from "../../components/Footer/FooterOne";

const ContactCreative = () => (
  <Loader>
    <HeaderOne />
    <PageTitleContact
      title="Dealers Information"
      tagline="Safetech Dealers Section"
    />
    <DealersContact />

    <FooterOne />
  </Loader>
);

export default ContactCreative;
