import { Link } from "react-router-dom";
import styles from "./NavBarMobile.module.css";
import { useEffect, useRef } from "react";

import arrowUp from "../../../assets/arrow-up.svg";
import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";

const NavBarMobile = ({ products, isClosed, closePopup }) => {
  ///////////////////////////////////////////
  // REVIEW THIS CODEBLOCK
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closePopup]);
  ///////////////////////////////////////////////
  return (
    <div
      className={`${styles.container} ${isClosed ? styles.closeContainer : ""}`}
      ref={popupRef}
    >
      <nav className={styles.navBar}>
        {/* <nav className={`${styles.navBar} ${isClosed ? styles.closeNavBar : ""}`}> */}
        <Link
          to="/products/all"
          className={styles.navLink}
          state={{ products: products }}
        >
          COLLECTION
        </Link>
        <div className={styles.spacer}></div>

        <Link
          to="/products/electronics"
          className={styles.navLink}
          state={{
            products: products.filter((p) => p.category === "electronics"),
          }}
        >
          ELECTRONICS
        </Link>
        <div className={styles.spacer}></div>

        <Link
          to="/products/mens"
          className={styles.navLink}
          state={{
            products: products.filter((p) => p.category === "men's clothing"),
          }}
        >
          MENS
        </Link>
        <div className={styles.spacer}></div>

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
      <button className={styles.closeButton} type="button" onClick={closePopup}>
        <img className={styles.arrowUpIcon} src={arrowUp} alt="" />
      </button>
    </div>
  );
};

export default NavBarMobile;
