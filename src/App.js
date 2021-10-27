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

import FullFace from "./pages/shops/FullFace";

import FullFaceProduct from "./pages/shops/FullFace/FullFaceProduct";

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
            path={`${process.env.PUBLIC_URL}/full-face/:productHandle`}
            component={FullFaceProduct}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/full-face`}
            component={FullFace}
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
