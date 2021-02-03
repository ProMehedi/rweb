import React from 'react';
import { homeObjOne, homeObjThree } from './Data';
import Hero from '../../components/Hero';

function SignUp() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
    </>
  );
}

export default SignUp;