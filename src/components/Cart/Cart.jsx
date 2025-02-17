import styles from "./Cart.module.css";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";

//1) we'll try useLocation method to pass data to the Cart component
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  // console.log(cartItems);
  return (
    <div className={styles.container}>
      <p>Your Cart</p>

      <div className={styles.cart}>
        {cartItems &&
          cartItems.map((item, index) => (
            <div key={index} className={styles.cartCard}>
              <img className={styles.img} src={item.image} alt="" />
              <p className={styles.title}>{item.title} </p>
              <p className={styles.price}>{item.price}</p>
              <button
                type="button"
                onClick={() => {
                  removeFromCart(index);
                }}
              >
                REMOVE ITEM
              </button>
            </div>
          ))}
      </div>

      {/* <p>{cartItems}</p> */}
      <p>Hello this is the cart page</p>
    </div>
  );
};

export default Cart;
