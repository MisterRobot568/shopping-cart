import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import shoppingBag from "../../../assets/shopping-bag.png";
const Header = () => {
  return (
    <div className={styles.title}>
      <h1>
        <Link className={styles.titleLink} to="/">
          Generic Shopping App
        </Link>
        {/* Maybe make a stylized logo and turn this into img instead of text? */}
      </h1>
      <h1>
        <Link to="">
          <img src={shoppingBag} alt="bag" />
        </Link>
      </h1>
    </div>
  );
};

export default Header;
