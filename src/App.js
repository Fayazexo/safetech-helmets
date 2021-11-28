import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DigitalAgency from "./pages/home/DigitalAgency";
import ContactCreative from "./pages/contact/ContactCreative";
import Dealers from "./pages/contact/Dealers";
import Page404 from "./pages/others/Page404";
import FullFace from "./pages/shops/FullFace";
import FullFaceProduct from "./pages/shops/FullFace/FullFaceProduct";
import VisorProduct from "./pages/shops/Visor/VisorProduct";
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
            path={`${process.env.PUBLIC_URL}/full-face/:productId`}
            component={FullFaceProduct}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/visor/:productId`}
            component={VisorProduct}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/full-face`}
            component={FullFace}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={ContactCreative}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/dealers`}
            component={Dealers}
          />
          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
