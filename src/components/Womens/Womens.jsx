import { useParams } from "react-router-dom"; // so that we can dynamically swap pages
import GetProductCards from "../GetProductCards/GetProductCards";

const Womens = () => {
  return (
    <div>
      <p>WOMENS SELECTION </p>
      <GetProductCards category="women's clothing" />
    </div>
  );
};

export default Womens;
