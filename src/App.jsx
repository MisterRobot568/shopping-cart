import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.css";
import shoppingBag from "./assets/shopping-bag.png";

import Header from "./components/HomeComponents/Header/Header";
import NavBar from "./components/HomeComponents/NavBar/NavBar";
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

const App = () => {
  // const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // for in memory cache
  // const cache = useRef({});

  useEffect(() => {
    const cachedProducts = localStorage.getItem("products");

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
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className={styles.appWindow}>
      <Header />
      <NavBar products={products} />
      {/* <nav className={styles.navBar}>
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
      </nav> */}

      <Outlet />

      {/* <p>{name}</p>
      {name === "products" ? (
        <Products />
      ) : name === "test" ? (
        <DefaultProfile />
      ) : (
        <DefaultProfile />
      )}
      <Button></Button>
      <ProductCard /> */}
    </div>
  );
};

export default App;
