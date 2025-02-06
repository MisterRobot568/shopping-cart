import styles from "./Cart.module.css";
import { useLocation } from "react-router-dom";

//1) we'll try useLocation method to pass data to the Cart component
const Cart = () => {
  return (
    <div className={styles.container}>
      <p>Hello this is the cart page</p>
    </div>
  );
};

export default Cart;
