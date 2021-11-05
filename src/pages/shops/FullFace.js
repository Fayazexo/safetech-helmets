import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleShop from "../../components/PageTitle/PageTitleShop";
import ShopContent from "../../components/Shop/ShopContent";
import FooterOne from "../../components/Footer/FooterOne";
import dataShop from "../../data/OnlineShop/full-face-data.json";
const FullFace = () => (
  <Loader>
    <HeaderOne />
    <PageTitleShop title="Full Face" />
    <ShopContent layout="box" pagination="false" dataShop={dataShop} />
    <FooterOne />
  </Loader>
);

export default FullFace;
