import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import headerStyles from "./components/HomeComponents/Header/Header.module.css";
import shoppingBag from "./assets/shopping-bag.png";

import Header from "./components/HomeComponents/Header/Header";
// import StickyHeader from "./components/HomeComponents/Header/StickyHeader";
import NavBar from "./components/HomeComponents/NavBar/NavBar";
import HomeBody from "./components/HomeComponents/HomeBody/HomeBody";
import Footer from "./components/Footer/Footer";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Button from "./components/Button/Button";
import ProductCard from "./components/ProductCard/ProductCard";
import Products from "./components/Products/products";
import DefaultProfile from "./components/DefaultProfile"; //change this to an actual default page
// import FetchProducts from "./components/FetchProducts";
import GetProductCards from "./components/GetProductCards/GetProductCards";

import { useParams } from "react-router-dom"; // so that we can dynamically swap pages
import { debounce } from "lodash";

import { createContext } from "react";

//////////CONTEXT TESTING////////
export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  // countCartItems: () => {},
});

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  // const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation(); // determines the current path (url)

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, newItem];
      setCartItemCount(updatedCart.length);
      return updatedCart;
    });

    // setCartItemCount((prevCount) => prevCount + 1);
    // setCartItemCount(cartItems.length);
    // When you use the function form of setState, React
    // automatically passes the current state value to the function as your arg
  };
  // const removeFromCart = (index) => {
  //   setCartItems((prevItems) => {
  //     prevItems.filter((_, i) => i == index);
  //   });
  //   setCartItemCount((prevCount) => prevCount - 1);
  // };
  const removeFromCart = (index) => {
    setCartItems((prevItems) => [
      ...prevItems.slice(0, index),
      ...prevItems.slice(index + 1),
    ]);
  };
  // for in memory cache
  // const cache = useRef({});

  useEffect(() => {
    const cachedProducts = localStorage.getItem("products");

    const handleScroll = () => {
      // if we scroll at all, then swap conditional styling on header
      setIsScrolled(window.scrollY > 0);
    };

    if (cachedProducts) {
      // use cached data if available
      // setProducts(cachedProducts);
      setProducts(JSON.parse(cachedProducts));
      setLoading(false);
    } else {
      fetch("https://fakestoreapi.com/products", { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("products", JSON.stringify(data));
          // json.stringify is used to convert js object into string which helps us with local storage
          setProducts(data);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className={styles.appWindow}>
      <CartContext.Provider
        value={{ cartItems, addToCart, cartItemCount, removeFromCart }}
      >
        <Header products={products} isScrolled={isScrolled} />
        {/* {isSticky && <StickyHeader />} */}
        {/* <NavBar products={products} /> */}
        {location.pathname === "/" ? (
          <HomeBody products={products} />
        ) : (
          <Outlet />
        )}
        {/* if at the home url, we render home component. If at another url, render child component */}
      </CartContext.Provider>
      {/* footer should go here */}
      <Footer />
    </div>
  );
};

export default App;
