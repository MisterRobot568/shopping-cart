import GetProductCards from "../GetProductCards/GetProductCards";
import { useLocation } from "react-router-dom";
import buyPhoto from "../../assets/buy.jpg";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  const location = useLocation();
  const { products } = location.state || { products: [] };
  console.log("Products in AllProducts", products);
  return (
    <div>
      {/* <div className={styles.textAndPhoto}>
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
      </div> */}
      {products.length > 0 ? (
        <GetProductCards productsList={products} />
      ) : (
        <p>No products available.</p>
      )}
      {/* <GetProductCards productList={products} /> */}
    </div>
  );
};

export default AllProducts;
