import React from 'react';
import { FaShippingFast, FaHeadset, FaUndo, FaApple, FaGoogle, FaAmazon, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/services.css';

const Services = () => {
  return (
    <section className="services ">
      <div className="service">
        <FaShippingFast className="icon" />
        <h3>Fast Shipping</h3>
        <p>Get your products delivered quickly and safely.</p>
      </div>
      <div className="service">
        <FaHeadset className="icon" />
        <h3>24/7 Support</h3>
        <p>We are here to help you anytime, anywhere.</p>
      </div>
      <div className="service">
        <FaUndo className="icon" />
        <h3>Easy Returns</h3>
        <p>Hassle-free returns within 30 days.</p>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  return (
    <section className="trusted-by">
      <h3>Trusted By 1000+ Companies</h3>
      <div className="brands container">
        <FaApple className="brand-icon" />
        <FaGoogle className="brand-icon" />
        <FaAmazon className="brand-icon" />
        <FaTwitter className='brand-icon' />
        <FaYoutube className='brand-icon' />
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Services />
      <TrustedBy />
    </div>
  );
};

export default App;
