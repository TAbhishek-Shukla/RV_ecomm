import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import  CartAmountToggle from './CartAmountToggle'
import '../styles/addtocart.css'
import {useCart} from '../context/cartContext'
const AddToCart = ({product}) => {
    const {addToCart}= useCart()
    
    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
  
    const setDecrease = () => {
      // amount > 1 ? setAmount(amount - 1) : setAmount(1);
      setAmount((prev)=>{
        return Math.max(1,prev-1)
      })
    };
  
    const setIncrease = () => {
      // amount < stock ? setAmount(amount + 1) : setAmount(stock);
      setAmount((prev)=>{
        return Math.min(stock,prev+1)
       })
    };
    
  return (
    <section className='addtocart-sect'>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart  */}
      < CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
      {/* <NavLink to="/cart" > */}
        <button className="btn">Add To Cart</button>
      </NavLink>
    </section>
  );
}

export default AddToCart;
