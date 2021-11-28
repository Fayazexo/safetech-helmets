import React from "react";
import Loader from "../../../components/Loader/Loader";
import HeaderOne from "../../../components/Header/HeaderOne";
import ShopProduct from "../../../components/Shop/VisorShopProduct";
import FooterOne from "../../../components/Footer/FooterOne";

const VisorProduct = () => {
  return (
    <Loader>
      <HeaderOne type="white" />
      <section>
        <div className="container">
          <ShopProduct productType="visor" />
        </div>
      </section>
      <FooterOne />
    </Loader>
  );
};

export default VisorProduct;
