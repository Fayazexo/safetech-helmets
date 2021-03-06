import React from "react";
import ShopItem from "./ShopItem";
import Pagination from "../../components/Pagination/Pagination";
import ShopWrapper from "./ShopWrapper";
import SidebarForShop from "../Sidebar/SidebarForShop";
import ShopMasonryWrapper from "./ShopMasonryWrapper";

const ShopContent = ({ layout, pagination, dataShop }) => (
  <section>
    <div
      className={
        "container" +
        (layout === "fullwidth" || layout === "masonry" ? "-fluid" : "")
      }
    >
      <ShopMasonryWrapper layout={layout}>
        <div className="row">
          <ShopWrapper layout={layout}>
            {dataShop.map((product) => (
              <ShopItem
                key={product.id}
                layout={layout}
                image={product.image}
                title={product.title}
                currency={product.currency}
                price={product.price}
                oldPrice={product.oldprice}
              />
            ))}
          </ShopWrapper>
          {layout === "standard" ? <SidebarForShop /> : null}
        </div>
      </ShopMasonryWrapper>
      {pagination === "true" ? (
        <div className="row">
          <div className="col-md-12">
            <Pagination
              postsPerPage="6"
              page="1"
              totalPosts="20"
              currentPage="1"
            />
          </div>
        </div>
      ) : null}
    </div>
  </section>
);

export default ShopContent;
