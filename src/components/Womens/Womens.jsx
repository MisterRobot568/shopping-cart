import { useParams, useLocation } from "react-router-dom"; // so that we can dynamically swap pages
import GetProductCards from "../GetProductCards/GetProductCards";
// import React from "react";

const Womens = () => {
  const location = useLocation();
  const { products } = location.state || { products: [] };
  return (
    <div>
      <GetProductCards productsList={products} />
    </div>
  );
};

export default Womens;
