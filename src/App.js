import withRoot from './withRoot';
import React from 'react';
import './App.css';
import ProductHero from './views/ProductHero';
import ProductValues from './views/ProductValues';
import ProductCategories from './views/ProductCategories';

function App() {
  return (
    <>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
    </>
  );
}

export default withRoot(App);
