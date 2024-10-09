import { useCart } from "../context/cartContext";
import CartItem from "./cartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import '../styles/cart.css'
const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCart();
  // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);

  if (cart.length === 0) {
    return (
      <div >
        <h3 className="empty-cart">No Cart Item </h3>
      </div>
    );
  }

  return (
    <section className="cart-div">
      <div className="container">
        <div className="cart_heading grid grid-five-col">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart?.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/products">
            <button> continue Shopping </button>
          </NavLink>
          <button className="btn btn-clear" onClick={clearCart}>
            clear cart
          </button>
        </div>

        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Cart;