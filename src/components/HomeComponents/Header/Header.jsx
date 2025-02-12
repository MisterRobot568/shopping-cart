import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import shoppingBag from "../../../assets/shopping-bag.svg";
import shoppingBagInverted from "../../../assets/shopping-bag-inverted.svg";

import menuBtn from "../../../assets/menu-btn.svg";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBarMobile";
import { useState, useEffect } from "react";

import { useContext } from "react";
import { CartContext } from "../../../App";

const Header = ({ products, isScrolled }) => {
  const { cartItems, addToCart, cartItemCount } = useContext(CartContext);
  // const itemCountCart = cartItems.length;

  // logic for opening and closing popup nav menu
  const [isClosed, setIsClosed] = useState(false);
  const openPopup = () => {
    setIsClosed(false);
  };
  const closePopup = () => {
    setIsClosed(true);
  };
  const togglePopUp = () => {
    if (isClosed) {
      setIsClosed(false);
      console.log("working");
    } else {
      setIsClosed(true);
    }
  };
  return (
    <div
      className={`${styles.outerContainer} ${
        isScrolled ? styles.scrolledOuter : ""
      }`}
    >
      <div
        // className={styles.container}
        className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}
      >
        {/* <div className={styles.spacer}></div> */}
        <div
          className={`${styles.innerContainer} ${
            isScrolled ? styles.scrolledInner : ""
          }`}
        >
          <div
            className={`${styles.spacer} ${
              isScrolled ? styles.scrolledDivider : ""
            }`}
          ></div>
          {isScrolled && (
            <div
              className={`${styles.navBarMobileBtn} ${
                isScrolled ? "" : styles.navBarBtnScrolled
                // this conditional may be redundant. Check later
              }`}
            >
              <button
                className={styles.menuBtn}
                type="button"
                onClick={togglePopUp}
              >
                <img src={menuBtn} alt="" />
              </button>
            </div>
          )}
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

          <Link
            className={`${styles.shoppingBag} ${
              isScrolled ? styles.scrolledBag : ""
            }`}
            to="/cart"
          >
            <p>cart:{cartItemCount}</p>
            {/* <p>cart:{itemCountCart}</p> */}
            {isScrolled ? (
              <img src={shoppingBagInverted} alt="bag" />
            ) : (
              <img src={shoppingBag} alt="bag" />
            )}
            {/* <img src={shoppingBag} alt="bag" /> */}
          </Link>
        </div>
        <NavBar
          // className={styles.navBar}
          products={products}
          isScrolled={isScrolled}
        />
      </div>
      {isScrolled && (
        <NavBarMobile
          products={products}
          isClosed={isClosed}
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default Header;
