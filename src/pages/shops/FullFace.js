import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleShop from "../../components/PageTitle/PageTitleShop";
import ShopContent from "../../components/Shop/ShopContent";
import FooterOne from "../../components/Footer/FooterOne";

const FullFace = () => (
  <Loader>
    <HeaderOne />
    <PageTitleShop title="Full Face" />
    <ShopContent layout="box" pagination="false" />
    <FooterOne />
  </Loader>
);

export default FullFace;
