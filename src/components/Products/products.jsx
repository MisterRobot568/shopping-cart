import { useParams } from "react-router-dom"; // so that we can dynamically swap pages
import Mens from "../Mens/Mens";
import Womens from "../Womens/Womens";
import DefaultProfile from "../DefaultProfile";
import AllProducts from "../AllProducts/AllProducts";
import Electronics from "../Electronics/Electronics";
import styles from "./Products.module.css";
import buyPhoto from "../../assets/buy.jpg";

const Products = () => {
  let { category } = useParams();
  return (
    <div>
      <div className={styles.textAndPhoto}>
        <div className={styles.text}>
          <p className={styles.header}>Our Products</p>
          <p className={styles.blurb}>
            Welcome to The Modern Consumerist! Browse our expertly curated
            collection of everything you didn’t know you needed—from
            trendsetting menswear and women’s essentials to electronics that
            promise to make life easier (but won’t). Indulge responsibly… or
            don’t. After all, it’s all here for your consuming pleasure!
          </p>
        </div>

        <img className={styles.photo} src={buyPhoto} alt="" />
      </div>
      {/* <p>THIS IS THE PRODUCTS PAGE</p>
      <p>RENDER PRODUCTS HERE</p> */}
      <p>category: {category}</p>
      {category === "mens" ? (
        <Mens />
      ) : category === "womens" ? (
        <Womens />
      ) : category === "all" ? (
        <AllProducts />
      ) : category === "electronics" ? (
        <Electronics />
      ) : (
        <AllProducts />
      )}
    </div>
  );
};

export default Products;
