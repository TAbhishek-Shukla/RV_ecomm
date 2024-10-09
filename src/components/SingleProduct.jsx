import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../context/productContext';
import PageNavigation from './PageNavigation';
import MyImage from './MyImage';
import FormatPrice from '../helpers/FormatPrice';
import AddToCart from './AddToCart'
import '../styles/singleproduct.css';
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from './Stars';

const SingleProduct = () => {
  const {id}= useParams()
  const {fetchSingleProduct,singleProduct,isSingleLoading,isSingleError} = useProducts()
  const {category,
    colors,
    company,
    description,
    featured,
    id:prodId,
    image,
    name : prodname,
    price,
    reviews,
    stars,
    stock
    }= singleProduct;


  useEffect(() => {
    fetchSingleProduct(id)
  }, [id]);
 if(singleProduct.error || isSingleError){
  return <h2 className='loading'>Products details not found.</h2>
}
else if(isSingleLoading){
   return <h2 className='loading'>Loading Product details...</h2>
 }
  return (
    <section className='singleprod-sect'>
    <PageNavigation title={prodname} />
    <div className="prod-container">
      <div className="grid grid-two-col">
        {/* product Images  */}
        <div className="product_images">
          <MyImage imgs={image} />
        </div>

        {/* product dAta  */}
        <div className="product-data">
          <h2>{prodname}</h2>
          <Star stars={stars} reviews={reviews} />

          <p className="product-data-price">
            MRP:
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p>
          <p className="product-data-price product-data-real-price">
            Deal of the Day: <FormatPrice price={price} />
          </p>
          <p className='descript'>{description}</p>
          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Thapa Delivered </p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 Year Warranty </p>
            </div>
          </div>

          <div className="product-data-info">
            <p>
              Available:
              <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
            </p>
            <p>
              ID : <span> {id} </span>
            </p>
            <p>
              Brand :<span> {company} </span>
            </p>
          </div>
          <hr />
          {stock > 0 && <AddToCart product={singleProduct} />}
        </div>
      </div>
    </div>
  </section>
  );
}

export default SingleProduct;
