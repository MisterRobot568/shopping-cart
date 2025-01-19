import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import shoppingBag from "../../../assets/shopping-bag.png";
import NavBar from "../NavBar/NavBar";

const Header = ({ products, isScrolled }) => {
  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      {/* <div className={styles.spacer}></div> */}
      <h1>
        <Link
          className={`${styles.titleLink} ${
            isScrolled ? styles.scrolledText : ""
          }`}
          to="/"
        >
          <p className={styles.topTitle}>MODERN </p>
          <p className={styles.bottomTitle}>CONSUMERISM</p>
        </Link>
        {/* Maybe make a stylized logo and turn this into img instead of text? */}
      </h1>

      <Link className={styles.shoppingBag} to="">
        <img src={shoppingBag} alt="bag" />
      </Link>
      <NavBar products={products} />
    </div>
  );
};

export default Header;
