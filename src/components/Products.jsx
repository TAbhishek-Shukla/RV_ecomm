import React from 'react';
import '../styles/products.css';
import FilterSection from './FilterSection.jsx'
import Sort from './Sort.jsx'
import ProductList from './ProductList.jsx'
import { useFilter } from '../context/filterContext.jsx';
const Products = () => {
  const { filter_products } = useFilter();
  if(!filter_products){
    return <h2>Loading products...</h2>
  }
  return (
    <section className="products-sect">
      <div className=" grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Products;
