import withRoot from "../withRoot";
import React from "react";
import ProductHero from "../views/ProductHero";
import ProductValues from "../views/ProductValues";
import ProductCategories from "../views/ProductCategories";
import Footer from "../views/Footer";

function Home() {
  return (
    <>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <Footer />
    </>
  );
}

export default withRoot(Home);
