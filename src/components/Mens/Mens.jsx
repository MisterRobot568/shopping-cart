import { useParams, useLocation } from "react-router-dom"; // so that we can dynamically swap pages
import GetProductCards from "../GetProductCards/GetProductCards";

const Mens = () => {
  const location = useLocation();
  const { products } = location.state || { products: [] };
  console.log("Products in mens products", products);
  return (
    <div>
      <GetProductCards productsList={products} />
      <p>MENS SELECTION </p>
    </div>
  );
};

export default Mens;
