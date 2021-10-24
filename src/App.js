import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home pages

import DigitalAgency from "./pages/home/DigitalAgency";

// Pages

import ContactCreative from "./pages/contact/ContactCreative";
import Page404 from "./pages/others/Page404";

// Blog

// Portfolio

// Shops

import Products from "./pages/shops/Products";

import ShopSingleProduct from "./pages/shops/ShopSingleProduct";

// Elements

import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={DigitalAgency}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-product`}
            component={ShopSingleProduct}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Products`}
            component={Products}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-creative`}
            component={ContactCreative}
          />
          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
