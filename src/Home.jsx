import React from 'react';
import web from "../src/images/r1.png";
import Common from './Common';

const Home = () => {
  return (
      <>
       <Common 
      name='Grow your business with' 
      img = {web} 
      visit='/service' 
      btname="Get Started"/>
      </>

  )
}

export default Home;