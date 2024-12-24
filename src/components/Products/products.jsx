import { useParams } from "react-router-dom"; // so that we can dynamically swap pages
import Mens from "../Mens/Mens";
import Womens from "../Womens/Womens";
import DefaultProfile from "../DefaultProfile";
import AllProducts from "../AllProducts/AllProducts";
import Electronics from "../Electronics/Electronics";

const Products = () => {
  let { category } = useParams();
  return (
    <div>
      <p>THIS IS THE PRODUCTS PAGE</p>
      <p>RENDER PRODUCTS HERE</p>
      <p>category: {category}</p>
      {category === "mens" ? (
        <Mens />
      ) : category === "womens" ? (
        <Womens />
      ) : category === "all" ? (
        <AllProducts />
      ) : category === "electronics" ? (
        <Electronics />
      ) : (
        <AllProducts />
      )}
    </div>
  );
};

export default Products;
