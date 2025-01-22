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
        Collection
      </Link>

      <Link
        to="/products/electronics"
        className={styles.navLink}
        state={{
          products: products.filter((p) => p.category === "electronics"),
        }}
      >
        Electronics
      </Link>

      <Link
        to="/products/mens"
        className={styles.navLink}
        state={{
          products: products.filter((p) => p.category === "men's clothing"),
        }}
      >
        Mens
      </Link>

      <Link
        to="/products/womens"
        className={styles.navLink}
        state={{
          products: products.filter((p) => p.category === "women's clothing"),
        }}
      >
        Womens
      </Link>
    </nav>
  );
};

export default NavBar;
