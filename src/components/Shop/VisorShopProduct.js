import React from "react";
import Slider from "react-slick";
import dataProducts from "../../data/OnlineShop/full-face-data.json";
import ShopItem from "./ShopItem";
import { useParams } from "react-router-dom";

const ShopProduct = ({ productType }) => {
  const { productId } = useParams();
  console.log(productId);
  const settings = {
    customPaging: function (i) {
      return (
        <a href="!#">
          <img
            src={require(`../../assets/images/shop/${productType}/${productId}.jpg`)}
            alt=""
          />
        </a>
      );
    },
    dots: true,
    fade: true,
    className: "product-slider flexslider",
    dotsClass: "flex-control-nav flex-control-thumbs",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function normalizeNames(words) {
    var separateWord = words.toLowerCase().split(" ");
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(" ");
  }

  const img1 = require(`../../assets/images/shop/${productType}/${productId}.jpg`);

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="product-slider">
            <Slider {...settings}>
              <div>
                <img src={img1} className="img-fluid" alt="single-product" />
              </div>
              {/* <div>
                <img src={img2} className="img-fluid" alt="single-product" />
              </div>
              <div>
                <img src={img3} className="img-fluid" alt="single-product" />
              </div>
              <div>
                <img src={img4} className="img-fluid" alt="single-product" />
              </div> */}
            </Slider>
          </div>
        </div>
        <div className="col-md-6">
          <h2>{normalizeNames(productId.replaceAll("-", " "))}</h2>
          <h3 className="grey">5499.00 ฿</h3>
          <div className="single-product-des">
            <h5>Product Desription</h5>
            <p>
              <strong>MATERIALS</strong> Shell Material: Shock Resistant
              Thermoplastic Cushion Material: Expanded Polystyrene Interior
              Liner: HMT Visor and Sun Visor: Polycarbonate with Anti Scratch
              Treatment
            </p>
          </div>
          <div className="product-fabric-detail">
            <h5>GENERAL</h5>
            <p>Weight: 1550±50 g</p>
            <p>Standard Certificate: DOT FMVSS 218 {"&"} TIS 369-2557</p>
            <p>Visor Color: Light Smoke Iridium Gold Blue Silver</p>
            <p>Ventilation Number: 4 Channels</p>
          </div>
        </div>
      </div>
      <div className="row mt-100">
        {dataProducts
          .filter((v, i) => i < 4)
          .map((product) => (
            <ShopItem
              key={product.id}
              layout=""
              image={product.image}
              title={product.title}
              currency={product.currency}
              price={product.price}
              oldPrice={product.oldprice}
            />
          ))}
      </div>
    </>
  );
};

export default ShopProduct;
