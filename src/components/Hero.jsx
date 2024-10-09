import '../styles/hero.css';
import heropic from '../assets/hero.jpg';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to RVStore</h1>
        <p>Your journey to excellence starts here. Explore our wide range of products and services designed to meet all your needs. From the latest tech gadgets to everyday essentials, we have it all. Start shopping now and experience the best in quality and service.</p>
        <NavLink to="/products" className="hero-button">Get Started</NavLink>
      </div>
      <div className="hero-image">
        <img src={heropic} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
