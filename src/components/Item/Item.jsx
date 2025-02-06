import { useParams, useLocation } from "react-router-dom";
import styles from "./Item.module.css";
const Item = () => {
  // this component is the page for a specific product when you click on it.
  //   const { category } = useParams();
  const { item } = useParams();
  // useParams gives you access to url parameters
  const location = useLocation();
  //   const product = location.state?.product;
  const product = location.state;

  // for products object we have:
  // category
  // description
  // id
  // image
  // price
  // rating.count, rating.rate
  // title

  return (
    <div className={styles.outerContainer}>
      {/* <p>category: {category}</p> */}
      <div className={styles.productContainer}>
        <div className={styles.imgContainer}>
          <img src={product.image} className={styles.img} alt="" />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.priceAndTitle}>
            <p className={styles.title}>{product.title}</p>
            <p>${product.price}</p>
          </div>
          <div className={styles.divider}></div>
          <p className={styles.description}>{product.description}</p>
          <p>
            {product.rating.rate} from {product.rating.count} reviews
          </p>
          <div>
            <button className={styles.button} type="button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* <p>{location}</p> */}
    </div>
  );
};

export default Item;
