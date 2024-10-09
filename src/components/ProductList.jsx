import React from 'react';
import '../styles/productlist.css'
import { useFilter } from '../context/filterContext';
import GridView from './GridView';
import ListView from './ListView';
import { useEffect } from 'react';

const ProductList = () => {
  const {filter_products, grid_view}= useFilter();
// console.log('produlist products' ,filter_products);

  if(grid_view){
    return <GridView products={filter_products}/>
  }
  else {
    return <ListView products={filter_products}/>
  }
 
}

export default ProductList;
