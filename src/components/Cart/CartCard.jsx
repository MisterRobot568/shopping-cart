import styles from "./Cart.module.css";

const CartCard = ({ item }) => {
  const stuff = "this";

  return (
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
  );
};

export default CartCard;
