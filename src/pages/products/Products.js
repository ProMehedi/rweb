import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import Hero from '../../components/Hero';
import Pricing from '../../components/Pricing';

function Products() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Pricing />
    </>
  );
}

export default Products;