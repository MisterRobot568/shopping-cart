import GetProductCards from "../GetProductCards/GetProductCards";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const location = useLocation();
  const { products } = location.state || { products: [] };
  console.log("Products in AllProducts", products);
  return (
    <div>
      <p>All Products Section </p>
      {products.length > 0 ? (
        <GetProductCards productsList={products} />
      ) : (
        <p>No products available.</p>
      )}
      {/* <GetProductCards productList={products} /> */}
    </div>
  );
};

export default AllProducts;
