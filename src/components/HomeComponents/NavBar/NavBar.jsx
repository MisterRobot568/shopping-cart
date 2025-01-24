import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = ({ products, isScrolled }) => {
  return (
    <nav className={`${styles.navBar} ${isScrolled ? styles.scrolled : ""}`}>
      <Link
        to="/products/all"
        className={styles.navLink}
        state={{ products: products }}
      >
        COLLECTION
      </Link>

      <Link
        to="/products/electronics"
        className={styles.navLink}
        state={{
          products: products.filter((p) => p.category === "electronics"),
        }}
      >
        ELECTRONICS
      </Link>

      <Link
        to="/products/mens"
        className={styles.navLink}
        state={{
          products: products.filter((p) => p.category === "men's clothing"),
        }}
      >
        MENS
      </Link>

      <Link
        to="/products/womens"
        className={styles.navLink}
        state={{
          products: products.filter((p) => p.category === "women's clothing"),
        }}
      >
        WOMENS
      </Link>
    </nav>
  );
};

export default NavBar;
