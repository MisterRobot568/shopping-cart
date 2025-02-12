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
      {cartItems &&
        cartItems.map((item, index) => (
          <div key={index}>
            {item.title}{" "}
            <button
              type="button"
              onClick={() => {
                removeFromCart(index);
              }}
            >
              remove item
            </button>
          </div>
        ))}

      {/* <p>{cartItems}</p> */}
      <p>Hello this is the cart page</p>
    </div>
  );
};

export default Cart;
