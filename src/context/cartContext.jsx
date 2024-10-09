import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/cartReducer";
import { defer } from "react-router-dom";


const CartContext = createContext();

const getLsCartData = () => {
  try {
    const localCartData = localStorage.getItem('cartItems');
    if (!localCartData) {
      return [];
    }
    return JSON.parse(localCartData);
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
    return [];
  }
};

const initialState = {
  // cart:[],
  cart:getLsCartData(),
  total_item: 0,
  total_price: 0,
  shipping_fee: 5000,
}
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } })
  }

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // to remove the individual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  //to store cart item in LS and calculate totalprice,totalamt
  useEffect(() => {
    dispatch({type:"CART_ITEM_PRICE_TOTAL"});
    localStorage.setItem('cartItems', JSON.stringify(state.cart))
  }, [state.cart]);

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };
  return <CartContext.Provider value={{ ...state, addToCart, clearCart, setIncrement, setDecrease, removeItem, clearCart }}>
    {children}
  </CartContext.Provider>
}

const useCart = () => {
  return useContext(CartContext)
};

export { CartContext, CartProvider, useCart }