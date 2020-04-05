import React from 'react';

import HomeScreen from '../components/Home'
import { banner } from '../res/Datos'

const Home = () => {
  return(
    <HomeScreen data={banner}/>
  );
}

export default Home;
