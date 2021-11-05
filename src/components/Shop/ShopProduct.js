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
            src={require(`../../assets/images/shop/${productType}/${productId}/image-0${
              i + 1
            }.png`)}
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

  const img1 = require(`../../assets/images/shop/${productType}/${productId}/image-01.png`);
  const img2 = require(`../../assets/images/shop/${productType}/${productId}/image-02.png`);
  const img3 = require(`../../assets/images/shop/${productType}/${productId}/image-03.png`);
  const img4 = require(`../../assets/images/shop/${productType}/${productId}/image-04.png`);

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="product-slider">
            <Slider {...settings}>
              <div>
                <img src={img1} className="img-fluid" alt="single-product" />
              </div>
              <div>
                <img src={img2} className="img-fluid" alt="single-product" />
              </div>
              <div>
                <img src={img3} className="img-fluid" alt="single-product" />
              </div>
              <div>
                <img src={img4} className="img-fluid" alt="single-product" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Black Half Sleeve T-Shirt</h2>
          <h3 className="grey">
            $59.99 <span className="old-price font-18px">$79.99</span>
          </h3>
          <div className="single-product-des">
            <h5>Product Desription</h5>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, consectetur
              adipiscing elit. Praesent vitae odio ullamcorper, accumsan felis
              vitae, commodo diam. Proin facilisis iaculis ipsum, non
              consectetur urna egestas nec. Nulla facilisi. Aliquam erat
              volutpat. Nam aliquet tellus nec augue auctor maximus.
            </p>
          </div>
          <div className="product-fabric-detail">
            <h5>Product Fabric</h5>
            <p>
              100% Cotton Single jersey Prewashed to impart a softer texture
            </p>
            <h5>WashCare Instructions</h5>
            <p>
              Machine wash cold Do not bleach or wash with chlorine based
              detergent or water Wash/dry inside out Do not iron directly on
              prints Dry promptly in shade Dry on a flat surface as hanging may
              cause measurement variations Product color may vary little due to
              photography Wash with similar clothes.
            </p>
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
