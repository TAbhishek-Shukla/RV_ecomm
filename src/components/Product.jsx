// src/ProductCard.js
import React from 'react';
import '../styles/product.css';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';
const Product = ({ product,currency }) => {
 
  return (
    <div className="product-card">
    <NavLink to={`/singleproduct/${product.id}`}>
      {product.featured && <span className="featured">Featured</span>}
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price"><FormatPrice price={product.price} currency={currency} /></p>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-company">Company: {product.company}</p>
      <div className="product-colors">
        {product.colors.map((color, index) => (
          <span key={index} className="color" style={{ backgroundColor: color }}></span>
        ))}
      </div>
  </NavLink>
    </div>
  );
};

export default Product;
