// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Button from "./components/Button/Button";
import ProductCard from "./components/ProductCard/ProductCard";
import Products from "./components/Products/products";
import DefaultProfile from "./components/DefaultProfile"; //change this to an actual default page

import { useParams } from "react-router-dom"; // so that we can dynamically swap pages
const App = () => {
  // const { name } = useParams();
  return (
    <div>
      <h1>Hello from the Home page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <li>click here to return to this page</li>
      <p>Add a button here so the user can Enter the site</p>
      <nav>
        <ul>
          <li>
            <Link to="/products/all">Collection</Link>
          </li>
          <li>
            <Link to="/products/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/products/mens">Mens</Link>
          </li>
          <li>
            <Link to="/products/womens">Womens</Link>
          </li>
        </ul>
      </nav>
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
