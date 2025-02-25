import styles from "./CartCard.module.css";
import { useContext } from "react";
import { CartContext } from "../../App";

const CartCard = ({ item, index }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  return (
    <div key={index} className={styles.cartCard}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.image} alt="" />
      </div>
      <p className={styles.title}>{item.title} </p>
      <p className={styles.price}>${item.price}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          removeFromCart(index);
        }}
      >
        REMOVE ITEM
      </button>
    </div>
  );
};

export default CartCard;
