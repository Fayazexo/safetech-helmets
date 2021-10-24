import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import dataDigital from "../../data/Slider/digital-agency-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderSeven from "../../components/Hero/HeroSliderSeven";
import WhoWeAreSix from "../../components/WhoWeAre/WhoWeAreSix";

import CounterTwo from "../../components/Counters/CounterTwo";

import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";

import FooterOne from "../../components/Footer/FooterOne";

const DigitalAgency = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderOne />
      <HeroSliderSeven data={dataDigital} />
      <WhoWeAreSix
        title="Safety Is Our No. 1 Priority"
        tagline="See how Safetech Helmets ensures safety"
      />
      {/* <Portfolio
        columns="2"
        layout="boxed"
        filter="true"
        classAppend="pt-0 white-bg"
      /> */}
      <CounterTwo bg="white-bg" />

      <ClientsBrand />
      <FooterOne />
    </Loader>
  );
};

export default DigitalAgency;
