import GetProductCards from "../GetProductCards/GetProductCards";
import { useParams, useLocation } from "react-router-dom"; // so that we can dynamically swap pages

const Electronics = () => {
  const location = useLocation();
  const { products } = location.state || { products: [] };
  console.log("Products in electronics products", products);
  return (
    <div>
      <p>Electronics Section</p>
      <GetProductCards productsList={products} />
    </div>
  );
};

export default Electronics;
