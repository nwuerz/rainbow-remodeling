import withRoot from '../withRoot';
import React from 'react';
import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import ProductCategories from '../views/ProductCategories';

function Home(props) {
  return (
    <>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
    </>
  );
}

export default withRoot(Home);
