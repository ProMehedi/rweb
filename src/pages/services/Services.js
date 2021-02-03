import React from 'react';
import Hero from '../../components/Hero';
import Pricing from '../../components/Pricing';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Hero {...homeObjThree} />
      <Hero {...homeObjOne} />
      <Pricing />
    </>
  );
}

export default Services;