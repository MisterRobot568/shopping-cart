import styles from "./Cart.module.css";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";

//1) we'll try useLocation method to pass data to the Cart component
const Cart = () => {
  const { cartItems, removeFromCart, cartItemCount, products } =
    useContext(CartContext);
  // console.log(cartItems);
  return (
    // <div className={styles.container}>
    <div
      className={cartItemCount > 0 ? styles.container : styles.containerEmpty}
    >
      {cartItemCount > 0 ? (
        <div className={styles.cartContainer}>
          <div className={styles.title}>YOUR CART</div>
          <div className={styles.itemLabels}>
            <div>ITEM</div>
            <div>DESCRIPTION</div>
            <div>PRICE</div>
            <div></div>
          </div>
          <div className={styles.horizontalLine}></div>
          <div className={styles.cart}>
            {cartItems &&
              cartItems.map((item, index) => (
                <CartCard item={item} index={index} key={index} />
              ))}
          </div>

          {/* <p>{cartItems}</p> */}
        </div>
      ) : (
        <div className={styles.cartEmptyContainer}>
          <div className={styles.emptyMessage}>YOUR CART IS EMPTY</div>
          <Link to="/products/all" state={{ products: products }}>
            <div className={styles.shopNow}>SHOP NOW</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
