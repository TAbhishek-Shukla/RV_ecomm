import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../context/productContext';
import '../styles/featuredprod.css'
import CurrencyForamatter from './CurrencyForamatter';

    const FeaturedProducts = () => {
        const {featuredProducts,isLoading,isError}= useProducts()
        
        if(isLoading){
          return <h2 className='loading'>Loading...</h2>
        }
        return (
          <section className="products-page">
          <h3>CHECK NOW!</h3><br />
          <h1>Our Featured Services</h1>
          <div className="format-currency">
          <CurrencyForamatter />
          </div>
          <div className="featured-prod">

          {
            isError===true? ( 
            <h2 className='error-msg'>Error in fetching featured</h2>
          )
          :
            (featuredProducts?.map(product => (
              <ProductCard key={product.id} product={product}   />
            )))
            }
          </div>
          </section>
        );
      };
      
export default FeaturedProducts;
