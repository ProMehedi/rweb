import React from 'react';
import Hero from '../../components/Hero';
import Pricing from '../../components/Pricing';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

const Home = props => {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjTwo} />
      <Pricing/>
      <Hero {...homeObjFour} />
    </>
  );
}
 
export default Home;