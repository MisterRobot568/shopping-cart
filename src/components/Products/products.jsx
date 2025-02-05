import { useParams } from "react-router-dom"; // so that we can dynamically swap pages
import Mens from "../Mens/Mens";
import Womens from "../Womens/Womens";
import DefaultProfile from "../DefaultProfile";
import AllProducts from "../AllProducts/AllProducts";
import Electronics from "../Electronics/Electronics";
import styles from "./Products.module.css";
import buyPhoto from "../../assets/buy.jpg";
import bannerPhoto from "../../assets/shopping-cart.jpg";

const Products = () => {
  let { category } = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.textAndPhoto}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <p className={styles.header}>OUR PRODUCTS</p>
            <p className={styles.blurb}>
              Welcome to The Modern Consumerist! Browse our expertly curated
              collection of everything you didn’t know you needed—from
              trendsetting menswear and women’s essentials to electronics that
              promise to make life easier. Indulge responsibly… or don’t. After
              all, you can never have enough stuff!
            </p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.photo} src={bannerPhoto} alt="" />
        </div>
      </div>
      {/* <p>THIS IS THE PRODUCTS PAGE</p>
      <p>RENDER PRODUCTS HERE</p> */}
      <div className={styles.productsContainer}>
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
    </div>
  );
};

export default Products;
