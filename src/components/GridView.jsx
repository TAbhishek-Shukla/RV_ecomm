import React from 'react';
import '../styles/gridview.css';
import Product from './product';
const GridView = ({products}) => {
  return (
    <section className="grid_section">
    <div className="gridview-container grid grid-three-col">
      {products.map((curElem) => {
        return <Product key={curElem.id} product={{...curElem}} />;
      })}
    </div>
  </section>
  );
}

export default GridView;
