import styles from "./CartCard.module.css";
import { useContext } from "react";
import { CartContext } from "../../App";

const CartCard = ({ item, index }) => {
  // this component creates cards from the cart items to go in the cart
  const { cartItems, removeFromCart } = useContext(CartContext);
  let title = item.title;
  let newTitle = title;
  if (title.length > 10) {
    newTitle = title.substring(0, 10) + "...";
  }
  return (
    <div key={index} className={styles.cartCard}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.image} alt="" />
      </div>
      {/* <p className={styles.title}>{item.title} </p> */}
      <p className={styles.title}>{newTitle} </p>
      <p className={styles.price}>${item.price}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          removeFromCart(index);
        }}
      >
        REMOVE
      </button>
    </div>
  );
};

export default CartCard;
