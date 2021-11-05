import React from "react";
import Loader from "../../../components/Loader/Loader";
import HeaderOne from "../../../components/Header/HeaderOne";
import ShopProduct from "../../../components/Shop/ShopProduct";
import FooterOne from "../../../components/Footer/FooterOne";

const FullFaceProduct = () => {
  return (
    <Loader>
      <HeaderOne type="white" />
      <section>
        <div className="container">
          <ShopProduct productType="full-face" />
        </div>
      </section>
      <FooterOne />
    </Loader>
  );
};

export default FullFaceProduct;
