import React, { useState } from 'react';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/cartContext';

const Navbar = () => {
  const {total_item}= useCart()
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
      <NavLink to={'/'}>
      RVTech.
      </NavLink>
      </h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {/* <li><NavLink to="/login">Login</NavLink></li> */}
        <li><div className="cart-icon-container">
      <NavLink to={'/cart'}><FaShoppingCart className="cart-icon" /></NavLink>
      {total_item > 0 ? <span className="item-count">{total_item}</span> : <span className="item-count">{0}</span> }
    </div></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ?<IoMdClose /> : <GiHamburgerMenu /> }
      </button>
    </nav>
  );
};

export default Navbar;
