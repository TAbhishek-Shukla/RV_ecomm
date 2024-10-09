import React from 'react';
import Hero from './Hero';
import Services from './Services';
import FeaturedProducts  from './FeaturedProducts.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts />
      <Services/>
    </div>
  );
}

export default Home;
